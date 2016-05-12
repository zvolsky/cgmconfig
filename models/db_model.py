# -*- coding: utf-8 -*-

class Ciselnik(object):
    pass
ciselnik = Ciselnik()

db.define_table('configfile',
        Field('configfile', 'upload', requires=IS_NOT_EMPTY(), label='config.js',
                comment='vlož (původní) konfigurační soubor'),
        Field('cfcontent', 'text', readable=False, writable=False),
        Field('cfparsed_ok', 'boolean', default=False, readable=False, writable=False),
        )

db.define_table('baselayers',
        Field('baselayer', 'string', length=32, requires=IS_NOT_EMPTY(), label='baseLayer',
              comment='číselník baseLayer pro tabulku places'),
        )

db.define_table('datatypes',
        Field('dtid', 'string', length=32, requires=IS_NOT_EMPTY(), label='id',
              comment='označení'),
        Field('dtcs', 'string', length=128, requires=IS_NOT_EMPTY(), label='cs',
              comment='český popis'),
        Field('dten', 'string', length=128, label='en',
              comment='anglický popis / english description'),
        )

db.define_table('ekosystemtypes',
        Field('etid', 'string', length=32, requires=IS_NOT_EMPTY(), label='id',
              comment='označení'),
        Field('etcs', 'string', length=128, requires=IS_NOT_EMPTY(), label='cs',
              comment='český popis'),
        Field('eten', 'string', length=128, label='en',
              comment='anglický popis / english description'),
        )

ciselnik.baselayers = db(db.baselayers).select(db.baselayers.baselayer).as_list()
ciselnik.datatypes = db(db.datatypes).select(db.datatypes.dtid).as_list()
ciselnik.ekosystemtypes = db(db.ekosystemtypes).select(db.ekosystemtypes.etid).as_list()

db.define_table('places',
        Field('ptitlecs', 'string', length=255, requires=IS_NOT_EMPTY(), label='title',
              comment='označení místa (bez uvozovek)'),
        Field('ptitleen', 'string', length=255, label='title en',
              comment='označení místa anglicky / english (nepovinné)'),
        Field('baselayer_id', 'list:string',
              requires=[IS_NOT_EMPTY(), IS_IN_SET(ciselnik.baselayers)],
              label='baseLayer',
              comment='nabízené baseLayer lze editovat v samostatné tabulce'),
        Field('pextentl', 'decimal(6,3)', requires=IS_NOT_EMPTY(), label='extent L',
              comment='souřadnice, Left, příklad: 15.152'),
        Field('pextentb', 'decimal(6,3)', requires=IS_NOT_EMPTY(), label='extent B',
              comment='souřadnice, Bottom, příklad: 49.429'),
        Field('pextentr', 'decimal(6,3)', requires=IS_NOT_EMPTY(), label='extent R',
              comment='souřadnice, Right, příklad: 15.355'),
        Field('pextentt', 'decimal(6,3)', requires=IS_NOT_EMPTY(), label='extent T',
              comment='souřadnice, Top, příklad: 49.524'),
        )

db.define_table('campaigns',
        Field('places_id', db.places, requires=IS_NOT_EMPTY(), label='places',
              comment='místo'),
        Field('cdaterange', 'date', requires=IS_NOT_EMPTY(), label='datum (od)',
              comment='jediné nebo počáteční datum pro dateRange'),
        Field('cdaterange2', 'date', label='datum do',
              comment='konečné datum pro dateRange (pokud se liší od počátečního)'),
        )

db.define_table('datasets',
        Field('dtitlecs', 'string', length=255, requires=IS_NOT_EMPTY(), label='title',
              comment='označení místa (bez uvozovek)'),
        Field('dtitleen', 'string', length=255, label='title en',
              comment='označení místa anglicky / english (nepovinné)'),
        Field('ddate', 'datetime', requires=IS_NOT_EMPTY(), label='date',
              comment='datum a čas, doporučeno v UTC (tz = Z)'),
        Field('ddatetz', 'string', length=1, default='Z', requires=IS_NOT_EMPTY(), label='date tz',
              comment='časová zóna pro date'),
        Field('datatypes_id', 'list:string',
              requires=[IS_NOT_EMPTY(), IS_IN_SET(ciselnik.datatypes)],
              label='datatypes', comment=''),
        Field('ekosystemtypes_id', 'list:string',
              requires=[IS_NOT_EMPTY(), IS_IN_SET(ciselnik.ekosystemtypes)],
              label='ekosystemtypes', comment=''),
        Field('dlayer', 'string', length=128, requires=IS_NOT_EMPTY(), label='layer/sublayer',
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
        Field('ddescriptioncs', 'string', length=255, requires=IS_NOT_EMPTY(), label='description',
              comment='popis (bez uvozovek, nepovinné)'),
        Field('ddescriptionen', 'string', length=255, label='description en',
              comment='popis anglicky / description in english (nepovinné)'),
        )
