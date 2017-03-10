# -*- coding: utf-8 -*-

from plugin_mz import force_download


LINESEP = '\r\n'  # pro vystupni config.js

campaigns = db(db.campaigns).select()
datasets = db(db.datasets).select()
dt_children = db(db.dt_children).select()

data_dict = {item.id: item.dtid for item in db(db.datatypes).select(db.datatypes.id, db.datatypes.dtid)}
eko_dict = {item.id: item.etid for item in db(db.ekosystemtypes).select(db.ekosystemtypes.id, db.ekosystemtypes.etid)}

@auth.requires_membership('admin')
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
                if name_stack[:1] in '"\'':        # "jmeno" místo: jmeno
                    attr_delimiter = name_stack[:1]
                    name_stack = name_stack[1:-1]
                else:
                    attr_delimiter = name_stack[:1]
                if name_stack in important:
                    important.remove(name_stack)  # jinak rozbije sekce datasetProperties a overview
                                        # TODO: pokud by important identifier nebyl jako první, musí se to řešit
                    skipmode = True
                    level = 0
                    literal_delimiter = ''
                    intruder = __get_intruder(name_stack, attr_delimiter)
                name_stack = ''
            else:
                name_stack += char
            out += char
    return force_download('config.js', out, 'application/javascript')

def __get_intruder(identifier, dlm):

    part_separator = ','
    parts = []
    types_mask = "{ %sid%s: '%s', %stitle%s: {%scs%s: '%s', %sen%s: '%s'}%s }"
    if identifier == 'baseLayers':
        part_separator = ', '
        parts = ["'%s'" % __esc(row.baselayer) for row in db(db.baselayers).select(db.baselayers.baselayer)]
    elif identifier == 'dataTypes':
        parts = [LINESEP + 4*' ' + types_mask % (
                    dlm, dlm, __esc(row.dtid), dlm, dlm, dlm, dlm, __esc(row.dtcs), dlm, dlm, __esc(row.dten), __get_dt_children(row.id, dlm))
                 for row in db(db.datatypes).select()]
    elif identifier == 'ekosystemTypes':
        parts = [LINESEP + 4*' ' + types_mask % (
                    dlm, dlm, __esc(row.etid), dlm, dlm, dlm, dlm, __esc(row.etcs), dlm, dlm, __esc(row.eten), '')
                 for row in db(db.ekosystemtypes).select()]
    elif identifier == 'places':
        part_separator = ',' + LINESEP
        parts = ["%s{%stitle%s: %s,%sbaseLayer%s: \"%s\",%sextent%s: [%s, %s, %s, %s],%scampaigns%s: [%s]%s}" % (
                    LINESEP + 4*' ', LINESEP + 6*' ' + dlm, dlm,
                    ('{cs: \"%s\", en: \"%s\"}' % (__esc(row.places.ptitlecs), __esc(row.places.ptitleen)))
                            if row.places.ptitleen
                            else ('\"%s\"' % __esc(row.places.ptitlecs)),
                    LINESEP + 6*' ' + dlm, dlm, __esc(row.baselayers.baselayer),
                    LINESEP + 6*' ' + dlm, dlm, row.places.pextentl, row.places.pextentb, row.places.pextentr, row.places.pextentt,
                    LINESEP + 6*' ' + dlm, dlm, __get_campaigns(row.places.id, dlm),
                    LINESEP + 4*' ',
                )
                for row in db(db.places).select(
                    db.places.ALL, db.baselayers.baselayer,
                    left=db.baselayers.on(db.baselayers.id == db.places.baselayers_id)
                )]

    return ' [%s]' % part_separator.join(parts)

def __get_dt_children(datatypes_id, dlm):
    parts = []
    for row in dt_children.find(lambda row: row.datatypes_id == datatypes_id):
        parts.append(
            "%s{%sid%s: %s, %stitle%s: %s}" % (
                LINESEP + 8 * ' ', dlm, dlm,
                ("'%s'" % __esc(row.dtchid)),
                dlm, dlm,
                ('{cs: \"%s\", en: \"%s\"}' % (__esc(row.dtchcs), __esc(row.dtchen)))
                if row.dtchen
                else ('\"%s\"' % __esc(row.dtchcs)),
            )
        )
    if parts:
        return ',' + LINESEP + 6 * ' ' + '"children": [' + ','.join(parts) + LINESEP + 6 * ' ' + ']'
    else:
        return ''

