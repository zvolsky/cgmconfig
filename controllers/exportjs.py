# -*- coding: utf-8 -*-

from plugin_mz import force_download


LINESEP = '\r\n'  # pro vystupni config.js

campaigns = db(db.campaigns).select()
datasets = db(db.datasets).select()

data_dict = {item.id: item.dtid for item in db(db.datatypes).select(db.datatypes.id, db.datatypes.dtid)}
eko_dict = {item.id: item.etid for item in db(db.ekosystemtypes).select(db.ekosystemtypes.id, db.ekosystemtypes.etid)}

def stahni2():
    content = db(db.configfile).select(db.configfile.cfcontent).first().cfcontent

    important = ['baseLayers', 'dataTypes', 'ekosystemTypes', 'places']
    out = ''
    name_stack = ''
    skipmode = False
    for char in content:
        if skipmode:
            if literal_delimiter:
                if escaped:
                    escaped = False
                elif char == literal_delimiter:
                    literal_delimiter = ''
                elif char == '\\':
                    escaped = True
            elif char == ']':
                if level <= 1:
                    out += intruder
                    skipmode = False
                else:
                    level -= 1
            elif char == '[':
                level += 1
            elif char in ('"', "'"):
                literal_delimiter = char
                escaped = False
        else:
            if char in ': \t\r\n':
                if name_stack in important:
                    important.remove(name_stack)  # jinak rozbije sekce datasetProperties a overview
                                        # TODO: pokud by important identifier nebyl jako první, musí se to řešit
                    skipmode = True
                    level = 0
                    literal_delimiter = ''
                    intruder = __get_intruder(name_stack)
                name_stack = ''
            else:
                name_stack += char
            out += char
    return force_download('config.js', out, 'application/javascript')

def __get_intruder(identifier):

    part_separator = ','
    parts = []
    if identifier == 'baseLayers':
        part_separator = ', '
        parts = ["'%s'" % __esc(row.baselayer) for row in db(db.baselayers).select(db.baselayers.baselayer)]
    elif identifier == 'dataTypes':
        parts = [LINESEP + 4*' ' + "{ id: '%s', title: {cs: '%s', en: '%s'} }" % (__esc(row.dtid), __esc(row.dtcs), __esc(row.dten))
                 for row in db(db.datatypes).select()]
    elif identifier == 'ekosystemTypes':
        parts = [LINESEP + 4*' ' + "{ id: '%s', title: {cs: '%s', en: '%s'} }" % (__esc(row.etid), __esc(row.etcs), __esc(row.eten))
                 for row in db(db.ekosystemtypes).select()]
    elif identifier == 'places':
        part_separator = ',' + LINESEP
        parts = ["%s{%stitle: %s,%sbaseLayer: \"%s\",%sextent: [%s, %s, %s, %s],%scampaigns: [%s]%s}" % (
                    LINESEP + 4*' ', LINESEP + 6*' ',
                    ('{cs: \"%s\", en: \"%s\"}' % (__esc(row.places.ptitlecs), __esc(row.places.ptitleen)))
                            if row.places.ptitleen
                            else ('\"%s\"' % __esc(row.places.ptitlecs)),
                    LINESEP + 6*' ', __esc(row.baselayers.baselayer),
                    LINESEP + 6*' ', row.places.pextentl, row.places.pextentb, row.places.pextentr, row.places.pextentt,
                    LINESEP + 6*' ', __get_campaigns(row.places.id),
                    LINESEP + 4*' ',
                )
                for row in db(db.places).select(
                    db.places.ALL, db.baselayers.baselayer,
                    left=db.baselayers.on(db.baselayers.id == db.places.baselayers_id)
                )]
    return ' [%s]' % part_separator.join(parts)

def __get_campaigns(places_id):
    parts = []
    for row in campaigns.find(lambda row: row.places_id == places_id):
        parts.append(
            "%s{%sdateRange: %s,%sdatasets: [%s]%s}" % (
                LINESEP + 8*' ', LINESEP + 10*' ',
                ('[\"%s\", \"%s\"]' % (row.cdaterange.strftime('%Y-%m-%d'), row.cdaterange2.strftime('%Y-%m-%d')))
                        if row.cdaterange2
                        else ('\"%s\"' % row.cdaterange.strftime('%Y-%m-%d')),
                LINESEP + 10*' ', __get_datasets(row.id),
                LINESEP + 8*' ',
            )
        )
    return ''.join(parts)

def __get_datasets(campaigns_id):
    parts = []
    for row in datasets.find(lambda row: row.campaigns_id == campaigns_id):
        data_parts = []
        for datatypes_id in row.datatypes_id:
            data_parts.append("'%s'" % data_dict[datatypes_id])
        eko_parts = []
        for ekosystemtypes_id in row.ekosystemtypes_id:
            eko_parts.append("'%s'" % eko_dict[ekosystemtypes_id])
        layer = '{' + LINESEP + 16*' ' + "type: 'gwc'," + LINESEP + 16*' ' + "sublayers: '" + __esc(row.dlayer) + "'" + LINESEP + 14*' ' + '}'
        optional = ''
        if row.dspatialresolution:
            optional += __add_optional('spatialResolution', '%s' % row.dspatialresolution)
        if row.dpointspermeter:
            optional += __add_optional('pointsPerMeter', '%s' % row.dpointspermeter)
        if row.dspectralrangefrom and row.dspectralrangeto:
            optional += __add_optional('spectralRange', '[%s, %s]' % (row.dspectralrangefrom, row.dspectralrangeto))
        if row.dspectralresolutionfrom and row.dspectralresolutionto:
            optional += __add_optional('spectralResolution', '[%s, %s]' % (row.dspectralresolutionfrom, row.dspectralresolutionto))
        if row.dnumberofbands:
            optional += __add_optional('numberOfBands', '%s' % row.dnumberofbands)
        if row.ddescriptioncs or row.ddescriptionen:
            if not row.ddescriptionen:
                optional += __add_optional('description', '"%s"' % __esc(row.ddescriptioncs))
            else:
                optional += __add_optional('description', '{cs: "%s", en: "%s"}' % (row.ddescriptioncs or '', row.ddescriptionen or ''))
        parts.append(
            "%s{%stitle: %s,%sdate: \"%s%s\",%sdataTypes: %s,%sekosystemTypes: %s,%slayer: %s%s%s}" % (
                LINESEP + 12*' ', LINESEP + 14*' ',
                ('{cs: \"%s\", en: \"%s\"}' % (__esc(row.dtitlecs), __esc(row.dtitleen)))
                        if row.dtitleen
                        else ('\"%s\"' % __esc(row.dtitlecs)),
                LINESEP + 14*' ', row.ddate.strftime('%Y-%m-%d %H:%M'), row.ddatetz or 'Z',
                LINESEP + 14*' ', '[%s]' % ','.join(data_parts),
                LINESEP + 14*' ', '[%s]' % ','.join(eko_parts),
                LINESEP + 14*' ', layer,
                optional,
                LINESEP + 12*' ',
            )
        )
    return ''.join(parts)

def __esc(txt):
    return txt.replace("'", "\\'")

def __add_optional(lbl, val):
    return ',' + LINESEP + 14*' ' + lbl + ': ' + val
