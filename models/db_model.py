# -*- coding: utf-8 -*-

class Ciselnik(object):
    ctrl = '(Ctrl+click vybere více možností současně)'
    err_vyber = 'Vyber jednu nebo více možností'
    err_neco = 'Údaj je povinný'

class IS_NOT_EMPTY_(IS_NOT_EMPTY):
    def __init__(self):
        super(IS_NOT_EMPTY_, self).__init__(error_message=Ciselnik.err_neco)

class IS_IN_DB_(IS_IN_DB):
    def __init__(self, *args, **kwargs):
        super(IS_IN_DB_, self).__init__(*args, error_message=Ciselnik.err_vyber, **kwargs)

db.define_table('configfile',
        Field('configfile', 'upload', requires=IS_NOT_EMPTY_(), label='config.js',
                comment='vlož (původní) konfigurační soubor'),
        Field('cfcontent', 'text', requires=[], readable=False, writable=False),
        Field('cfparsed_ok', 'boolean', default=False, readable=False, writable=False),
        )

db.define_table('baselayers',
        Field('baselayer', 'string', length=32, requires=IS_NOT_EMPTY_(), label='baseLayer',
              comment='označení položky'),
        format=lambda r: r.baselayer
        )

db.define_table('datatypes',
        Field('dtid', 'string', length=32, requires=IS_NOT_EMPTY_(), label='id',
              comment='označení položky'),
        Field('dtcs', 'string', length=128, requires=IS_NOT_EMPTY_(), label='cs',
              comment='český popis'),
        Field('dten', 'string', length=128, label='en',
              comment='anglický popis / english description'),
        format=lambda r: r.dtid
        )

db.define_table('ekosystemtypes',
        Field('etid', 'string', length=32, requires=IS_NOT_EMPTY_(), label='id',
              comment='označení položky'),
        Field('etcs', 'string', length=128, requires=IS_NOT_EMPTY_(), label='cs',
              comment='český popis'),
        Field('eten', 'string', length=128, label='en',
              comment='anglický popis / english description'),
        format=lambda r: r.etid
        )

db.define_table('places',
        Field('ptitlecs', 'string', length=255, requires=IS_NOT_EMPTY_(), label='title',
              comment='označení místa (bez uvozovek)'),
        Field('ptitleen', 'string', length=255, label='title en',
              comment='označení místa anglicky / english (nepovinné)'),
        Field('baselayers_id', db.baselayers,
              label='baseLayer',
              comment='nabízené baseLayer lze editovat v samostatné tabulce'),
        Field('pextentl', 'decimal(6,3)', requires=IS_NOT_EMPTY_(), label='extent L',
              comment='souřadnice, Left, příklad: 15.152'),
        Field('pextentb', 'decimal(6,3)', requires=IS_NOT_EMPTY_(), label='extent B',
              comment='souřadnice, Bottom, příklad: 49.429'),
        Field('pextentr', 'decimal(6,3)', requires=IS_NOT_EMPTY_(), label='extent R',
              comment='souřadnice, Right, příklad: 15.355'),
        Field('pextentt', 'decimal(6,3)', requires=IS_NOT_EMPTY_(), label='extent T',
              comment='souřadnice, Top, příklad: 49.524'),
        Field('cnt_campaign', 'integer', default=0, label='počet kampaní',
              writable=False),
        )

db.define_table('campaigns',
        Field('places_id', db.places, requires=IS_NOT_EMPTY_(), writable=False,
              label='places', comment='místo'),
        Field('cdaterange', 'date', requires=IS_NOT_EMPTY_(), label='datum (od)',
              comment='jediné nebo počáteční datum pro dateRange'),
        Field('cdaterange2', 'date', label='datum do',
              comment='konečné datum pro dateRange (pokud se liší od počátečního)'),
        Field('cnt_dataset', 'integer', default=0, label='počet datasetů',
              writable=False),
        )

db.define_table('datasets',
        Field('campaigns_id', db.campaigns, requires=IS_NOT_EMPTY_(), writable=False,
              label='campaigns', comment='kampaň'),
        Field('dtitlecs', 'string', length=255, requires=IS_NOT_EMPTY_(), label='title',
              comment='označení místa (bez uvozovek)'),
        Field('dtitleen', 'string', length=255, label='title en',
              comment='označení místa anglicky / english (nepovinné)'),
        Field('ddate', 'datetime', requires=IS_NOT_EMPTY_(), label='date',
              comment='datum a čas, doporučeno v UTC (tz = Z)'),
        Field('ddatetz', 'string', length=1, default='Z', requires=IS_NOT_EMPTY_(), label='date tz',
              comment='časová zóna pro date'),
        Field('datatypes_id', 'list:reference datatypes',
              requires=IS_IN_DB_(db, db.datatypes.id, '%(dtid)s', multiple=(1,9999999)),
              label='datatypes', comment=Ciselnik.ctrl),
        Field('ekosystemtypes_id', 'list:reference ekosystemtypes',
              requires=IS_IN_DB_(db, db.ekosystemtypes.id, '%(etid)s', multiple=(1,9999999)),
              label='ekosystemtypes', comment=Ciselnik.ctrl),
        Field('dlayer', 'string', length=128, requires=IS_NOT_EMPTY_(), label='layer/sublayer',
              comment='sublayer pro layer, příklad: kopaniny_dehtare_AISA_29062010'),
        Field('dspatialresolution', 'decimal(5,2)', label='spatialResolution',
              comment='spatialResolution v [m], např. 2.5 (nepovinné)'),
        Field('dpointspermeter', 'decimal(5,1)', label='pointsPerMeter',
              comment='bodů na [m], např. 10 (nepovinné)'),
        Field('dspectralrangefrom', 'decimal(5,1)', label='spectralRange from',
              comment='spektrální rozsah od.. [nm] (nepovinné)'),
        Field('dspectralrangeto', 'decimal(5,1)', label='spectralRange to',
              comment='spektrální rozsah od.. [nm] (nepovinné)'),
        Field('dspectralresolutionfrom', 'decimal(6,3)', label='spectralResolution (from)',
              comment='jediná (nebo počáteční) spektrální přesnost [nm] (nepovinné)'),
        Field('dspectralresolutionto', 'decimal(6,3)', label='spectralResolution to',
              comment='spektrální přesnost [nm], druhá hodnota, je-li uvedena (nepovinné)'),
        Field('dnumberofbands', 'integer', label='numberOfBands',
              comment='počet pásem (nepovinné)'),
        Field('ddescriptioncs', 'string', length=255, label='description',
              comment='popis (bez uvozovek, nepovinné)'),
        Field('ddescriptionen', 'string', length=255, label='description en',
              comment='popis anglicky / description in english (nepovinné)'),
        )
