# -*- coding: utf-8 -*-

import datetime
import os

from gluon.contrib import simplejson

from plugin_mz import formstyle_bootstrap3_compact_factory


MSG_PROC = DIV("Tato mezistránka jen ukazuje, zda proces načtení config.js probíhá správně. Stiskni (dole) Pokračovat.",
        _class="alert alert-info")
MSG_BACK = P(A("opakovat vyhledání a načtení konfiguračního souboru config.js",
               _href="%s" % URL('nacti'), _class="btn btn-link"))


@auth.requires_membership('admin')
def index():
    __nacti_if_nic()
    session.flash = "Data jsou načtena, lze je upravit a stáhnout výsledný config.js. Nebo načti config.js znovu volbou menu Načti."
    redirect(URL('places'))

@auth.requires_membership('admin')
def nacti():
    form = SQLFORM.factory(Field('configfile', 'upload',
                uploadfolder = os.path.join(request.folder, 'uploads'),
                requires=IS_NOT_EMPTY_(),
                label='config.js', comment='vlož (původní) konfigurační soubor'),
            table_name='configfile',
            submit_button='Načíst zadaný soubor')
    if form.process().accepted:
        db.configfile.truncate('RESTART IDENTITY CASCADE')  # param podle book-6 pro SQLite
        db.configfile.insert(configfile=form.vars.configfile)
        redirect(URL('nacti1'))

    return dict(form=form)

@auth.requires_membership('admin')
def nacti1():
    db.places.truncate('RESTART IDENTITY CASCADE')
    db.campaigns.truncate('RESTART IDENTITY CASCADE')
    db.datasets.truncate('RESTART IDENTITY CASCADE')
    db.baselayers.truncate('RESTART IDENTITY CASCADE')
    db.datatypes.truncate('RESTART IDENTITY CASCADE')
    db.ekosystemtypes.truncate('RESTART IDENTITY CASCADE')
    db.commit()

    configfile = db(db.configfile).select().first()
    if not configfile or not configfile.configfile:
        redirect(URL('nacti'))

    with open(os.path.join(request.folder, 'uploads', configfile.configfile)) as cfg:
        content = cfg.read()
    if content[:3] == chr(0xef)+chr(0xbb)+chr(0xbf):  # remove Byte order mark if present
        content = content[3:]
    configfile.update_record(cfcontent=content)
    redirect(URL('nacti2'))

@auth.requires_membership('admin')
def nacti2():
    configfile = db(db.configfile).select().first()
    if not configfile or not configfile.cfcontent:
        redirect(URL('nacti'))

    db.configfile.configfile.readable = False
    db.configfile.configfile.writable = False
    db.configfile.cfcontent.readable = True
    db.configfile.cfcontent.writable = True

    form = SQLFORM(db.configfile, configfile.id, showid=False, submit_button='Pokračovat')
    if form.process().accepted:
        redirect(URL('nacti3'))

    return dict(form=form, msg=(MSG_PROC, MSG_BACK))

