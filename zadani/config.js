var cgcfg = {
  "gwcUrl": "http://mapserver.czechglobe.cz/gwc/",
//  "gwcUrl": "http://172.20.2.18/gwc/",
  "namespacePrefix": "cge",
  "baseLayers": ['osm','bingroad','esritopo','osmbw','bingortho','bingortholabel','esriortho','cuzkortho'],
  "dataTypes": [
    {
      "id": 'hyper',
      "title": {"cs": 'Hyperspektrální data', "en": 'Hyperspectral data'},
      "children": [
        { "id": 'hyper-vnir', "title": {"cs": 'Hyperspektrální VNIR data', "en": 'Hyperspectral VNIR data'} },
        { "id": 'hyper-swir', "title": {"cs": 'Hyperspektrální SWIR data', "en": 'Hyperspectral SWIR data'} }
      ]
    },
    { "id": 'lidar', "title": {"cs": 'LiDARová data', "en": 'LiDAR data'} },
    { "id": 'orto', "title": {"cs": 'Ortofoto', "en": 'Orthophoto'} },
    {
      "id": 'termo',
      "title": {"cs": 'Termální data', "en": 'Thermal data'},
      "children": [
        { "id": 'termo-lwir', "title": {"cs": 'Hyperspektrální LWIR (termální) data', "en": 'Hyperspectral LWIR (thermal) data'} }
      ]
    },
    { "id": 'them', "title": {"cs": 'Tematické výstupy', "en": 'Thematic outputs'} }
  ],
  "ekosystemTypes": [
    { "id": 'les', "title": {"cs": 'les', "en": 'Forest'} },
    { "id": 'město', "title": {"cs": 'město', "en": 'Urban'} },
    { "id": 'agro', "title": {"cs": 'zemědělská půda', "en": 'Agro-ecosystem'} },
    { "id": 'voda', "title": {"cs": 'voda', "en": 'Water'} }
  ],
  "datasetProperties": {
    "title": {
      "title": {
        "cs": "Název",
        "en": "Title"
      }
    },
    "date": {
      "title": {
        "cs": "Datum",
        "en": "Date"
      }
    },
    "dataTypes": {
      "title": {
        "cs": "Typ dat",
        "en": "Data type"
      }
    },
    "ekosystemTypes": {
      "title": {
        "cs": "Typ ekosystému",
        "en": "Ecosystem type"
      }
    },
    "sensor": {
      "title": {
        "cs": "Senzor",
        "en": "Sensor"
      }
    },
    "spatialResolution": {
      "title": {
        "cs": "Prostorové rozlišení",
        "en": "Spatial resolution"
      }
    },
    "pointsPerMeter": {
      "title": {
        "cs": "Bodů na m²",
        "en": "Points per m²"
      }
    },
    "spectralRange": {
      "title": {
        "cs": "Spektrální rozsah",
        "en": "Spectral range"
      }
    },
    "spectralResolution": {
      "title": {
        "cs": "Spektrální rozlišení",
        "en": "Spectral resolution"
      }
    },
    "bands": {
      "title": {
        "cs": "Počet pásem",
        "en": "Number of bands"
      }
    },
    "description": {
      "title": {
        "cs": "Popis",
        "en": "Description"
      }
    },
    "legendUrl": {
      "title": {
        "cs": "Legenda",
        "en": "Legend"
      }
    }
  },
  "overview": {
    "title": {
      "cs": "Přehled míst",
      "en": "Places overview"
    },
    "baseLayer": "osm",
    "extent": [
      12.09,
      48.55,
      18.85,
      51.05
    ]
  },
  "places": [
    {
      "title": "Bílý Kříž",
      "baseLayer": "osm",
      "extent": [18.484, 49.474, 18.556, 49.530],
      "campaigns": [
        {
          "dateRange": ["2010-10-01", "2010-10-01"],
          "datasets": [
            {
              "title": {"cs": "LD 11:45 5 b/m²", "en": "LD 11:45 5 p/m²"},
              "date": "2010-10-01 11:45Z",
              "dataTypes": ['lidar'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'bily_kriz_LIDAR_01102010'
              },
              "pointsPerMeter": 5.0
            }]
        },
        {
          "dateRange": ["2011-09-27", "2011-09-27"],
          "datasets": [
            {
              "title": "HS 08:45 0.4m",
              "date": "2011-09-27 08:45Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'bily_kriz_AISA_27092011'
              },
              "spatialResolution": 0.40,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 9.460,
              "numberOfBands": 65
            }]
        },
        {
          "dateRange": ["2013-05-06", "2013-05-06"],
          "datasets": [
            {
              "title": {"cs": "LD 11:45 50 b/m²", "en": "LD 11:45 50 p/m²"},
              "date": "2013-05-06 11:45Z",
              "dataTypes": ['lidar'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'bily_kriz_LIDAR_06112013'
              },
              "pointsPerMeter": 50.0
            }]
        },
        {
          "dateRange": ["2015-08-31", "2015-08-31"],
          "datasets": [
            {
              "title": "HS 08:15 1 m",
              "date": "2015-08-31 08:15Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'kriz_1_CASI_20150831'
              },
              "spatialResolution": 1.00,
              "spectralRange": [370.0, 1040.0],
              "spectralResolution": 15.000,
              "numberOfBands": 72
            }]
        },
        {
          "dateRange": ["2013-09-08", "2013-09-08"],
          "datasets": [
            {
              "title": "HS 08:45 0.4m",
              "date": "2013-09-08 08:45Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'bily_kriz_AISA_08092013'
              },
              "spatialResolution": 0.40,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 9.460,
              "numberOfBands": 65
            }]
        },
        {
          "dateRange": ["2013-10-09", "2013-10-09"],
          "datasets": [
            {
              "title": "OP 11:25 0.1m",
              "date": "2013-10-09 11:25Z",
              "dataTypes": ['orto'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'bily_kriz_ORTHO_09072013'
              },
              "spatialResolution": 0.10
           // {
           //   "title": "OP 11:25 0.1m_odin",
           //   "date": "2013-10-09 12:25Z",
           //   "dataTypes": ['orto'],
           //   "ekosystemTypes": ['les'],
           //   "layer": {
           //     "type": 'gwc',
           //     "sublayers": 'bily_kriz_ORTHO_09072013_odin'
           //   },
           //   "spatialResolution": 0.10
        //  }]
        //},
        //{
        //  "dateRange": ["2014-07-09", "2014-07-09"],
        //  "datasets": [
        //    {
        //      "title": "louka 11:25 0.1m",
        //     "date": "2014-07-09 11:25Z",
        //      "dataTypes": ['orto'],
        //      "ekosystemTypes": ['les'],
        //      "layer": {
        //        "type": 'gwc',
        //        "sublayers": 'bily_kriz_louka_ORTHO_09072014'
        //      },
        //      "spatialResolution": 0.10
           },
            {
              "title": "les 11:25 0.1m",
              "date": "2014-07-09 11:25Z",
              "dataTypes": ['orto'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'bily_kriz_les_ORTHO_09072014'
              },
              "spatialResolution": 0.10
            }]
        }]
    },

    {
      "title": "Březník",
      "baseLayer": "osm",
      "extent": [13.403, 48.938, 13.528, 49.005],
      "campaigns": [
        {
          "dateRange": ["2009-08-02", "2009-08-02"],
          "datasets": [
            {
              "title": "HS 09:35 0.4m",
              "date": "2009-08-02 09:35Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'breznik_AISA_02082009'
              },
              "spatialResolution": 0.40,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 10.000,
              "numberOfBands": 65
            }]
        },
        {
          "dateRange": ["2011-05-25", "2011-05-25"],
          "datasets": [
            {
              "title": "HS 09:35 0.4m",
              "date": "2011-05-20 09:35Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'Sumava_breznik_25052011_aisa_mask'
              },
              "spatialResolution": 0.40,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 10.000,
              "numberOfBands": 65
            }]
        },
        {
          "dateRange": ["2012-10-09", "2012-10-09"],
          "datasets": [
            //{
            //  "title": "OP 09:25 0.2m",
            //  "date": "2010-10-09 09:25Z",
            //  "dataTypes": ['orto'],
            //  "ekosystemTypes": ['les'],
            //  "layer": {
            //    "type": 'gwc',
            //    "sublayers": 'breznik_ORTHO_09072010'
            //  },
            //  "spatialResolution": 0.20
            //},
            {
              "title": "OP 11:30 5 m",
              "date": "2012-10-27 11:30Z",
              "dataTypes": ['orto'],
			  "ekosystemTypes": ['les'],
              "layer": {
              "type": 'gwc',
              "sublayers": 'breznik_5m_ORTHO_05112013'
              },
              "spatialResolution": 5.00
            },
            {
              "title": "OP 12:00 2,5 m",
              "date": "2012-10-27 12:00Z",
              "dataTypes": ['orto'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'breznik_2_5m_1_ORTHO_05112013'
              },
              "spatialResolution": 2.50
            }]
        },
        {
          "dateRange": ["2010-10-08", "2010-10-08"],
          "datasets": [
            {
              "title": {"cs": "LiDAR", "en": "LiDAR"},
              "date": "2010-10-08 11:45Z",
              "dataTypes": ['lidar'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'breznik_LIDAR_08112013'
              },
              "pointsPerMeter": 1.0
            }]
        }]
    },

    {
      "title": "Březová",
      "baseLayer": "osm",
      "extent": [16.275, 49.591, 16.637, 49.829],
      "campaigns": [
        {
          "dateRange": ["2012-10-27", "2012-10-27"],
          "datasets": [
            {
              "title": {"cs": "Orthofoto", "en": "Orthophoto"},
              "date": "2012-10-27 09:45Z",
              "dataTypes": ['orto'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'brezova_ORTHO_27102012'
              },
              "spatialResolution": 0.20
            }]
        },
        {
          "dateRange": ["2014-06-09", "2014-06-09"],
          "datasets": [
            {
              "title": "HS 10:15 1 m",
              "date": "2014-06-09 10:15Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'brezova_CASI_09062014_n'
              },
              "spatialResolution": 1.00,
              "spectralRange": [370.0, 1040.0],
              "spectralResolution": 7.000,
              "numberOfBands": 96
            }]
        }]
    },

    {
      "title": "Brno - Kraví hora",
      "baseLayer": "osm",
      "extent": [16.569, 49.194, 16.599, 49.217],
      "campaigns": [
        {
          "dateRange": ["2014-07-09", "2014-07-09"],
          "datasets": [
            {
              "title": "OP 13:00 0.1 m",
              "date": "2014-07-09 13:00Z",
              "dataTypes": ['orto'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'brno_kravi_hora_ORTHO_09072014'
              },
              "spatialResolution": 0.10
            }]
        }]
    },

    {
      "title": "Brno",
      "baseLayer": "osm",
      "extent": [16.444, 49.093, 16.772, 49.293],
      "campaigns": [
        {
          "dateRange": ["2015-07-07", "2015-07-07"],
          "datasets": [

            {
              "title": "HS VNIR",
              "date": "2015-07-07 11:00Z",
              "dataTypes": ['hyper-vnir'],
              "ekosystemTypes": ['město'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'Brno_CASI_2_20150707'
              },
              "sensor": "CASI-1500",
              "spatialResolution": 0.80,
              "spectralRange": [365.0, 1050.0],
              "spectralResolution": 15.000,
              "numberOfBands": 48,
              "description": "Kompozice v pravých barvách z dat senzoru CASI, který snímá ve viditelné a blízké infračervené části spektra."
            },
            {
              "title": "HS SWIR",
              "date": "2015-07-07 11:00Z",
              "dataTypes": ['them','hyper-swir'],
              "ekosystemTypes": ['město'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'Brno_SASI_2_20150707'
              },
              "sensor": "SASI-600",
              "spatialResolution": 2.00,
              "spectralRange": [950.0, 2450.0],
              "spectralResolution": 15.000,
              "numberOfBands": 100,
              "description": "Kompozice v nepravých barvách z dat senzoru SASI-600, jenž snímá ve střední infračervené části spektra a je citlivý i na obsah vody."
            },
            {
              "title": "HS LWIR",
              "date": "2015-07-07 11:00Z",
              "dataTypes": ['them','termo-lwir'],
              "ekosystemTypes": ['město'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'Brno_TASI_2_20160707'
              },
              "sensor": "TASI-600",
              "spatialResolution": 2.00,
              "spectralRange": [8000.0, 11500.0],
              "spectralResolution": 110.00,
              "numberOfBands": 32,
              "description": "Mapa povrchových teplot změřených senzorem TASI v horkém letním dni. V červené části stupnice lze porovnávat rozpálenost silnic a střech domů. V modré části je naopak vidět ochlazující efekt vyšší vegetace a také stíny budov.",
              "legendUrl": {
                'cs': 'static/cfg/legend/Brno_TASI.png',
                'en': 'static/cfg/legend/Brno_TASI_en.png'
              }
            }]
        }]
    },

    {
      "title": "Brno přehrada",
      "baseLayer": "osm",
      "extent": [16.418, 49.218, 16.539, 49.296],
      "campaigns": [
        {
          "dateRange": ["2013-09-08", "2013-09-08"],
          "datasets": [
            {
              "title": "HS 08:45 3.5 m",
              "date": "2013-09-08 08:45Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['voda'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'brno_prehrada_AISA_08092013'
              },
              "spatialResolution": 3.50,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 2.500,
              "numberOfBands": 260
            }]
        },
        {
          "dateRange": ["2015-10-01", "2015-10-01"],
          "datasets": [
            {
              "title": "HS 10:15 1 m",
              "date": "2015-10-01 10:30Z",
              "dataTypes": ['hyper','termo'],
              "ekosystemTypes": ['voda'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'Prehrada_1_5_CASI_20151001'
              },
              "spatialResolution": 1.00,
              "spectralRange": [365.0, 1050.0],
              "spectralResolution": 7.000,
              "numberOfBands": 96
            }]
        }]
    },

    {
      "title": "Černá Hora",
      "baseLayer": "osm",
      "extent": [13.480, 48.944, 13.658, 49.021],
      "campaigns": [
        {
          "dateRange": ["2010-07-09", "2010-07-09"],
          "datasets": [
            {
              "title": "OP 09:45 0.2m",
              "date": "2010-07-09 09:45Z",
              "dataTypes": ['orto'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'cerna_hora_ORTHO_09072010'
              },
              "spatialResolution": 0.20
            }]
        },
        {
          "dateRange": ["2009-08-02", "2009-08-02"],
          "datasets": [
            {
              "title": "HS 08:45 3.5 m",
              "date": "2009-08-02 08:45Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'sumava_cerna_hora_20090802_aisa_mask'
              },
              "spatialResolution": 0.80,
              "spectralRange": [400.0, 980.0],
              "spectralResolution":5.000,
              "numberOfBands": 130
            }]
        },
        {
          "dateRange": ["2011-05-25", "2011-05-25"],
          "datasets": [
            {
              "title": "HS 08:45 3.5 m",
              "date": "2011-05-25 08:45Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'sumava_cerna_hora_20110525_aisa_mask'
              },
              "spatialResolution": 0.80,
              "spectralRange": [400.0, 980.0],
              "spectralResolution":5.000,
              "numberOfBands": 130
            }]
        },
        {
          "dateRange": ["2013-11-08", "2013-11-08"],
          "datasets": [
            {
              "title": {"cs": "LD 13:45 1 b/m²", "en": "LD 13:45 1 p/m²"},
              "date": "2013-11-08 11:45Z",
              "dataTypes": ['lidar'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'cerna_hora_LIDAR_08112013'
              },
              "pointsPerMeter": 1.0
            }]
        }]
    },

    {
      "title": "Červík",
      "baseLayer": "osm",
      "extent": [18.371, 49.440, 18.402, 49.465],
      "campaigns": [
        {
          "dateRange": ["2013-11-08", "2013-11-08"],
          "datasets": [
            {
              "title": {"cs": "LD 13:30 10 b/m²", "en": "LD 13:30 10 p/m²"},
              "date": "2013-11-08 13:30Z",
              "dataTypes": ['lidar'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'cervik_LIDAR_08112013'
              },
              "pointsPerMeter": 10.0
            }]
        }]
    },

    {
      "title": "Bulhary",
      "baseLayer": "osm",
      "extent": [16.701, 48.788, 16.800, 48.860],
      "campaigns": [
        {
          "dateRange": ["2015-10-02", "2015-10-02"],
          "datasets": [
            {
              "title": "HS 10:15 1 m",
              "date": "2015-10-02 09:45Z",
              "dataTypes": ['hyper','termo'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'bulhary_CASI_1_20151002'
              },
              "spatialResolution": 1.00,
              "spectralRange": [365.0, 1050.0],
              "spectralResolution": 10.000,
              "numberOfBands": 72
             }]
        }]
    },

    {
      "title": "Mušov",
      "baseLayer": "osm",
      "extent": [16.541, 48.831, 16.625, 48.933],
      "campaigns": [
        {
          "dateRange": ["2015-08-10", "2015-08-10"],
          "datasets": [
            {
              "title": "HS 10:15 0.5 m",
              "date": "2015-08-10 09:15Z",
              "dataTypes": ['hyper','termo'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'Musov_CASI_05_20150810'
              },
              "spatialResolution": 1.00,
              "spectralRange": [365.0, 1050.0],
              "spectralResolution": 15.000,
              "numberOfBands": 48
            },
            {
              "title": "HS 10:15 1 m",
              "date": "2015-08-10 09:00Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'Musov_CASI_1_20150810'
              },
              "spatialResolution": 1.00,
              "spectralRange": [365.0, 1050.0],
              "spectralResolution": 10.000,
              "numberOfBands": 72
            }]
        }]
    },

    {
      "title": "Šardice",
      "baseLayer": "osm",
      "extent": [16.969, 48.918, 17.065, 48.970],
      "campaigns": [
        {
          "dateRange": ["2015-09-21", "2015-09-21"],
          "datasets": [
            {
              "title": "HS 10:15 1 m",
              "date": "2015-09-21 08:45Z",
              "dataTypes": ['hyper','termo'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'sardice_1_CASI_20150921'
              },
              "spatialResolution": 1.00,
              "spectralRange": [365.0, 1050.0],
              "spectralResolution": 10.000,
              "numberOfBands": 72
            }]
        }]
    },

    {
      "title": "Klučov 2",
      "baseLayer": "osm",
      "extent": [14.863, 50.070, 14.913, 50.125],
      "campaigns": [
        {
          "dateRange": ["2015-05-07", "2015-05-07"],
          "datasets": [
            {
              "title": "HS 10:15 1 m",
              "date": "2015-05-07 10:45Z",
              "dataTypes": ['hyper','termo'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'vumop_chrast_CASI_07052015'
              },
              "spatialResolution": 1.00,
              "spectralRange": [365.0, 1050.0],
              "spectralResolution": 10.000,
              "numberOfBands": 72
            }]
        }]
    },
    {
      "title": "Dalešice",
      "baseLayer": "osm",
      "extent": [15.963, 49.089, 16.212, 49.219],
      "campaigns": [
        {
          "dateRange": ["2013-09-08", "2013-09-08"],
          "datasets": [
            {
              "title": "HS 09:45 3.5 m",
              "date": "2013-09-08 09:45Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['voda'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'dalesice_AISA_08092013'
              },
              "spatialResolution": 3.50,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 2.500,
              "numberOfBands": 260
            }]
        }]
    },
    {
      "title": "Domanínek",
      "baseLayer": "osm",
      "extent": [16.211, 49.540, 16.272, 49.508],
      "campaigns": [
        {
          "dateRange": ["2013-11-05", "2013-11-05"],
          "datasets": [
            {
              "title": {"cs": "LD 11:30 1 b/m²", "en": "LD 11:30 1 p/m²"},
              "date": "2013-11-05 11:30Z",
              "dataTypes": ['lidar'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'domaninek_LIDAR_05112013'
              },
              "pointsPerMeter": 1.0,
              "description": "Data pořídil ČÚZK"
            }]
        },
        {
          "dateRange": ["2013-08-02", "2013-08-02"],
          "datasets": [
            {
              "title": "HS 10:15 1 m",
              "date": "2013-08-02 08:45Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'domaninek_CASI_02082013'
              },
              "spatialResolution": 1.00,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 7.000,
              "numberOfBands": 96
            }]
        },
        {
          "dateRange": ["2014-11-05", "2014-11-05"],
          "datasets": [
            {
              "title": "OP 11:30 0.1 m",
              "date": "2014-11-05 11:30Z",
              "dataTypes": ['orto'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'domaninek_ORTHO_05112014'
              },
              "spatialResolution": 0.10
            }]
        }]
    },

    {
      "title": "Horní Libochová",
      "baseLayer": "osm",
      "extent": [16.140, 49.417, 16.210, 49.399],
      "campaigns": [
        {
          "dateRange": ["2013-09-08", "2013-09-08"],
          "datasets": [
            {
              "title": "HS 10:45 3.5m",
              "date": "2013-09-08 10:45Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'horni_libochova_AISA_08092013'
              },
              "spatialResolution": 3.50,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 2.500,
              "numberOfBands": 260
            }]
        }]
    },

    {
      "title": "Ivanovice",
      "baseLayer": "osm",
      "extent": [17.374, 49.312, 17.485, 49.405],
      "campaigns": [
        {
          "dateRange": ["2013-09-08", "2013-09-08"],
          "datasets": [
            {
              "title": "HS 10:15 3 m",
              "date": "2013-09-08 08:45Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'ivanovice_CASI_08092013'
              },
              "spatialResolution": 3.00,
              "spectralRange": [370.0, 1040.0],
              "spectralResolution": 2.360,
              "numberOfBands": 260
            }]
        }]
    },

    {
      "title": "Jenín",
      "baseLayer": "osm",
      "extent": [14.370, 48.609, 14.428, 48.671],
      "campaigns": [
        {
          "dateRange": ["2010-06-29", "2010-06-29"],
          "datasets": [
            {
              "title": "HS 08:30 2.5m",
              "date": "2010-06-29 08:30Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'jenin_AISA_29062010'
              },
              "spatialResolution": 2.50,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 2.360,
              "numberOfBands": 260
            }]
        },
        {
          "dateRange": ["2011-05-25", "2011-05-25"],
          "datasets": [
            {
              "title": "HS 09:30 2.5m",
              "date": "2011-05-25 09:30Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'jenin_AISA_25052011'
              },
              "spatialResolution": 2.50,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 2.360,
              "numberOfBands": 260
            }]
        },
        {
          "dateRange": ["2014-06-08", "2014-06-08"],
          "datasets": [
            {
              "title": "HS 09:00 1 m",
              "date": "2014-06-08 08:45Z",
              "dataTypes": ['hyper','termo'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'jenin_CASI_08062014'
              },
              "spatialResolution": 1.00,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 7.000,
              "numberOfBands": 96
            }]
        },
        {
          "dateRange": ["2014-05-16", "2014-05-16"],
          "datasets": [
            {
              "title": {"cs": "LD 12:45 6 b/m²", "en": "LD 12:45 6 p/m²"},
              "date": "2014-05-16 12:45Z",
              "dataTypes": ['lidar'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'jenin_LIDAR_16052014'
              },
              "pointsPerMeter": 6.0
            }]
        }]
    },

    {
      "title": "Jinačovice",
      "baseLayer": "osm",
      "extent": [16.500, 49.250, 16.552, 49.330],
      "campaigns": [
        {
          "dateRange": ["2014-07-16", "2014-07-16"],
          "datasets": [
            {
              "title": {"cs": "LD 15:30 6 b/m²", "en": "LD 15:30 6 p/m²"},
              "date": "2014-07-16 15:30Z",
              "dataTypes": ['lidar'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'jinacovice_LIDAR_16042014'
              },
              "pointsPerMeter": 6.0
            }]
        }]
    },

    {
      "title": "Kopaniny, Dehtáře",
      "baseLayer": "osm",
      "extent": [15.152, 49.429, 15.355, 49.524],
      "campaigns": [
        {
          "dateRange": ["2010-06-29", "2010-06-29"],
          "datasets": [
            {
              "title": "HS 07:20 2.5m",
              "date": "2010-06-29 07:20Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'kopaniny_dehtare_AISA_29062010'
              },
              "spatialResolution": 2.50,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 2.360,
              "numberOfBands": 260
            }]
        },
        {
          "dateRange": ["2011-05-25", "2011-05-25"],
          "datasets": [
            {
              "title": "HS 08:15 2.5m",
              "date": "2011-05-25 08:15Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'kopaniny_dehtare_AISA_25052011'
              },
              "spatialResolution": 2.50,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 2.360,
              "numberOfBands": 260
            }]
        }]
    },

    {
      "title": "Kotvrdovice",
      "baseLayer": "osm",
      "extent": [16.749, 49.340, 16.812, 49.376],
      "campaigns": [
        {
          "dateRange": ["2013-03-07", "2013-03-07"],
          "datasets": [
            {
              "title": {"cs": "LD 15:00 10 b/m²", "en": "LD 15:00 10 p/m²"},
              "date": "2013-03-07 15:00Z",
              "dataTypes": ['lidar'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'kotvrdovice_LIDAR_07112013'
              },
              "pointsPerMeter": 10.0
            }]
        }]
    },

    {
      "title": "Křešín u Pacova",
      "baseLayer": "osm",
      "extent": [15.060, 49.581, 15.092, 49.563],
      "campaigns": [
        {
          "dateRange": ["2014-04-16", "2014-04-16"],
          "datasets": [
            {
              "title": {"cs": "OP 13:30 0.1 m", "en": "OP 13:30 0.1 m"},
              "date": "2014-04-16 13:30Z",
              "dataTypes": ['orto'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'kresin_u_pacova_ORTHO_16042014'
              },
              "spatialResolution": 0.10
            }]
        }]
    },

    {
      "title": "Lanžhot",
      "baseLayer": "osm",
      "extent": [16.905, 48.604, 16.994, 48.722],
      "campaigns": [
        {
          "dateRange": ["2013-04-05", "2013-04-05"],
          "datasets": [
            {
              "title": {"cs": "LD 13:30 1 b/m²", "en": "LD 13:30 1 p/m²"},
              "date": "2013-04-05 13:30Z",
              "dataTypes": ['lidar'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'lanzhot_LIDAR_05112013'
              },
              "pointsPerMeter": 1.0,
              "description": "Data pořídil ČÚZK"
            }]
        },
        {
          "dateRange": ["2015-10-08", "2015-10-08"],
          "datasets": [
            {
              "title": "HS 08:15 0.5m",
              "date": "2015-10-08 11:15Z",
              "dataTypes": ['hyper','termo'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'lanzhot_CASI_05_2150810'
              },
              "spatialResolution": 0.50,
              "spectralRange": [365.0, 1050.0],
              "spectralResolution": 15.000,
              "numberOfBands": 48
            },
            {
              "title": "HS 08:15 1m",
              "date": "2015-10-08 11:15Z",
              "dataTypes": ['hyper','termo'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'lanzhot_1_CASI_20150810'
              },
              "spatialResolution": 1.00,
              "spectralRange": [365.0, 1050.0],
              "spectralResolution": 10.000,
              "numberOfBands": 72
            }]
        },
        {
          "dateRange": ["2014-11-05", "2014-11-05"],
          "datasets": [
            {
              "title": "OP 11:30 0.1 m",
              "date": "2014-10-27 11:30Z",
              "dataTypes": ['orto'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'lanzhot_ORTHO_05112014'
              },
              "spatialResolution": 0.10
            }]
        }]
    },

    {
      "title": "letiště - Brno",
      "baseLayer": "osm",
      "extent": [16.669, 49.134, 16.726, 49.162],
      "campaigns": [
        {
          "dateRange": ["2014-05-06", "2014-05-06"],
          "datasets": [
            {
              "title": "HS 08:45 1 m",
              "date": "2014-05-06 08:45Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'otnice_letiste_CASI_06052014'
              },
              "spatialResolution": 1.00,
              "spectralRange": [370.0, 1040.0],
              "spectralResolution": 7.000,
              "numberOfBands": 96
            }]
        }]
    },

    {
      "title": "Lipno",
      "baseLayer": "osm",
      "extent": [14.205, 48.628, 14.236, 48.664],
      "campaigns": [
        {
          "dateRange": ["2014-06-08", "2014-06-08"],
          "datasets": [
            {
              "title": "HS 08:45 3 m",
              "date": "2014-06-08 08:45Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'lipno_kalibrace_CASI_08062014'
              },
              "spatialResolution": 1.00,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 7.000,
              "numberOfBands": 130
            }]
        }]
    },

    {
      "title": {cs: "Mlýnský potok", en: "Mlýnský creek"},
      "baseLayer": "osm",
      "extent": [14.072, 48.587, 14.153, 48.628],
      "campaigns": [
        {
          "dateRange": ["2011-05-25", "2011-05-25"],
          "datasets": [
            {
              "title": "HS 09:50 2.5m",
              "date": "2011-05-25 09:50Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'mlynsky_potok_AISA_25052011'
              },
              "spatialResolution": 2.50,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 2.360,
              "numberOfBands": 260
            }]
        },
        {
          "dateRange": ["2013-07-09", "2013-07-09"],
          "datasets": [
            {
              "title": "OP 12:25 0.1m",
              "date": "2013-07-09 12:25Z",
              "dataTypes": ['orto'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'mlynsky_potok_ORTHO_09072013'
              },
              "spatialResolution": 0.10
            }]
        },
        {
          "dateRange": ["2014-06-08", "2014-06-08"],
          "datasets": [
            {
              "title": "HS 11:15 1.0m",
              "date": "2014-06-08 09:15Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'mlynsky_potok_CASI_08062014'
              },
              "spatialResolution": 1.00,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 7.000,
              "numberOfBands": 130
            }]
        },
        {
          "dateRange": ["2014-08-16", "2014-08-16"],
          "datasets": [
            {
              "title": {"cs": "LD 11:45 6 b/m²", "en": "LD 11:45 6 p/m²"},
              "date": "2014-08-16 11:45Z",
              "dataTypes": ['lidar'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'mlynsky_potok_LIDAR_16042014'
              },
              "pointsPerMeter": 6.0
            }]
        }]
    },

    {
      "title": "Otnice",
      "baseLayer": "osm",
      "extent": [16.787, 49.075, 16.891, 49.111],
      "campaigns": [
        {
          "dateRange": ["2014-05-06", "2014-05-06"],
          "datasets": [
            {
              "title": "HS 08:45 1 m",
              "date": "2014-05-06 08:45Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'otnice_CASI_06052014'
              },
              "spatialResolution": 1.00,
              "spectralRange": [365.0, 1050.0],
              "spectralResolution": 7.000,
              "numberOfBands": 96
            }]
        }]
    },

    {
      "title": "Otnice 2",
      "baseLayer": "osm",
      "extent": [16.771, 48.976, 16.870, 49.108],
      "campaigns": [
        {
          "dateRange": ["2015-09-21", "2015-09-21"],
          "datasets": [
            {
              "title": "HS 08:45 1 m",
              "date": "2015-09-21 08:30Z",
              "dataTypes": ['hyper','termo'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'otnice_1_CASI_20150921'
              },
              "spatialResolution": 1.00,
              "spectralRange": [365.0, 1050.0],
              "spectralResolution": 10.000,
              "numberOfBands": 72
            }]
        }]
    },

    {
      "title": "Polkovice",
      "baseLayer": "osm",
      "extent": [17.235, 49.378, 17.260, 49.422],
      "campaigns": [
        {
          "dateRange": ["2014-06-09", "2014-06-09"],
          "datasets": [
            {
              "title": "HS VNIR",
              "date": "2014-06-09 08:15Z",
              "dataTypes": ['hyper-vnir'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'polkovice_CASI_09062014'
              },
              "spatialResolution": 1.0,
              "spectralRange": [365.0, 1050.0],
              "spectralResolution": 7.000,
              "numberOfBands": 96
            },
            {
              "title":{"cs": 'Termální data', "en": 'Thermal data'},
              "date": "2014-06-09 08:15Z",
              "dataTypes": ['termo'],
              "ekosystemTypes": ['agro'],
              "spatialResolution": 2.7,
              "numberOfBands": 1,
            }]
        },
        {
          "dateRange": ["2015-06-05", "2015-06-05"],
          "datasets": [
            {
              "title": "HS VNIR",
              "date": "2015-06-05 08:15Z",
              "dataTypes": ['hyper-vnir'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'polkovice_CASI_05062015'
              },
              "sensor": "CASI-1500",
              "spatialResolution": 1.0,
              "spectralRange": [365.0, 1050.0],
              "spectralResolution": 7.000,
              "numberOfBands": 96
            },
            {
              "title": "HS SWIR",
              "date": "2015-06-05 08:15Z",
              "dataTypes": ['hyper-swir'],
              "ekosystemTypes": ['agro'],
              "sensor": "SASI-600",
              "spatialResolution": 2.5,
              "spectralRange": [950.0, 2450.0],
              "spectralResolution": 15.000,
              "numberOfBands": 100,
            },
            {
             "title": "HS LWIR",
              "date": "2015-06-05 08:15Z",
              "dataTypes": ['termo-lwir'],
              "ekosystemTypes": ['agro'],
              "sensor": "TASI-600",
              "spatialResolution": 2.5,
              "spectralRange": [8000.0, 11500.0],
              "spectralResolution": 110.000,
              "numberOfBands": 32,
              }]
        }]
    },

    {
      "title": "Rájec-Jestřebí",
      "baseLayer": "osm",
      "extent": [16.673, 49.430, 16.712, 49.455],
      "campaigns": [
        {
          "dateRange": ["2013-03-07", "2013-03-07"],
          "datasets": [
            {
              "title": {"cs": "LD 15:45 10 b/m²", "en": "LD 15:45 10 p/m²"},
              "date": "2013-03-07 15:45Z",
              "dataTypes": ['lidar'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'rajec_LIDAR_07112013'
              },
              "pointsPerMeter": 10.0
            }]
        },
        {
          "dateRange": ["2015-10-01", "2015-10-01"],
          "datasets": [
            {
              "title": "HS 08:15 1 m",
              "date": "2015-10-01 09:15Z",
              "dataTypes": ['hyper','termo'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'rajec_1_CASI_01102015'
              },
              "spatialResolution": 1.00,
              "spectralRange": [365.0, 1050.0],
              "spectralResolution": 10.000,
              "numberOfBands": 72
            },
            {
              "title": "HS 08:15 0,5 m",
              "date": "2015-10-01 10:15Z",
              "dataTypes": ['hyper','termo'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'rajec_05_CASI_01102015'
              },
              "spatialResolution": 0.50,
              "spectralRange": [365.0, 1050.0],
              "spectralResolution": 15.000,
              "numberOfBands": 48
            }]
        },
        {
          "dateRange": ["2014-11-05", "2014-11-05"],
          "datasets": [
            {
              "title": "OP 11:30 0.1 m",
              "date": "2014-11-05 11:30Z",
              "dataTypes": ['orto'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'rajec_ORTHO_05112014'
              },
              "spatialResolution": 0.10
            }]
        }]
    },

    {
      "title": "Rozkoš",
      "baseLayer": "osm",
      "extent": [16.026, 50.351, 16.120, 50.408],
      "campaigns": [
        {
          "dateRange": ["2014-09-17", "2014-09-18"],
          "datasets": [
            {
              "title": "HS 08:15 5 m",
              "date": "2014-09-18 08:15Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['voda'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'Rozkos_AISA_20140918'
              },
              "spatialResolution": 5.00,
              "spectralRange": [380.0, 1000.0],
              "spectralResolution": 10.000,
              "numberOfBands": 260
            }]
        }]
    },

    {
      "title": "Seč",
      "baseLayer": "osm",
      "extent": [15.623, 49.800, 15.692, 49.858],
      "campaigns": [
        {
          "dateRange": ["2014-09-17", "2014-09-18"],
          "datasets": [
            {
              "title": "HS 08:45 5 m",
              "date": "2014-09-18 08:45Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['voda'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'Sec_AISA_20140918'
              },
              "spatialResolution": 5.00,
              "spectralRange": [380.0, 1000.0],
              "spectralResolution": 10.000,
              "numberOfBands": 260
            }]
        }]
    },

    {
      "title": "Smrčina",
      "baseLayer": "osm",
      "extent": [13.901, 48.722, 13.941, 48.755],
      "campaigns": [
        {
          "dateRange": ["2010-07-09", "2010-07-09"],
          "datasets": [
            {
              "title": "OP 11:25 0.2m",
              "date": "2010-07-09 11:25Z",
              "dataTypes": ['orto'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'smrcina_ORTHO_09072010'
              },
              "spatialResolution": 0.20
            },
            {
              "title": "OP 13:00 1 m",
              "date": "2013-11-05 13:00Z",
              "dataTypes": ['orto'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'smrcina_1m_ORTHO_05112013'
              },
              "spatialResolution": 1.00
            }]
        },
        {
          "dateRange": ["2009-08-02", "2009-08-02"],
          "datasets": [
            {
              "title": "HS 10:35 0.8m",
              "date": "2009-08-02 10:35Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'smrcina_2009'
              },
              "spatialResolution": 0.80,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 5.000,
              "numberOfBands": 65
            }]
        },
        {
          "dateRange": ["2011-05-25", "2011-05-25"],
          "datasets": [
            {
              "title": "HS 10:05 0.8m",
              "date": "2011-05-25 10:05Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'smrcina_AISA_25052011'
              },
              "spatialResolution": 0.80,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 5.000,
              "numberOfBands": 130
            }]
        }]
    },

    {
      "title": "Štítná nad Vláří",
      "baseLayer": "osm",
      "extent": [17.960, 49.024, 17.978, 49.053],
      "campaigns": [
        {
          "dateRange": ["2010-10-01", "2010-10-01"],
          "datasets": [
            {
              "title": {"cs": "LD 12:45 5 b/m²", "en": "LD 12:45 5 p/m²"},
              "date": "2010-10-01 12:45Z",
              "dataTypes": ['lidar'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'stitna_LIDAR_01102010'
              },
              "pointsPerMeter": 5.0
            }]
        },
        {
          "dateRange": ["2011-08-26", "2011-08-26"],
          "datasets": [
            {
              "title": "HS 08:45 0.5m",
              "date": "2011-08-26 08:45Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'stitna_AISA_26082011'
              },
              "spatialResolution": 0.50,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 10.000,
              "numberOfBands": 64
            }]
        },
        {
          "dateRange": ["2013-04-16", "2013-04-16"],
          "datasets": [
            {
              "title": {"cs": "LD 12:00 50 b/m²", "en": "LD 12:00 50 b/m² "},
              "date": "2013-04-16 12:00Z",
              "dataTypes": ['lidar'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'stitna_LIDAR_16042013'
              },
              "pointsPerMeter": 50.0
            }]
        },
        {
          "dateRange": ["2013-07-21", "2013-07-21"],
          "datasets": [
            {
              "title": "HS 08:45 2.5m",
              "date": "2013-07-21 08:45Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'stitna_AISA_21072013'
              },
              "spatialResolution": 2.50,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 2.000,
              "numberOfBands": 260
            }]
        },
        {
          "dateRange": ["2014-07-21", "2014-07-21"],
          "datasets": [
            {
              "title": "HS 08:45 0.5m",
              "date": "2014-07-21 08:45Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'stitna_AISA_21072014'
              },
              "spatialResolution": 0.50,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 10.000,
              "numberOfBands": 65
            }]
        },
        {
          "dateRange": ["2015-08-10", "2015-08-10"],
          "datasets": [
            {
              "title": "HS 08:45 1.0m",
              "date": "2015-08-10 08:45Z",
              "dataTypes": ['hyper','termo'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'stitna_1_CASI_20150812'
              },
              "spatialResolution": 1.00,
              "spectralRange": [370.0, 1040.0],
              "spectralResolution": 10.000,
              "numberOfBands": 72
            }]
        },
        {
          "dateRange": ["2014-11-05", "2014-11-05"],
          "datasets": [
            {
              "title": "OP 11:30 0.1 m",
              "date": "2014-11-05 11:30Z",
              "dataTypes": ['orto'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'stitna_ORTHO_05112014'
              },
              "spatialResolution": 0.10
            }]
        }]
    },

    {
      "title": "Těšínské Beskydy",
      "baseLayer": "osm",
      "extent": [18.729, 49.552, 18.858, 49.690],
      "campaigns": [
        {
          "dateRange": ["2011-09-27", "2011-09-27"],
          "datasets": [
            {
              "title": "HS 08:45 5.0m",
              "date": "2011-09-27 08:45Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'tesinske_beskydy_AISA_27092011'
              },
              "spatialResolution": 5.00,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 10.000,
              "numberOfBands": 64
            }]
        },
        {
          "dateRange": ["2013-09-05", "2013-09-05"],
          "datasets": [
            {
              "title": {"cs": "LD 11:45 1 b/m²", "en": "LD 11:45 1 p/m²"},
              "date": "2013-09-05 11:45Z",
              "dataTypes": ['lidar'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'tesinske_beskydy_LIDAR_05112013'
              },
              "pointsPerMeter": 1.0,
              "description": "Data pořídil ČÚZK"
            }]
        },
        {
          "dateRange": ["2015-06-05", "2015-06-05"],
          "datasets": [
            {
              "title": "HS 08:45 1.0m",
              "date": "2015-06-05 08:45Z",
              "dataTypes": ['hyper','termo'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'beskydy_05_CASI_20150506'
              },
              "spatialResolution": 1.00,
              "spectralRange": [370.0, 1040.0],
              "spectralResolution": 7.000,
              "numberOfBands": 96
            }]
        }]
    },

    {
      "title": "Třeboňsko",
      "baseLayer": "osm",
      "extent": [14.750, 48.980, 14.815, 49.050],
      "campaigns": [
        {
          "dateRange": ["2008-07-29", "2008-07-29"],
          "datasets": [
            {
              "title": "HS 08:50 1.0m",
              "date": "2008-07-29 08:50Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['voda'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'trebon_1_AISA_29072008'
              },
              "spatialResolution": 1.00,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 4.730,
              "numberOfBands": 130
            }]
        },
        {
          "dateRange": ["2010-07-11", "2010-07-11"],
          "datasets": [
            {
              "title": "HS VNIR 1m",
              "date": "2010-07-11 08:50Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'trebon_AISA_11072010'
              },
              "spatialResolution": 1.00,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 4.730,
              "numberOfBands": 260
            },
            {
              "title": "HS VNIR 5.5m",
              "date": "2010-07-11 10:43Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['voda'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'trebon_1_AISA_11072010'
              },
              "spatialResolution": 5.50,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 2.500,
              "numberOfBands": 260
            }
          ]
        },
        {
          "dateRange": ["2010-11-05", "2010-11-05"],
          "datasets": [
            {
              "title": {"cs": "LD 11:45 1 b/m²", "en": "LD 11:45 1 p/m²"},
              "date": "2010-11-05 11:45Z",
              "dataTypes": ['lidar'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'trebon_LIDAR_05112010'
              },
              "pointsPerMeter": 1.0,
              "description": "Data pořídil ČÚZK"
            }]
        },
        {
          "dateRange": ["2014-07-09", "2014-07-09"],
          "datasets": [
            {
              "title": "OP 12:25 0.1m",
              "date": "2014-07-09 12:25Z",
              "dataTypes": ['orto'],
              "ekosystemTypes": ['voda'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'trebon_ORTHO_09072014'
              },
              "spatialResolution": 0.10
            }]
        }]
    },

    {
      "title": "Klučov",
      "baseLayer": "osm",
      "extent": [14.880, 50.063, 14.940, 50.105],
      "campaigns": [
        {
          "dateRange": ["2015-05-07", "2015-05-07"],
          "datasets": [
            {
              "title": "HS 08:45 1.0m",
              "date": "2015-05-07 08:45Z",
              "dataTypes": ['hyper','termo'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'vumop_klucov_CASI_07052015'
              },
              "spatialResolution": 1.00,
              "spectralRange": [365.0, 1050.0],
              "spectralResolution": 15.000,
              "numberOfBands": 48
            }]
        }]
    },

    {
      "title": "Veselá",
      "baseLayer": "osm",
      "extent": [15.210, 49.312, 15.235, 49.331],
      "campaigns": [
        {
          "dateRange": ["2012-10-27", "2012-10-27"],
          "datasets": [
            {
              "title": "OP 10:45 0.1 m",
              "date": "2012-10-27 10:45Z",
              "dataTypes": ['orto'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'vesela_ORTHO_27102012'
              },
              "spatialResolution": 0.10
            }]
        },
        {
          "dateRange": ["2013-10-03", "2013-10-03"],
          "datasets": [
            {
              "title": "OP 11:30 0.1 m",
              "date": "2013-10-03 11:30Z",
              "dataTypes": ['orto'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'vesela_ORTHO_03102013'
              },
              "spatialResolution": 0.10
            }]
        },
        {
          "dateRange": ["2013-10-04", "2013-10-04"],
          "datasets": [
            {
              "title": "OP 11:30 0.1 m",
              "date": "2013-10-04 11:30Z",
              "dataTypes": ['orto'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'vesela_ORTHO_04102013'
              },
              "spatialResolution": 0.10
            }]
        },
        {
          "dateRange": ["2014-06-08", "2014-06-08"],
          "datasets": [
            {
              "title": "HS 08:45 1.0m",
              "date": "2014-06-08 08:45Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'vesela_CASI_08062014'
              },
              "spatialResolution": 1.00,
              "spectralRange": [370.0, 1040.0],
              "spectralResolution": 7.000,
              "numberOfBands": 96
            }]
        }]
    },

    {
      "title": "Přestavlky u Čerčan",
      "baseLayer": "osm",
      "extent": [14.720, 49.848, 14.777, 49.897],
      "campaigns": [
        {
          "dateRange": ["2015-05-07", "2015-05-07"],
          "datasets": [
            {
              "title": "HS 10:25 1 m",
              "date": "2015-05-07 10:25Z",
              "dataTypes": ['hyper','termo'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'Prestavlky_CASI_20150507'
              },
              "spatialResolution": 1.00,
              "spectralRange": [365.0, 1050.0],
              "spectralResolution": 10.000,
              "numberOfBands": 72
            }]
        }]
    },

    {
      "title": "Vepříkov",
      "baseLayer": "osm",
      "extent": [15.505, 49.68, 15.667, 49.750],
      "campaigns": [
        {
          "dateRange": ["2015-06-13", "2015-06-13"],
          "datasets": [
            {
              "title": "HS 10:25 1 m",
              "date": "2015-06-13 10:25Z",
              "dataTypes": ['hyper','termo'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'veprikov_1_CASI_20150613'
              },
              "spatialResolution": 1.00,
              "spectralRange": [365.0, 1050.0],
              "spectralResolution": 10.000,
              "numberOfBands": 72
            }]
        }]
    },

    {
      "title": "Výsypka - důl Jiří, Sokolovská uhelná a.s.",
      "baseLayer": "osm",
      "extent": [12.621, 50.226, 12.755, 50.263],
      "campaigns": [
        {
          "dateRange": ["2008-08-06", "2008-08-06"],
          "datasets": [
            {
              "title": "HS 10:30 0.4m",
              "date": "2008-08-06 11:00Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'sokolovsko_1_AISA_06082008'
              },
              "spatialResolution": 0.40,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 9.460,
              "numberOfBands": 65
            },
            {
              "title": "HS 10:45 0.4m",
              "date": "2008-08-06 11:10Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'sokolovsko_2_AISA_06082008'
              },
              "spatialResolution": 0.40,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 9.460,
              "numberOfBands": 65
            }]
        },
        {
          "dateRange": ["2009-07-27", "2009-07-27"],
          "datasets": [
            {
              "title": "HS 11:00 0.4m",
              "date": "2009-07-27 11:00Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'sokolovsko_1_AISA_27072009'
              },
              "spatialResolution": 0.40,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 9.460,
              "numberOfBands": 65
            },
            {
              "title": "HS 11:20 0.4m",
              "date": "2009-07-27 11:20Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'sokolovsko_2_AISA_27072009'
              },
              "spatialResolution": 0.40,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 9.460,
              "numberOfBands": 65
            }]
        },
        {
          "dateRange": ["2010-10-01", "2010-10-01"],
          "datasets": [
            {
              "title": {"cs": "LD 11:00 1 b/m²", "en": "LD 11:00 1 p/m²"},
              "date": "2010-10-01 11:00Z",
              "dataTypes": ['lidar'],
              "ekosystemTypes": ['les'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'sokolovsko_LIDAR_01102010'
              },
              "pointsPerMeter": 1.0
            }]
        }]
    },

    {
      "title": "Žabčice",
      "baseLayer": "osm",
      "extent": [16.595, 49.015, 16.621, 49.039],
      "campaigns": [
        {
          "dateRange": ["2014-06-17", "2014-06-17"],
          "datasets": [
            {
              "title": "HS 09:45 0.4 m",
              "date": "2014-06-17 09:45Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'zidlochovice_AISA_17062014'
              },
              "spatialResolution": 0.40,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 2.360,
              "numberOfBands": 260
            }]
        }]
    },
    {
      "title": {cs: "Zhůří", en: "Zhuri"},
      "baseLayer": "osm",
      "extent": [13.533, 49.087, 13.562, 49.091],
      "campaigns": [
        {
          "dateRange": ["2009-08-02", "2009-08-02"],
          "datasets": [

            {
              "title": "HS 10:35 1.0 m",
              "date": "2009-08-02 09:45Z",
              "dataTypes": ['hyper'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'sumava_zhuri_20090802_aisa_mask'
              },
              "spatialResolution": 1.000,
              "spectralRange": [400.0, 980.0],
              "spectralResolution": 5.000,
              "numberOfBands": 130
            }]
        }]
    },

    {
      "title": {cs: "Čechtice", en: "Cechtice"},
      "baseLayer": "osm",
      "extent": [14.974, 49.570, 15.150, 49.676],
      "campaigns": [
        {
          "dateRange": ["2015-06-13", "2015-06-13"],
          "datasets": [
            {
              "title": "Čechtice",
              "date": "2015-06-13 12:59Z",
              "dataTypes": ['hyper','termo'],
              "ekosystemTypes": ['agro'],
              "layer": {
                "type": 'gwc',
                "sublayers": 'CASI_Cechtice_20150613'
              },
              "spatialResolution": 1.00,
              "spectralRange": [365.0, 1050.0],
              "spectralResolution": 10.000,
              "numberOfBands": 72
            }]
        }]
    }]
};

module.exports = cgcfg;
