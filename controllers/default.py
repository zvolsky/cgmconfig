# -*- coding: utf-8 -*-

import datetime
import os

from gluon.contrib import simplejson


def index():
    configfile = db(db.configfile).select().first()
    if not configfile or not configfile.cfparsed_ok:
        redirect(URL('nacti'))
    redirect(URL('nastav'))

def nacti():
    db.configfile.truncate('RESTART IDENTITY CASCADE')  # param podle book-6 pro SQLite
    db.commit()

    form = SQLFORM(db.configfile, submit_button='Načíst zadaný soubor')
    if form.process().accepted:
        redirect(URL('nacti1'))

    return dict(form=form)

def nacti1():
    db.baselayers.truncate('RESTART IDENTITY CASCADE')
    db.datatypes.truncate('RESTART IDENTITY CASCADE')
    db.ekosystemtypes.truncate('RESTART IDENTITY CASCADE')
    db.places.truncate('RESTART IDENTITY CASCADE')
    db.campaigns.truncate('RESTART IDENTITY CASCADE')
    db.datasets.truncate('RESTART IDENTITY CASCADE')
    db.commit()

    configfile = db(db.configfile).select().first()
    if not configfile or not configfile.configfile:
        redirect(URL('nacti'))

    with open(os.path.join(request.folder, 'uploads', configfile.configfile)) as cfg:
        content = cfg.read()
    configfile.update_record(cfcontent=content)
    redirect(URL('nacti2'))

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

    return dict(form=form)

def nacti3():
    def cnvdate(yyyymmdd):
        return datetime.datetime.strptime('2016-05-20', '%Y-%m-%d').date()

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
            db.datatypes[0] = dict(dtid=datatype['id'], dtcs=tit['cs'], dten=tit['en'])
        for ekosystemtype in simplejson.loads(request.vars.JSONekosystemtypes):
            tit = ekosystemtype['title']
            db.ekosystemtypes[0] = dict(etid=ekosystemtype['id'], etcs=tit['cs'], eten=tit['en'])
        db.commit()

        baselayers = db(db.baselayers).select()
        baselayers = {baselayer.baselayer: baselayer.id for baselayer in baselayers}

        datatypes = db(db.datatypes).select(db.datatypes.id, db.datatypes.dtid)
        datatypes = {datatype.dtid: datatype.id for datatype in datatypes}

        ekosystemtypes = db(db.ekosystemtypes).select(db.ekosystemtypes.id, db.ekosystemtypes.etid)
        ekosystemtypes = {ekosystemtype.etid: ekosystemtype.id for ekosystemtype in ekosystemtypes}

        for place in simplejson.loads(request.vars.JSONplaces):
            tit = place['title']
            try:
                titen = tit.get('en', '')
                titcs = tit.get('cs', titen)
            except:
                titen = ''
                titcs = tit
            extent = place['extent']
            places_id = db.places.insert(baselayers_id=baselayers[place['baseLayer']],
                        ptitlecs=titcs, ptitleen=titen,
                        pextentl=extent[0], pextentb=extent[1], pextentr=extent[2], pextentt=extent[3])
            for campaign in place['campaigns']:
                daterange = campaign['dateRange']
                try:
                    date0 = cnvdate(daterange[0])
                    date1 = cnvdate(daterange[1])
                except:
                    date0 = cnvdate(daterange)
                    date1 = None
                campaigns_id = db.campaigns.insert(places_id=places_id,
                        cdaterange=date0, cdaterange2=date1)
                for dataset in campaign['datasets']:
                    tit = dataset['title']
                    des = dataset.get('description')
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
                    ddate = dataset['date']
                    dspectralrange = dataset.get('spectralRange', [None, None])
                    dspectralresolution = dataset.get('spectralResolution')
                    if type(dspectralresolution) not in (tuple, list):
                        dspectralresolution = [dspectralresolution, None]
                    db.datasets.insert(campaigns_id=campaigns_id,
                            dtitlecs=titcs, dtitleen=titen,
                            ddate=datetime.datetime.strptime(ddate[:16], '%Y-%m-%d %H:%M'), ddatetz=ddate[16:] or 'Z',
                            datatypes_id=[datatypes[datatype] for datatype in dataset['dataTypes']],
                            ekosystemtypes_id=[ekosystemtypes[ekosystemtype] for ekosystemtype in dataset['ekosystemTypes']],
                            dlayer=dataset['layer']['sublayers'],
                            dspatialresolution=dataset.get('spatialResolution'),
                            dpointspermeter=dataset.get('pointsPerMeter'),
                            dspectralrangefrom=dspectralrange[0], dspectralrangeto=dspectralrange[1],
                            dspectralresolutionfrom=dspectralresolution[0], dspectralresolutionto=dspectralresolution[1],
                            dnumberofbands=dataset.get('numberOfBands'),
                            ddescriptioncs=descs, ddescriptionen=desen
                            )

        db(db.configfile).update(cfparsed_ok=True)
        redirect(URL('nastav'))

    return dict(js=configfile.cfcontent, form=form)

def nastav():
    return 'dodelat nastav'



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