@auth.requires_membership('admin')
def nacti3():
    TIT_UNKNOWN = '? (before assignment in dataset cycle)'  # initialized for error reporting

    def cnvdate(yyyymmdd):
        return datetime.datetime.strptime(yyyymmdd, '%Y-%m-%d').date()

    configfile = db(db.configfile).select().first()
    if not configfile or not configfile.cfcontent:
        redirect(URL('nacti'))

    form = SQLFORM.factory(
        Field('baselayers', 'text', label='baselayers'),
        Field('datatypes', 'text', label='datatypes'),
        Field('ekosystemtypes', 'text', label='ekosystemtypes'),
        Field('places', 'text', requires=[], label='data'),
        hidden=dict(JSONbaselayers='', JSONdatatypes='', JSONekosystemtypes='', JSONplaces=''),
        submit_button='Pokračovat'
    )
    if form.process().accepted:
        for baselayer in simplejson.loads(request.vars.JSONbaselayers):
            db.baselayers[0] = dict(baselayer=baselayer)
        for datatype in simplejson.loads(request.vars.JSONdatatypes):
            tit = datatype['title']
            children = datatype.get('children', [])
            datatypes_id = db.datatypes.insert(dtid=datatype['id'], dtcs=tit['cs'], dten=tit['en'])
            for child in children:
                tit = child['title']
                db.datatypes.insert(dt_parent_id=datatypes_id, dtid=child['id'], dtcs=tit['cs'], dten=tit['en'])
                # obsolete: db.dt_children[0] = dict(datatypes_id=datatypes_id, dtchid=child['id'], dtchcs=tit['cs'], dtchen=tit['en'])
        for ekosystemtype in simplejson.loads(request.vars.JSONekosystemtypes):
            tit = ekosystemtype['title']
            db.ekosystemtypes[0] = dict(etid=ekosystemtype['id'], etcs=tit['cs'], eten=tit['en'])
        db.commit()

        baselayers = db(db.baselayers).select()
        baselayers = {baselayer.baselayer: baselayer.id for baselayer in baselayers}

        datatypes = db(db.datatypes).select(db.datatypes.id, db.datatypes.dtid)
        datatypes = {datatype.dtid: datatype.id for datatype in datatypes}
        '''obsolete, nově datatypes s hierarchií datatypes.dt_parent_id 
        children = db(db.dt_children).select(db.dt_children.id, db.dt_children.dtchid)
        children = {children.dtid: child.id for child in children}
        '''

        ekosystemtypes = db(db.ekosystemtypes).select(db.ekosystemtypes.id, db.ekosystemtypes.etid)
        ekosystemtypes = {ekosystemtype.etid: ekosystemtype.id for ekosystemtype in ekosystemtypes}

        for place in simplejson.loads(request.vars.JSONplaces):
            pltit = place['title']
            try:
                pltiten = pltit.get('en', '')
                pltitcs = pltit.get('cs', pltiten)
            except:
                pltiten = ''
                pltitcs = pltit
            titcs = TIT_UNKNOWN  # for possible exception reporting

            try:  # to report "place" in case of error
                extent = place['extent']
                places_id = db.places.insert(baselayers_id=baselayers[place['baseLayer']],
                            ptitlecs=pltitcs, ptitleen=pltiten,
                            pextentl=extent[0], pextentb=extent[1], pextentr=extent[2], pextentt=extent[3])
                cnt_campaign = 0
                for campaign in place['campaigns']:
                    titcs = TIT_UNKNOWN  # for possible exception reporting
                    daterange = campaign['dateRange']
                    try:
                        date0 = cnvdate(daterange[0])
                        date1 = cnvdate(daterange[1])
                    except:
                        date0 = cnvdate(daterange)
                        date1 = None
                    campaigns_id = db.campaigns.insert(places_id=places_id,
                            cdaterange=date0, cdaterange2=date1)
                    cnt_campaign += 1
                    cnt_dataset = 0
                    for dataset in campaign['datasets']:
                        is_shown = dataset.get('is_shown', 'yes') == 'yes'
                        titcs = TIT_UNKNOWN  # for possible exception reporting
                        tit = dataset['title']
                        des = dataset.get('description')
                        lgu = dataset.get('legendUrl')
                        try:
                            titen = tit.get('en', '')
                            titcs = tit.get('cs', titen)
                        except:
                            titen = ''
                            titcs = tit
                        try:
                            desen = des.get('en', '')
                            descs = des.get('cs', desen)
                        except:
                            desen = None
                            descs = des
                        try:
                            lguen = lgu.get('en', '')
                            lgucs = lgu.get('cs', lguen)
                        except:
                            lguen = None
                            lgucs = lgu
                        ddate = dataset['date']
                        dspectralrange = dataset.get('spectralRange', [None, None])
                        dspectralresolution = dataset.get('spectralResolution')
                        if type(dspectralresolution) not in (tuple, list):
                            dspectralresolution = [dspectralresolution, dspectralresolution]
                        elif len(dspectralresolution) == 1:
                            dspectralresolution = [dspectralresolution[0], dspectralresolution[0]]
                        elif len(dspectralresolution) == 0:
                            dspectralresolution = [None, None]

                        dlayer = dataset.get('layer')
                        db.datasets.insert(campaigns_id=campaigns_id,
                                is_shown=is_shown,
                                dtitlecs=titcs, dtitleen=titen,
                                ddate=datetime.datetime.strptime(ddate[:16], '%Y-%m-%d %H:%M'), ddatetz=ddate[16:] or 'Z',
                                datatypes_id=[datatypes[datatype.encode('utf-8')] for datatype in dataset['dataTypes']],
                                ekosystemtypes_id=[ekosystemtypes[ekosystemtype.encode('utf-8')] for ekosystemtype in dataset['ekosystemTypes']],
                                dlayer=dlayer['sublayers'] if dlayer else None,
                                dspatialresolution=dataset.get('spatialResolution'),
                                dpointspermeter=dataset.get('pointsPerMeter'),
                                dspectralrangefrom=dspectralrange[0], dspectralrangeto=dspectralrange[1],
                                dspectralresolutionfrom=dspectralresolution[0], dspectralresolutionto=dspectralresolution[1],
                                dnumberofbands=dataset.get('numberOfBands'),
                                ddescriptioncs=descs, ddescriptionen=desen,
                                dlegendurlcs=lgucs, dlegendurlen=lguen
                                )
                        cnt_dataset += 1
                    db.campaigns[campaigns_id] = dict(cnt_dataset=cnt_dataset)
                db.places[places_id] = dict(cnt_campaign=cnt_campaign)

            except Exception as exc:
                import sys
                import traceback

                errmsg = "Failed to import place: %s, dataset: %s" % (pltitcs, titcs)
                exc_type, exc_value, exc_traceback = sys.exc_info()
                errmsg += 3*'\n' + '\n'.join(traceback.format_exception(exc_type, exc_value, exc_traceback))
                print errmsg
                return errmsg.replace('\n', '<br>')

        db(db.configfile).update(cfparsed_ok=True)
        redirect(URL('places'))

    return dict(js=configfile.cfcontent, form=form, msg=(MSG_PROC, MSG_BACK))