def __get_campaigns(places_id, dlm):
    parts = []
    for row in campaigns.find(lambda row: row.places_id == places_id):
        parts.append(
            "%s{%sdateRange%s: %s,%sdatasets%s: [%s]%s}" % (
                LINESEP + 8*' ', LINESEP + 10*' ' + dlm, dlm,
                ('[\"%s\", \"%s\"]' % (row.cdaterange.strftime('%Y-%m-%d'), row.cdaterange2.strftime('%Y-%m-%d')))
                        if row.cdaterange2
                        else ('\"%s\"' % row.cdaterange.strftime('%Y-%m-%d')),
                LINESEP + 10*' ' + dlm, dlm, __get_datasets(row.id, dlm),
                LINESEP + 8*' ',
            )
        )
    return ','.join(parts)

def __get_datasets(campaigns_id, dlm):
    parts = []
    for row in datasets.find(lambda row: row.campaigns_id == campaigns_id):
        data_parts = []
        for datatypes_id in row.datatypes_id:
            data_parts.append("'%s'" % data_dict[datatypes_id])
        eko_parts = []
        for ekosystemtypes_id in row.ekosystemtypes_id:
            eko_parts.append("'%s'" % eko_dict[ekosystemtypes_id])
        layer = '{' + LINESEP + 16*' ' + dlm + "type" + dlm + ": 'gwc'," + LINESEP + 16*' ' + dlm + "sublayers" + dlm + ": '" + __esc(row.dlayer) + "'" + LINESEP + 14*' ' + '}'
        optional = ''
        if row.dspatialresolution:
            optional += __add_optional('spatialResolution', '%s' % row.dspatialresolution, dlm)
        if row.dpointspermeter:
            optional += __add_optional('pointsPerMeter', '%s' % row.dpointspermeter, dlm)
        if row.dspectralrangefrom and row.dspectralrangeto:
            optional += __add_optional('spectralRange', '[%s, %s]' % (row.dspectralrangefrom, row.dspectralrangeto), dlm)
        if row.dspectralresolutionfrom and row.dspectralresolutionto:
            if row.dspectralresolutionfrom == row.dspectralresolutionto:
                optional += __add_optional('spectralResolution', '%s' % row.dspectralresolutionfrom, dlm)
            else:
                optional += __add_optional('spectralResolution', '[%s, %s]' % (row.dspectralresolutionfrom, row.dspectralresolutionto), dlm)
        if row.dnumberofbands:
            optional += __add_optional('numberOfBands', '%s' % row.dnumberofbands, dlm)
        if row.ddescriptioncs or row.ddescriptionen:
            if not row.ddescriptionen:
                optional += __add_optional('description', '"%s"' % __esc(row.ddescriptioncs), dlm)
            else:
                optional += __add_optional('description', '{%scs%s: "%s", %sen%s: "%s"}' % (
                            dlm, dlm, row.ddescriptioncs or '', dlm, dlm, row.ddescriptionen or ''), dlm)
        if row.dlegendurlcs or row.dlegendurlen:
            if not row.dlegendurlen:
                optional += __add_optional('legendUrl', '"%s"' % __esc(row.dlegendurlcs), dlm)
            else:
                optional += __add_optional('legendUrl', '{%scs%s: "%s", %sen%s: "%s"}' % (
                            dlm, dlm, row.dlegendurlcs or '', dlm, dlm, row.dlegendurlen or ''), dlm)
        parts.append(
            "%s{%stitle%s: %s,%sdate%s: \"%s%s\",%sdataTypes%s: %s,%sekosystemTypes%s: %s,%slayer%s: %s%s%s}" % (
                LINESEP + 12*' ', LINESEP + 14*' ' + dlm, dlm,
                ('{%scs%s: \"%s\", %sen%s: \"%s\"}' % (dlm, dlm, __esc(row.dtitlecs), dlm, dlm, __esc(row.dtitleen)))
                        if row.dtitleen
                        else ('\"%s\"' % __esc(row.dtitlecs)),
                LINESEP + 14*' ' + dlm, dlm, row.ddate.strftime('%Y-%m-%d %H:%M'), row.ddatetz or 'Z',
                LINESEP + 14*' ' + dlm, dlm, '[%s]' % ','.join(data_parts),
                LINESEP + 14*' ' + dlm, dlm, '[%s]' % ','.join(eko_parts),
                LINESEP + 14*' ' + dlm, dlm, layer,
                optional,
                LINESEP + 12*' ',
            )
        )
    return ','.join(parts)

def __esc(txt):
    return txt.replace("'", "\\'").replace('"', '\\"')

def __add_optional(lbl, val, dlm):
    return ',' + LINESEP + 14*' ' + dlm + lbl + dlm + ': ' + val
