var cg = {};
cg.config = {
  gwcUrl: 'http://mapserver.czechglobe.cz/gwc/',
  
  namespacePrefix: 'cge',
  
  baseLayers: ['osm', 'omq', 'gmap', 'gsat', 'ghyb', 'gter'],
  
  dataTypes: [
    { id: 'hyper', title: {cs: 'Hyperspektrální data', en: 'Hyperspectral data'} },
    { id: 'lidar', title: {cs: 'LiDARová data', en: 'LiDAR data'} },
    { id: 'orto', title: {cs: 'Ortofoto', en: 'Orthophoto'} },
    { id: 'termo', title: {cs: 'Termální data', en: 'Thermal data'} }
  ],
  
  ekosystemTypes: [
    { id: 'les', title: {cs: 'les', en: 'Forest'} },
    { id: 'agro', title: {cs: 'zemědělská půda', en: 'Agro-ecosystem'} },
    { id: 'voda', title: {cs: 'voda', en: 'Water'} }
  ],
  
  datasetProperties: {
    title: { title: {cs: 'Název', en: 'Title'} },
    date: { title: {cs: 'Datum', en: 'Date'} },
    dataTypes: { title: {cs: 'Typ dat', en: 'Data type'} },
    ekosystemTypes: { title: {cs: 'Typ ekosystému', en: 'Ecosystem type'} },
    spatialResolution: { title: {cs: 'Prostorové rozlišení', en: 'Spatial resolution'} },
    pointsPerMeter: { title: {cs: 'Bodů na m²', en: 'Points per m²'} },
    spectralRange: { title: {cs: 'Spektrální rozsah', en: 'Spectral range'} },
    spectralResolution: { title: {cs: 'Spektrální rozlišení', en: 'Spectral resolution'} },
    bands: { title: {cs: 'Počet pásem', en: 'Number of bands'} },
    description: { title: {cs: 'Popis', en: 'Description'} }
  },
  
  overview: {
    title: {cs: "Přehled míst", en: "Places overview"},
    baseLayer: "osm",
    extent: [12.09, 48.55, 18.85, 51.05],
    placesLayer: {
      type: "vector",
      title: {cs: "Místa", en: "Places"},
      styleMap: {
        "default": {
          'pointRadius': '${getPointRadius}',
          'fillColor': "#114796",
          'fillOpacity': "1",
          'strokeColor': "#ff0000", 
          'strokeWidth': 5, 
          'cursor': "pointer"
        },
        "select": {
          'fillColor': "#005cbf"
        }
      }
    }
  },

  places: [
    {
      title: "Kopaniny, Dehtáře",
      baseLayer: "gmap",
      extent: [15.152, 49.429, 15.355, 49.524],
      campaigns: [
        {
          dateRange: ['2011-05-25', '2011-05-25'],
          datasets: [
            {
              title: 'HS 08:15 2.5m',
              date: '2011-05-25 08:15Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['agro'],
              spatialResolution: 2.5,
              spectralRange: [400, 980],
              spectralResolution: [2.16, 2.36],
              numberOfBands: 260,
              layer: {
                type: 'gwc',
                sublayers:'kopaniny_dehtare_AISA_25052011'
              }
            }
          ]
        },
        {
          dateRange: ['2010-06-29', '2010-06-29'],
          datasets: [
            {
              title: 'HS 07:20 2.5m',
              date: '2010-06-29 07:20Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['agro'],
              spatialResolution: 2.5,
              spectralRange: [400, 980],
              spectralResolution: [2.16, 2.36],
              numberOfBands: 260,
              layer: {
                type: 'gwc',
                sublayers:'kopaniny_dehtare_AISA_29062010'
              }  
            }
          ]  
        }
      ]
	},
    {
      title: "Jenín",
      baseLayer: "gmap",
      extent: [14.370, 48.609, 14.428, 48.671],
      campaigns: [
        {
          dateRange: ['2011-05-25', '2011-05-25'],
          datasets: [
            {
              title: 'HS 09:30 2.5m',
              date: '2011-05-25 09:30Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['agro'],
              spatialResolution: 2.5,
              spectralRange: [400, 980],
              spectralResolution: [2.16, 2.36],
              numberOfBands: 260,
              layer: {
                type: 'gwc',
                sublayers:'jenin_AISA_25052011'
              }
            }
          ] 
        },
        {
        	dateRange: ['2014-06-08', '2014-06-08'],
          datasets: [ 
            {
              title: 'HS 09:00 3 m',
              date: '2014-06-08 08:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['les'],
              spatialResolution: 1,
              spectralRange: [400, 980],
              spectralResolution: 6.85,
              numberOfBands: 96,
              layer: {
                type: 'gwc',
                sublayers:'jenin_CASI_08062014'
              }
            }
          ]
        },     
        {
          dateRange: ['2010-06-29', '2010-06-29'],
          datasets: [
            {
              title: 'HS 08:30 2.5m',
              date: '2010-06-29 08:30Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['agro'],
              spatialResolution: 2.5,
              spectralRange: [400, 980],
              spectralResolution: [2.16, 2.36],
              numberOfBands: 260,
              layer: {
                type: 'gwc',
                sublayers:'jenin_AISA_29062010'
              }
            }
          ]
        },
	    {
          dateRange: ['2014-08-16', '2014-08-16'],
          datasets: [ 
            {
              title: {cs: 'LD 12:45 6 b/m²', en: 'LD 12:45 6 p/m²'},
              date: '2014-08-16 12:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['lidar'],
              ekosystemTypes: ['agro'],
              pointsPerMeter: 6,
              layer: {
                type: 'gwc',
                sublayers:'jenin_LIDAR_16052014'
            	  }
            	 }
              ]
        	}
          ]
    	},
  		{
      		title: {cs: "Mlýnský potok", en: "Mlýnský creek"},
      		baseLayer: "gmap",
     		 extent: [14.072, 48.587, 14.153, 48.628],
      		campaigns: [
        	{
          		dateRange: ['2011-05-25', '2011-05-25'],
          		datasets: [
            	{
              	title: 'HS 09:50 2.5m',
              	date: '2011-05-25 09:50Z', //'Z' na konci značí čas v UTC
              	dataTypes: ['hyper'],
              	ekosystemTypes: ['agro'],
              	spatialResolution: 2.5,
             	spectralRange: [400, 980],
              	spectralResolution: [2.16, 2.36],
              	numberOfBands: 260,
              	layer: {
                type: 'gwc',
                sublayers:'mlynsky_potok_AISA_25052011'
              }
            }
          ]
        },
	    {
          dateRange: ['2014-08-16', '2014-08-16'],
          datasets: [ 
            {
              title: {cs: 'LD 11:45 6 b/m²', en: 'LD 11:45 6 p/m²'},
              date: '2014-08-16 11:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['lidar'],
              ekosystemTypes: ['agro'],
              pointsPerMeter: 6,
              layer: {
                type: 'gwc',
                sublayers:'mlynsky_potok_LIDAR_16042014'
              }
            }
          ]
        },
	    {
          dateRange: ['2013-07-09', '2013-07-09'],// potreba zjistit spravne datum porizeni
          datasets: [
            {
              title: 'OP 12:25 0.1m',
              date: '2010-07-09 12:25Z', //'Z' na konci značí čas v UTC
              dataTypes: ['orto'],
              ekosystemTypes: ['agro'],
              spatialResolution: 0.1,
              layer: {
                type: 'gwc',
                sublayers:'mlynsky_potok_ORTHO_09072013'
              }
            }
          ]
        },
        {
          dateRange: ['2014-06-08', '2014-06-08'],
          datasets: [ 
            {
              title: 'HS 11:15 1.0m',
              date: '2014-06-08 09:15Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['agro'],
              spatialResolution: 1.0,
              spectralRange: [400, 1000],
              spectralResolution: [7.09, 7.14],
              numberOfBands: 96,
              layer: {
                type: 'gwc',
                sublayers:'mlynsky_potok_CASI_08062014_'
              }
            }
          ]
        }
      ]
    },
    {
      title: "Třeboňsko",
      baseLayer: "gmap",
      extent: [14.750, 48.980, 14.815, 49.05],
      campaigns: [
        {
          dateRange: ['2008-07-29', '2008-07-29'],
          datasets: [
            {
              title: 'HS 08:50 1.0m',
              date: '2008-07-29 08:50Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['voda'],
              spatialResolution: 1.0,
              spectralRange: [400, 980],
              spectralResolution: [4.32, 4.73],
              numberOfBands: 130,
              layer: {
                type: 'gwc',
                sublayers:'trebon_1_AISA_29072008'
              }
            }
          ]
        },
        {
          dateRange: ['2010-07-11', '2010-07-11'],
          datasets: [
            {
              title: 'HS 10:43 1.0m',
              date: '2010-07-11 10:43Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['voda'],
              spatialResolution: 1.0,
              spectralRange: [400, 980],
              spectralResolution: 2.5,
              numberOfBands: 260,
              layer: {
                type: 'gwc',
                sublayers:'trebon_1_AISA_11072010'
              }
            }
          ]
        },
	    {
          dateRange: ['2010-10-05', '2010-10-05'],
          datasets: [ 
            {
              title: {cs: 'LD 11:45 1 b/m²', en: 'LD 11:45 1 p/m²'},
              date: '2010-10-05 11:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['lidar'],
              ekosystemTypes: ['agro'],
              pointsPerMeter: 1,
              layer: {
                type: 'gwc',
                sublayers:'trebon_LIDAR_05112010'
              },
	      description:'Data pořídil ČÚZK'
            }
          ]
        },
      	{
          dateRange: ['2014-07-09', '2014-07-09'],// potreba zjistit spravne datum porizeni
          datasets: [
            {
              title: 'OP 12:25 0.1m',
              date: '2010-07-09 12:25Z', //'Z' na konci značí čas v UTC
              dataTypes: ['orto'],
              ekosystemTypes: ['voda'],
              spatialResolution: 0.1,
              layer: {
                type: 'gwc',
                sublayers:'trebon_ORTHO_09072014'
              }
            }
          ]
        }
      ]
    },
    {
      title: "Březník",
      baseLayer: "gmap",
      extent: [13.403, 48.938, 13.528, 49.005],
      campaigns: [
        {
          dateRange: ['2009-08-02', '2009-08-02'],
          datasets: [
            {
              title: 'HS 09:35 0.4m',
              date: '2009-08-02 09:35Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['les'],
              spatialResolution: 0.4,
              spectralRange: [400, 980],
              spectralResolution: 10,
              numberOfBands: 65,
              layer: {
                type: 'gwc',
                sublayers:'breznik_AISA_02082009'
              }
            }
          ]
        },
		{
          dateRange: ['2010-10-08', '2010-10-08'], 
          datasets: [ 
            {
              title: {cs: 'LD 11:45 1 b/m²', en: 'LD 11:45 1 p/m²'},
              date: '2010-10-08 11:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['lidar'],
              ekosystemTypes: ['les'],
              pointsPerMeter: 1,
              layer: {
                type: 'gwc',
                sublayers:'breznik_LIDAR_08112013'
              }
            }
          ]
        },
        {
          dateRange: ['2010-07-09', '2010-07-09'],
          datasets: [
            {
              title: 'OP 09:25 0.2m',
              date: '2010-07-09 09:25Z', //'Z' na konci značí čas v UTC
              dataTypes: ['orto'],
              ekosystemTypes: ['les'],
              spatialResolution: 0.2,
              layer: {
                type: 'gwc',
                sublayers:'breznik_ORTHO_09072010'
              }
            },
	    	{
              title: 'OP 12:00 2,5 m',
              date: '2012-10-27 12:00Z', //'Z' na konci značí čas v UTC
              dataTypes: ['orto'],
              ekosystemTypes: ['les'],
              spatialResolution: 2.5,
              layer: {
				type: 'gwc',
                sublayers:'breznik_2,5m_1_ORTHO_05112013'
              }
            },
	    	{
              title: 'OP 11:30 5 m',
              date: '2012-10-27 11:30Z', //'Z' na konci značí čas v UTC
              dataTypes: ['orto'],
              ekosystemTypes: ['les'],
              spatialResolution: 5,
              layer: {
				type: 'gwc',
                sublayers:'breznik_5m_ORTHO_05112013'
              }
            }
          ]
        }
      ]
    },
    {
      title: "Černá Hora",
      baseLayer: "gmap",
      extent: [13.48, 48.944, 13.658, 49.021],
      campaigns: [
        {
          dateRange: ['2010-07-09', '2010-07-09'],
          datasets: [
            {
              title: 'OP 09:45 0.2m',
              date: '2010-07-09 09:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['orto'],
              ekosystemTypes: ['les'],
              spatialResolution: 0.2,
              layer: {
                type: 'gwc',
                sublayers:'cerna_hora_ORTHO_09072010'
              }
            }
          ]
        },
		{
          dateRange: ['2010-10-08', '2010-10-08'],
          datasets: [ 
            {
              title: {cs: 'LD 13:45 1 b/m²', en: 'LD 13:45 1 p/m²'},
              date: '2010-10-08 11:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['lidar'],
              ekosystemTypes: ['les'],
              pointsPerMeter: 1,
              layer: {
                type: 'gwc',
                sublayers:'cerna_hora_LIDAR_08112013'
              }
            }
          ]
        }
      ]
    },
    {
      title: "Smrčina",
      baseLayer: "gmap",
      extent: [13.901, 48.722, 13.941, 48.755],
      campaigns: [
        {
          dateRange: ['2011-05-25', '2011-05-25'],
          datasets: [
            {
              title: 'HS 10:05 0.8m',
              date: '2011-05-25 10:05Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['les'],
              spatialResolution: 0.8,
              spectralRange: [400, 980],
              spectralResolution: 5,
              numberOfBands: 130,
              layer: {
                type: 'gwc',
                sublayers:'smrcina_AISA_25052011'
              }
            }
          ]
        },
        {
          dateRange: ['2010-07-09', '2010-07-09'],
          datasets: [
            {
              title: 'OP 11:25 0.2m',
              date: '2010-07-09 11:25Z', //'Z' na konci značí čas v UTC
              dataTypes: ['orto'],
              ekosystemTypes: ['les'],
              spatialResolution: 0.2,
              layer: {
                type: 'gwc',
                sublayers:'smrcina_ORTHO_09072010'
              }
            },
	    	{
              title: 'OP 13:00 1 m',
              date: '2012-10-27 13:00Z', //'Z' na konci značí čas v UTC
              dataTypes: ['orto'],
              ekosystemTypes: ['les'],
              spatialResolution: 1,
              layer: {
		type: 'gwc',
                sublayers:'smrcina_1m_ORTHO_05112013'
              }
            }
          ]
        }
      ]
    },
    {
      title: "Štítná nad Vláří",
      baseLayer: "gmap",
      extent: [17.960, 49.024, 17.978, 49.053],
      campaigns: [
        {
          dateRange: ['2011-08-26', '2011-08-26'],
          datasets: [
            {
              title: 'HS 08:45 0.5m',
              date: '2011-08-26 08:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['les'],
              spatialResolution: 0.5,
              spectralRange: [400, 980],
              spectralResolution: 10,
              numberOfBands: 64,
              layer: {
                type: 'gwc',
                sublayers:'stitna_AISA_26082011'
              }
            }
          ]
        },
		{
          dateRange: ['2013-07-21', '2013-07-21'],
          datasets: [
            {
              title: 'HS 08:45 2.5m',
              date: '2013-07-21 08:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['les'],
              spatialResolution: 2.5,
              spectralRange: [400, 980],
              spectralResolution: 10,
              numberOfBands: 260,
              layer: {
                type: 'gwc',
                sublayers:'stitna_AISA_21072013'
              }
            }
          ]
        },
		{
          dateRange: ['2014-07-21', '2014-07-21'],
          datasets: [
            {
              title: 'HS 08:45 0.5m',
              date: '2014-07-21 08:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['les'],
              spatialResolution: 0.5,
              spectralRange: [400, 980],
              spectralResolution: 10,
              numberOfBands: 65,
              layer: {
                type: 'gwc',
                sublayers:'stitna_AISA_21072014'
              }
            }
          ]
        },        
		{
          dateRange: ['2010-10-01', '2010-10-01'],
          datasets: [
            {
              title: {cs: 'LD 12:45 5 b/m²', en: 'LD 12:45 5 p/m²'},
              date: '2010-10-01 12:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['lidar'],
              ekosystemTypes: ['les'],
              pointsPerMeter: 5,
              layer: {
                type: 'gwc',
                sublayers:'stitna_LIDAR_01102010'
              }
            }
          ]
        },
        {
          dateRange: ['2013-04-16', '2013-04-16'],
          datasets: [
            {
              title: {cs: 'LD 12:00 50 b/m²', en: 'LD 12:00 50 b/m² '},
              date: '2013-04-16 12:00Z', //'Z' na konci značí čas v UTC
              dataTypes: ['lidar'],
              ekosystemTypes: ['les'],
              pointsPerMeter: 50,
              layer: {
                type: 'gwc',
                sublayers:'stitna_LIDAR_16042013'
              }
            }
          ]
        },
		{
          dateRange: ['2014-11-05', '2014-11-05'], // potreba zjistit spravne datum porizeni
          datasets: [
            {
              title: 'OP 11:30 0.1 m',
              date: '2014-11-05 11:30Z', //'Z' na konci značí čas v UTC
              dataTypes: ['orto'],
              ekosystemTypes: ['les'],
              spatialResolution: 0.1,
              layer: {
                type: 'gwc',
                sublayers:'stitna_ORTHO_05112014'
              }
            }
          ]
        }
      ]
    },
    {
      title: "Výsypka - důl Jiří, Sokolovská uhelná a.s.",
      baseLayer: "gmap",
      extent: [12.621, 50.226, 12.755, 50.263],
      campaigns: [
        {
          dateRange: ['2009-07-27', '2009-07-27'],
          datasets: [
            {
              title: 'HS 11:00 0.4m',
              date: '2009-07-27 11:00Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['les'],
              spatialResolution: 0.4,
              spectralRange: [400, 980],
              spectralResolution: [8.64, 9.46],
              numberOfBands: 65,
              layer: {
                type: 'gwc',
                sublayers:'sokolovsko_1_AISA_27072009'
              }
            },
            {
              title: 'HS 11:20 0.4m',
              date: '2009-07-27 11:20Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['les'],
              spatialResolution: 0.4,
              spectralRange: [400, 980],
              spectralResolution: [8.64, 9.46],
              numberOfBands: 65,
              layer: {
                type: 'gwc',
                sublayers:'sokolovsko_2_AISA_27072009'
              }
            }    
          ]
        },
        {
          dateRange: ['2008-08-06', '2008-08-06'],
          datasets: [
            {
              title: 'HS 10:30 0.4m',
              date: '2008-08-06 11:00Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['les'],
              spatialResolution: 0.4,
              spectralRange: [400, 980],
              spectralResolution: [8.64, 9.46],
              numberOfBands: 65,
              layer: {
                type: 'gwc',
                sublayers:'sokolovsko_1_AISA_06082008'
              }
            },
            {
              title: 'HS 10:45 0.4m',
              date: '2008-08-06 11:10Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['les'],
              spatialResolution: 0.4,
              spectralRange: [400, 980],
              spectralResolution: [8.64, 9.46],
              numberOfBands: 65,
              layer: {
                type: 'gwc',
                sublayers:'sokolovsko_2_AISA_06082008'
              }
            }    
          ]
        },
        {
          dateRange: ['2010-10-01', '2010-10-01'],
          datasets: [
            {
              title: {cs: 'LD 11:00 1 b/m²', en: 'LD 11:00 1 p/m²'},
              date: '2010-10-01 11:00Z', //'Z' na konci značí čas v UTC
              dataTypes: ['lidar'],
              ekosystemTypes: ['les'],
              pointsPerMeter: 1,
              layer: {
                type: 'gwc',
                sublayers:'sokolovsko_LIDAR_01102010'
              }
            }
          ]
        }   
      ]
    },
    {
      title: "Bílý Kříž",
      baseLayer: "gmap",
      extent: [18.532, 49.490, 18.545, 49.508],
      campaigns: [
        {
          dateRange: ['2011-09-27', '2011-09-27'],
          datasets: [
            {
              title: 'HS 08:45 0.4m',
              date: '2011-09-27 08:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['les'],
              spatialResolution: 0.4,
              spectralRange: [400, 980],
              spectralResolution: [8.64, 9.46],
              numberOfBands: 65,
              layer: {
                type: 'gwc',
                sublayers:'bily_kriz_AISA_27092011'
              }
            }
          ]
        },
		{
          dateRange: ['2013-09-08', '2013-09-08'],
          datasets: [
            {
              title: 'HS 08:45 0.4m',
              date: '2013-09-08 08:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['les'],
              spatialResolution: 0.4,
              spectralRange: [400, 980],
              spectralResolution: [8.64, 9.46],
              numberOfBands: 65,
              layer: {
                type: 'gwc',
                sublayers:'bily_kriz_AISA_08092013'
              }
            }
          ]
        },
        {
          dateRange: ['2010-10-01', '2010-10-01'],
          datasets: [ 
            {
              title: {cs: 'LD 11:45 5 b/m²', en: 'LD 11:45 5 p/m²'},
              date: '2010-10-01 11:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['lidar'],
              ekosystemTypes: ['les'],
              pointsPerMeter: 5,
              layer: {
                type: 'gwc',
                sublayers:'bily_kriz_LIDAR_01102010'
              }
            }
          ]
        },
		{
          dateRange: ['2013-05-06', '2013-05-06'],
          datasets: [ 
            {
              title: {cs: 'LD 11:45 50 b/m²', en: 'LD 11:45 50 p/m²'},
              date: '2013-05-06 11:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['lidar'],
              ekosystemTypes: ['les'],
              pointsPerMeter: 50,
              layer: {
                type: 'gwc',
                sublayers:'bily_kriz_LIDAR_06112013'
              }
            }
          ]
        },
		{
          dateRange: ['2013-10-09', '2013-10-09'], // potreba zjistit spravne datum porizeni
          datasets: [
            {
              title: 'OP 11:25 0.1m',
              date: '2013-10-09 11:25Z', //'Z' na konci značí čas v UTC
              dataTypes: ['orto'],
              ekosystemTypes: ['les'],
              spatialResolution: 0.1,
              layer: {
                type: 'gwc',
                sublayers:'bily_kriz_ORTHO_09072013'
              }
            }
          ]
        },
		{
          dateRange: ['2014-07-09', '2014-07-09'], // potreba zjistit spravne datum porizeni
          datasets: [
            {
              title: 'OP 11:25 0.1m',
              date: '2010-07-09 11:25Z', //'Z' na konci značí čas v UTC
              dataTypes: ['orto'],
              ekosystemTypes: ['les'],
              spatialResolution: 0.1,
              layer: {
                type: 'gwc',
                sublayers:'bily_kriz_louka_ORTHO_09072014'
              }
            }
          ]
        },
		{
          dateRange: ['2014-07-09', '2014-07-09'], // potreba zjistit spravne datum porizeni
          datasets: [
            {
              title: 'OP 11:25 0.1m',
              date: '2010-07-09 11:25Z', //'Z' na konci značí čas v UTC
              dataTypes: ['orto'],
              ekosystemTypes: ['les'],
              spatialResolution: 0.1,
              layer: {
                type: 'gwc',
                sublayers:'bily_kriz_les_ORTHO_09072014'
              }
            }
          ]
        }
      ]
    },
    {
      title: "Těšínské beskydy",
      baseLayer: "gmap",
      extent: [18.729, 49.552, 18.858, 49.690],
      campaigns: [
        {
          dateRange: ['2011-09-27', '2011-09-27'],
          datasets: [
            {
              title: 'HS 08:45 5.0m',
              date: '2011-09-27 08:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['les'],
              spatialResolution: 5.0,
              spectralRange: [400, 980],
              spectralResolution: 10,
              numberOfBands: 64,
              layer: {
                type: 'gwc',
                sublayers:'tesinske_beskydy_AISA_27092011'
              }
            }
          ]
        },
		{
          dateRange: ['2013-09-05', '2013-09-05'],
          datasets: [ 
            {
              title: {cs: 'LD 11:45 1 b/m²', en: 'LD 11:45 1 p/m²'},
              date: '2013-09-05 11:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['lidar'],
              ekosystemTypes: ['les'],
              pointsPerMeter: 1,
              layer: {
                type: 'gwc',
                sublayers:'tesinske_beskydy_LIDAR_05112013'
              },
	      description:'Data pořídil ČÚZK'
            }
          ]
        }
      ]
    },
    {
      title: "Březová",
      baseLayer: "gmap",
      extent: [16.409, 49.636, 16.508, 49.695],
      campaigns: [
        {
          dateRange: ['2012-10-27', '2012-10-27'],
          datasets: [
            {
              title: 'OP 09:45 0.2m',
              date: '2012-10-27 09:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['orto'],
              ekosystemTypes: ['les'],
              spatialResolution: 0.2,
              layer: {
                type: 'gwc',
                sublayers:'brezova_ORTHO_27102012'
              }
            }
          ]
        },      
        {
          dateRange: ['2014-09-06', '2014-09-06'],
          datasets: [
            {
              title: 'HS 10:15 3 m',
              date: '2014-06-09 10:15Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['agro'],
              spatialResolution: 1,
              spectralRange: [400, 980],
              spectralResolution: 6.85,
              numberOfBands: 96,
              layer: {
                type: 'gwc',
                sublayers:'brezova_CASI_09062014_n'
              }
            }
          ]
        }
      ]
    },
    {
      title: "Veselá",
      baseLayer: "gmap",
      extent: [15.210, 49.312, 15.235, 49.331],
      campaigns: [
        {
          dateRange: ['2012-10-27', '2012-10-27'],
          datasets: [
            {
              title: 'OP 10:45 0.1 m',
              date: '2012-10-27 10:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['orto'],
              ekosystemTypes: ['les'],
              spatialResolution: 0.1,
              layer: {
                type: 'gwc',
                sublayers:'vesela_ORTHO_27102012'
              }
            }
          ]
        },
	       {
          dateRange: ['2013-10-03', '2013-10-03'],
          datasets: [
            {
              title: 'OP 11:30 0.1 m',
              date: '2013-10-03 11:30Z', //'Z' na konci značí čas v UTC
              dataTypes: ['orto'],
              ekosystemTypes: ['les'],
              spatialResolution: 0.1,
              layer: {
                type: 'gwc',
                sublayers:'vesela_ORTHO_03102013'
                }
              }
            ]
           },
           {
          dateRange: ['2014-06-08', '2014-06-08'],
          datasets: [
	         {
              title: 'HS 08:45 3.0m',
              date: '2014-06-08 08:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['les'],
              spatialResolution: 1.0,
              spectralRange: [400, 980],
              spectralResolution: 6.85,
              numberOfBands: 96,
              layer: {
                type: 'gwc',
                sublayers:'vesela_CASI_08062014'
               }
             }
           ]
        },                          
      	{
          		dateRange: ['2013-10-04', '2013-10-04'], // datum jen orientacne, potreba zjistit spravne
         		 datasets: [
           		 {
              title: 'OP 11:30 0.1 m',
              date: '2013-10-03 11:30Z', //'Z' na konci značí čas v UTC
              dataTypes: ['orto'],
              ekosystemTypes: ['les'],
              spatialResolution: 0.1,
              layer: {
                type: 'gwc',
                sublayers:'vesela_ORTHO_04102013'
              	}
            	}
         	  ]
        	}
     	 ]
      },
      {
        title: "Vendolí",
        baseLayer: "gmap",
        extent: [16.395, 49.723, 16.414, 49.750],
        campaigns: [
            { 
              dateRange: ['2013-03-07', '2013-03-07'],
         	  datasets: [ 
            {  
              title: 'HS 08:45 1.0m',
              date: '2014-06-09 08:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['les'],
              spatialResolution: 1.0,
              spectralRange: [400, 980],
              spectralResolution: 6.85,
              numberOfBands: 96,
              layer: {
                type: 'gwc',
                sublayers:'vendoli_CASI_09062014_N'
            }
          }
        ]
       }
      ] 
    },
    {       
      title: "Kotvrdovice",
      baseLayer: "gmap",
      extent: [16.749, 49.340, 16.812, 49.376],
      campaigns:[
        {
          dateRange: ['2013-03-07', '2013-03-07'],
          datasets: [ 
            {
              title: {cs: 'LD 15:00 10 b/m²', en: 'LD 15:00 10 p/m²'},
              date: '2013-03-07 15:00Z', //'Z' na konci značí čas v UTC
              dataTypes: ['lidar'],
              ekosystemTypes: ['agro'],
              pointsPerMeter: 10,
              layer: {
                type: 'gwc',
                sublayers:'kotvrdovice_LIDAR_07112013'
              }
            }
          ]
        }
      ]
    },
    {
      title: "Polkovice",
      baseLayer: "gmap",
      extent: [17.235, 49.378, 17.260, 49.422],
      campaigns:[
        {
          dateRange: ['2014-06-09', '2014-06-09'],
          datasets: [
            {
              title: 'HS 08:15 3 m',
              date: '2014-06-09 08:15Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['les'],
              spatialResolution: 1,
              spectralRange: [400, 980],
              spectralResolution: 6.85,
              numberOfBands: 96,
              layer: {
                type: 'gwc',
                sublayers:'polkovice_CASI_09062014'
              }
            }
          ]
        }
      ]
    },
    {
      title: "Rozkoš",
      baseLayer: "gmap",
      extent: [16.026, 50.351, 16.120, 50.408],
      campaigns: [
        {
          dateRange: ['2014-09-17', '2014-09-18'],
          datasets: [
            {
              title: 'HS 08:15 3 m',
              date: '2014-09-18 08:15Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['voda'],
              spatialResolution: 5,
              spectralRange: [400, 1000],
              spectralResolution: 2.5,
              numberOfBands: 260,
              layer: {
                type: 'gwc',
                sublayers:'rozkos_CASI_18092014'
              }
            }
          ]
        }
      ]
    },
    {
      title: "Seč",
      baseLayer: "gmap",
      extent: [15.623, 49.800, 15.692, 49.858],
      campaigns: [
        {
          dateRange: ['2014-09-17', '2014-09-18'],
          datasets: [
            {
              title: 'HS 08:45 3 m',
              date: '2014-09-18 08:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['voda'],
              spatialResolution: 3,
              spectralRange: [400, 1000],
              spectralResolution: 2.5,
              numberOfBands: 260,
              layer: {
                type: 'gwc',
                sublayers:'sec_CASI_18092014'
              }
            }
          ]
        }
      ]
    },
    {
      title: "Otnice",
      baseLayer: "gmap",
      extent: [16.787, 49.075, 16.891, 49.111],
      campaigns: [
        {
          dateRange: ['2014-05-06', '2014-05-06'],
          datasets: [
            {
              title: 'HS 08:45 2.5 m',
              date: '2014-05-06 08:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['les'],
              spatialResolution: 5,
              spectralRange: [400, 980],
              spectralResolution: 3,
              numberOfBands: 96,
              layer: {
                type: 'gwc',
                sublayers:'otnice_CASI_06052014'
              }
            }
          ]
        }
      ]
    },
    {
      title: "letiště - Brno",
      baseLayer: "gmap",
      extent: [16.669, 49.134, 16.726, 49.162],
      campaigns: [
        {
          dateRange: ['2014-05-06', '2014-05-06'],
          datasets: [
            {
              title: 'HS 08:45 1 m',
              date: '2014-05-06 08:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['les'],
              spatialResolution: 5,
              spectralRange: [400, 980],
              spectralResolution: 3,
              numberOfBands: 96,
              layer: {
                type: 'gwc',
                sublayers:'otnice_letiste_CASI_06052014'
              }
            }
          ]
        }
      ]
    },
    {
      title: "Lipno",
      baseLayer: "gmap",
      extent: [14.205, 48.628, 14.236, 48.664],
      campaigns: [
        {
          dateRange: ['2014-06-08', '2014-06-08'],
          datasets: [
            {
              title: 'HS 08:45 3 m',
              date: '2014-06-08 08:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['les'],
              spatialResolution: 1,
              spectralRange: [400, 980],
              spectralResolution: 6.85,
              numberOfBands: 96,
              layer: {
                type: 'gwc',
                sublayers:'lipno_kalibrace_CASI_08062014'
              }
            }
          ]
        }
      ]
    },
    {
      title: "Ivanovice",
      baseLayer: "gmap",
      extent: [17.374, 49.312, 17.485, 49.405],
      campaigns: [
        {
          dateRange: ['2013-09-08', '2013-09-08'],
          datasets: [
            {
              title: 'HS 10:15 3 m',
              date: '2013-06-08 08:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['les'],
              spatialResolution: 1,
              spectralRange: [400, 980],
              spectralResolution: 6.85,
              numberOfBands: 96,
              layer: {
                type: 'gwc',
                sublayers:'ivanovice_CASI_08092013'
              }
            }
          ]
        }
      ]
    },
    {
      title: "Brno přehrada",
      baseLayer: "gmap",
      extent: [16.418, 49.218, 16.539, 49.296],
      campaigns: [
        {
          dateRange: ['2013-09-08', '2013-09-08'],
          datasets: [
            {
              title: 'HS 08:45 3.5 m',
              date: '2013-09-08 08:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['voda'],
              spatialResolution: 3.5,
              spectralRange: [400, 980],
              spectralResolution: 2.5,
              numberOfBands: 260,
              layer: {
                type: 'gwc',
                sublayers:'brno_prehrada_AISA_08092013'
              }
            }
          ]
        }
      ]
    },
    {
      title: "Dalešice",
      baseLayer: "gmap",
      extent: [15.997, 49.206, 16.160, 49.092],
      campaigns: [
        {
          dateRange: ['2013-09-08', '2013-09-08'],
          datasets: [
            {
              title: 'HS 09:45 3.5 m',
              date: '2013-09-08 09:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['voda'],
              spatialResolution: 3.5,
              spectralRange: [400, 980],
              spectralResolution: 2.5,
              numberOfBands: 260,
              layer: {
                type: 'gwc',
                sublayers:'dalesice_AISA_08092013'
              }
            }
          ]
        }
      ]
    },
    {
      title: "Židlochovice",
      baseLayer: "gmap",
      extent: [16.595, 49.015, 16.621, 49.039],
      campaigns: [
        {
          dateRange: ['2014-06-17', '2014-06-17'], 
          datasets: [
            {
              title: 'HS 09:45 0.4 m',
              date: '2014-06-17 09:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['agro'],
              spatialResolution: 0.4,
              spectralRange: [400, 980],
              spectralResolution: [2.16, 2.36],
              numberOfBands: 260,
              layer: {
                type: 'gwc',
                sublayers:'zidlochovice_AISA_17062014'
              }
            }
          ]
        }
      ]
    },
    {
      title: "Horní Libochová",
      baseLayer: "gmap",
      extent: [16.140, 49.417, 16.210, 49.399],
      campaigns: [
        {
          dateRange: ['2013-09-08', '2013-09-08'],
          datasets: [
            {
              title: 'HS 10:45 3.5m',
              date: '2013-09-08 10:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['agro'],
              spatialResolution: 3.5,
              spectralRange: [400, 980],
              spectralResolution: 2.5,
              numberOfBands: 260,
              layer: {          
                type: 'gwc',
                sublayers:'horni_libochova_AISA_08092013'
              }
            }
          ]
        }
      ]
    },
    {
      title: "Rájec-Jestřebí",
      baseLayer: "gmap",
      extent: [16.673, 49.43, 16.712, 49.455],
      campaigns: [
		{
          dateRange: ['2013-03-07', '2013-03-07'],
          datasets: [ 
            {
              title: {cs: 'LD 15:45 10 b/m²', en: 'LD 15:45 10 p/m²'},
              date: '2013-03-07 15:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['lidar'],
              ekosystemTypes: ['les'],
              pointsPerMeter: 10,
              layer: {
                type: 'gwc',
                sublayers:'rajec_LIDAR_07112013'
              }
            }
          ]
        },
	    {
          dateRange: ['2014-11-05', '2014-11-05'], // potreba zjistit spravne datum porizeni
          datasets: [ 
            {
              title: 'OP 11:30 0.1 m',
              date: '2012-10-27 11:30Z', //'Z' na konci značí čas v UTC
              dataTypes: ['orto'],
              ekosystemTypes: ['les'],
              spatialResolution: 0.1,
              layer: {
				type: 'gwc',
                sublayers:'rajec_ORTHO_05112014'
              }
            }
      	  ]
	     }
      ]
    },
    { 
      title: "Červík",
      baseLayer: "gmap",
      extent: [18.371, 49.440, 18.402, 49.465],
      campaigns: [
        {
          dateRange: ['2013-05-08', '2013-05-08'],
          datasets: [ 
            {
              title: {cs: 'LD 13:30 10 b/m²', en: 'LD 13:30 10 p/m²'},
              date: '2013-05-08 13:30Z', //'Z' na konci značí čas v UTC
              dataTypes: ['lidar'],
              ekosystemTypes: ['les'],
              pointsPerMeter: 10,
              layer: {
                type: 'gwc',
                sublayers:'cervik_LIDAR_08112013'
              }
            }
          ]
        }
      ]
    },
    { 
      title: "Jinačovice",
      baseLayer: "gmap",
      extent: [16.500, 49.250, 16.552, 49.330],
      campaigns: [
        {
          dateRange: ['2014-07-16', '2014-07-16'], 
          datasets: [ 
            {
              title: {cs: 'LD 15:30 6 b/m²', en: 'LD 15:30 6 p/m²'},
              date: '2014-07-16 15:30Z', //'Z' na konci značí čas v UTC
              dataTypes: ['lidar'],
              ekosystemTypes: ['les'],
              pointsPerMeter: 6,
              layer: {
                type: 'gwc',
                sublayers:'jinacovice_LIDAR_16042014'
              }
            }
          ]
        }
      ]
    },
    { 
      title: "Lanžhot",
      baseLayer: "gmap",
      extent: [16.872, 48.734, 17.051, 48.612],
      campaigns: [
        {
          dateRange: ['2013-04-05', '2013-04-05'],
          datasets: [ 
            {
              title: {cs: 'LD 13:30 1 b/m²', en: 'LD 13:30 1 p/m²'},
              date: '2013-04-05 13:30Z', //'Z' na konci značí čas v UTC
              dataTypes: ['lidar'],
              ekosystemTypes: ['les'],
              pointsPerMeter: 1,
              layer: {
                type: 'gwc',
                sublayers:'lanzhot_LIDAR_05112013'
              },
	      description:'Data pořídil ČÚZK'
            }
          ]
        },
		{
          dateRange: ['2014-11-05', '2014-11-05'], // potreba zjistit spravne datum porizeni
          datasets: [ 
            {
              title: 'OP 11:30 0.1 m',
              date: '2012-10-27 11:30Z', //'Z' na konci značí čas v UTC
              dataTypes: ['orto'],
              ekosystemTypes: ['les'],
              spatialResolution: 0.1,
              layer: {
				type: 'gwc',
                sublayers:'lanzhot_ORTHO_05112014'
              }
            }
      	  ]
		}
      ]
    },
    { 
      title: "Domanínek",
      baseLayer: "gmap",
      extent: [16.211, 49.540, 16.272, 49.508],
      campaigns: [
        {
          dateRange: ['2013-08-02', '2013-08-02'],
          datasets: [
            {
              title: 'HS 10:15 3 m',
              date: '2013-08-02 08:45Z', //'Z' na konci značí čas v UTC
              dataTypes: ['hyper'],
              ekosystemTypes: ['les'],
              spatialResolution: 1,
              spectralRange: [400, 980],
              spectralResolution: 10,
              numberOfBands: 96,
              layer: {
                type: 'gwc',
                sublayers:'domaninek_CASI_02082013'
              }
            }
          ]
        },
        {  dateRange: ['2013-04-05', '2013-04-05'],
          datasets: [ 
            {
              title: {cs: 'LD 11:30 1 b/m²', en: 'LD 11:30 1 p/m²'},
              date: '2013-04-05 11:30Z', //'Z' na konci značí čas v UTC
              dataTypes: ['lidar'],
              ekosystemTypes: ['agro'],
              pointsPerMeter: 1,
              layer: {
                type: 'gwc',
                sublayers:'domaninek_LIDAR_05112013'
              },
	      description:'Data pořídil ČÚZK'
            }
          ]
        },
		{
          dateRange: ['2014-11-05', '2014-11-05'], // potreba zjistit spravne datum porizeni
          datasets: [ 
            {
              title: 'OP 11:30 0.1 m',
              date: '2012-10-27 11:30Z', //'Z' na konci značí čas v UTC
              dataTypes: ['orto'],
              ekosystemTypes: ['agro'],
              spatialResolution: 0.1,
              layer: {
				type: 'gwc',
                sublayers:'domaninek_ORTHO_05112014'
              }
            }
      	  ]
		}
      ]
    },
    { 
      title: "Brno - Kraví hora",
      baseLayer: "gmap",
      extent: [16.569, 49.194, 16.599, 49.217],
      campaigns: [
        {
          dateRange: ['2014-07-09', '2014-07-09'], // potreba zjistit spravne datum porizeni
          datasets: [ 
            {
              title: 'OP 13:00 0.1 m',
              date: '2012-10-27 13:00Z', //'Z' na konci značí čas v UTC
              dataTypes: ['orto'],
              ekosystemTypes: ['les'],
              spatialResolution: 0.1,
              layer: {
				type: 'gwc',
                sublayers:'brno_kravi_hora_ORTHO_09072014'
              }
            }
          ]
        }
      ]
    },
    { 
      title: "Křešín u Pacova",
      baseLayer: "gmap",
      extent: [15.060, 49.581, 15.092, 49.563],
      campaigns: [
        {
          dateRange: ['2014-04-16', '2014-04-16'], // potreba zjistit spravne datum porizeni
          datasets: [ 
            {
              title: {cs: 'OP 13:30 0.1 m', en: 'OP 13:30 0.1 m'},
              date: '2014-04-16 13:30Z', //'Z' na konci značí čas v UTC
              dataTypes: ['orto'],
              ekosystemTypes: ['agro'],
              spatialResolution: 0.1,
              layer: {
                type: 'gwc',
                sublayers:'kresin_u_pacova_ORTHO_16042014'
              }
            }
          ]
        }
      ]
    }
   ]
  }
  