@auth.requires_membership('admin')
def places():
    def oncreate(form):
        if form.table._tablename == 'campaigns':
            place = db(db.places.id == form.custom.inpval.places_id).select(db.places.id, db.places.cnt_campaign).first()
            place.update_record(cnt_campaign=place.cnt_campaign + 1)
        elif form.table._tablename == 'datasets':
            campaign = db(db.campaigns.id == form.custom.inpval.campaigns_id).select(db.campaigns.id, db.campaigns.cnt_dataset).first()
            campaign.update_record(cnt_dataset=campaign.cnt_dataset + 1)

    def ondelete(table, rec_id):
        if table._tablename == 'campaigns':
            place = db(table.id == rec_id).select(db.places.id, db.places.cnt_campaign,
                                              join=db.places.on(db.places.id == db.campaigns.places_id)).first()
            place.update_record(cnt_campaign=max(0, place.cnt_campaign - 1))
        elif table._tablename == 'datasets':
            campaign = db(table.id == rec_id).select(db.campaigns.id, db.campaigns.cnt_dataset,
                                              join=db.campaigns.on(db.campaigns.id == db.datasets.campaigns_id)).first()
            campaign.update_record(cnt_dataset=max(0, campaign.cnt_dataset - 1))

    __nacti_if_nic()
    db.places.id.readable = False
    db.campaigns.id.readable = False
    db.datasets.id.readable = False
    grid = SQLFORM.smartgrid(
            db.places,
            fields={'places': [db.places.id, db.places.ptitlecs, db.places.cnt_campaign],
                    'campaigns':None,
                    'datasets': [db.datasets.id, db.datasets.campaigns_id, db.datasets.dtitlecs, db.datasets.dtitleen,
                                 db.datasets.ddate, db.datasets.ddatetz,
                                 db.datasets.datatypes_id, db.datasets.ekosystemtypes_id, db.datasets.dlayer]},
            formstyle=formstyle_bootstrap3_compact_factory(),
            orderby={'places': 'places.ptitlecs collate `czech`'},
            paginate=200,
            searchable={'places': True, 'campaigns': False, 'datasets': False},
            oncreate=oncreate,
            ondelete=ondelete,
            user_signature=False,
            showbuttontext=False,
            divider=2*unichr(160) + '>' + 2*unichr(160)
            )
    return dict(grid=grid)

