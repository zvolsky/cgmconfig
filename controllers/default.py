# -*- coding: utf-8 -*-

import os


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

    form = SQLFORM(db.configfile, configfile.id, submit_button='Pokračovat')
    if form.process().accepted:
        redirect(URL('nacti3'))

    return dict(form=form)

def nacti3():
    configfile = db(db.configfile).select().first()
    if not configfile or not configfile.cfcontent:
        redirect(URL('nacti'))

    form = SQLFORM.factory(
        Field('baselayers', 'text', writable=False, label='baselayers'),
        Field('datatypes', 'text', writable=False, label='datatypes'),
        Field('ekosystemtypes', 'text', writable=False, label='ekosystemtypes'),
        Field('places', 'text', writable=False, label='data'),
        hidden=dict(JSONbaselayers='', JSONdatatypes='', JSONekosystemtypes='', JSONplaces=''),
        submit_button='Pokračovat'
    )
    if form.process().accepted:
        print simplejson.loads(request.vars.JSONbaselayers)
        print simplejson.loads(request.vars.JSONdatatypes)
        print simplejson.loads(request.vars.JSONekosystemtypes)
        print simplejson.loads(request.vars.JSONplaces)

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