@auth.requires_membership('admin')
def baselayers():
    __nacti_if_nic()
    grid = SQLFORM.grid(db.baselayers,
            user_signature=False,
            deletable=False,
            showbuttontext=False
            )
    return dict(grid=grid, hdr='baselayers')

@auth.requires_membership('admin')
def datatypes():
    __nacti_if_nic()
    grid = SQLFORM.smartgrid(db.datatypes,
            searchable={'datatypes': True, 'dt_children': False},
            user_signature=False,
            deletable=False,
            showbuttontext=False,
            divider=2*unichr(160) + '>' + 2*unichr(160)
            )
    response.view = 'default/baselayers.html'
    return dict(grid=grid, hdr='datatypes')

@auth.requires_membership('admin')
def ekosystemtypes():
    __nacti_if_nic()
    grid = SQLFORM.grid(db.ekosystemtypes,
            user_signature=False,
            deletable=False,
            showbuttontext=False
            )
    response.view = 'default/baselayers.html'
    return dict(grid=grid, hdr='ekosystemtypes')

def __nacti_if_nic():
    configfile = db(db.configfile).select().first()
    if (not configfile or not configfile.cfparsed_ok
                or not db(db.places).count() or not db(db.baselayers).count()
                or not db(db.datatypes).count() or not db(db.ekosystemtypes).count()):
        session.flash = "Není načten config.js (chybí data (místa) nebo některý pomocný číselník). Je třeba jej nejprve načíst."
        redirect(URL('nacti'))

def not_shown():
    datasets = db(db.datasets.is_shown == False).select(
        db.datasets.ALL, db.campaigns.ALL, db.places.ALL,
        join=[db.campaigns.on(db.campaigns.id == db.datasets.campaigns_id),
                db.places.on(db.places.id == db.campaigns.places_id)])
    return dict(datasets=datasets)


@auth.requires_membership('admin')
def stahni():
    ret = __stahni(db.datasets.is_shown == True)
    ret['bk'] = False
    return ret

@auth.requires_membership('admin')
def stahni_bk():
    response.view = 'default/stahni.html'
    ret = __stahni(db.datasets)
    ret['bk'] = True
    return ret

def __stahni(query):
    __nacti_if_nic()
    places = db(db.places).select(db.places.id, db.places.ptitlecs, orderby=db.places.id)
    datasets = db(query).select(db.places.id, distinct=True,
            join=[db.campaigns.on(db.campaigns.id == db.datasets.campaigns_id),
                db.places.on(db.places.id == db.campaigns.places_id)])
    places_w_dataset = set()
    for dataset in datasets:
        places_w_dataset.add(dataset.id)
    return dict(problems=[place for place in places if place.id not in places_w_dataset],
                cnt=len(db(query).select(db.datasets.id)), hidden=db(db.datasets.is_shown == False).count())

def wiki():
    return auth.wiki()

def user():
    """
    exposes:
    http://..../[app]/default/user/login
    http://..../[app]/default/user/logout
    http://..../[app]/default/user/register
    http://..../[app]/default/user/profile
    http://..../[app]/default/user/retrieve_password
    http://..../[app]/default/user/change_password
    http://..../[app]/default/user/bulk_register
    use @auth.requires_login()
        @auth.requires_membership('group name')
        @auth.requires_permission('read','table name',record_id)
    to decorate functions that need access control
    also notice there is http://..../[app]/appadmin/manage/auth to allow administrator to manage users
    """
    return dict(form=auth())


@cache.action()
def download():
    """
    allows downloading of uploaded files
    http://..../[app]/default/download/[filename]
    """
    return response.download(request, db)


def call():
    """
    exposes services. for example:
    http://..../[app]/default/call/jsonrpc
    decorate with @services.jsonrpc the functions to expose
    supports xml, json, xmlrpc, jsonrpc, amfrpc, rss, csv
    """
    return service()
