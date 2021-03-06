# -*- coding: utf-8 -*-

# mz support for Web2py application
# version 0.1 (older - probably can be rewritten by newer one)

from gluon import current

from gluon.html import SPAN, DIV, CAT, UL, TEXTAREA, INPUT, LABEL, SELECT, P
from gluon.sqlhtml import add_class
from gluon.validators import IS_NOT_EMPTY, IS_IN_DB


class FormTxt(object):
    ctrl = current.T('(Ctrl+click vybere více možností současně)')
    err_vyber = current.T('Vyber jednu nebo více možností')
    err_neco = current.T('Údaj je povinný')

class IS_NOT_EMPTY_(IS_NOT_EMPTY):
    def __init__(self):
        super(IS_NOT_EMPTY_, self).__init__(error_message=FormTxt.err_neco)

class IS_IN_DB_(IS_IN_DB):
    def __init__(self, *args, **kwargs):
        super(IS_IN_DB_, self).__init__(*args, error_message=FormTxt.err_vyber, **kwargs)


def force_download(filename, content, mime_type=None):
    """download sestavené stránky
    explicitní Content-Type může být string/unicode nebo iterable (list, tuple)
        to je preferovaný způsob
    implicitně se použije nějaká oblíbená sada PHP vývojářů
        to je nevhodný způsob, ale snad funkční, pokud se prohlížeč vzpěčuje
    """
    if 'attachment' in current.request.vars:
        current.response.headers['Content-Disposition'] = 'attachment; filename="%s"' % filename
        if mime_type is None:
            current.response.headers['Content-Type'] = 'application/force-download'
            current.response.headers['Content-Type'] = 'application/octet-stream'
            current.response.headers['Content-Type'] = 'application/download'
        elif isinstance(mime_type, basestring):
            current.response.headers['Content-Type'] = mime_type
        else:
            for mt in mime_type:
                current.response.headers['Content-Type'] = mt
        current.response.headers['Content-Length'] = '%s' % len(content)
    return content

def formstyle_bootstrap3_compact_factory(col_label_size=2, col_help_size=6,
                                         input_class='input-sm', control_label='control-label-sm'):
    """formstyle = formstyle_bootstrap3_compact_factory()
    TODO: control-label-sm není definovaná (jako control-label, ale bez posunu dolů)
    """
    def _inner(form, fields):
        form.add_class('form-horizontal')
        label_col_class = "col-sm-%d" % col_label_size
        col_class = "col-sm-%d" % (12 - col_label_size - col_help_size)
        offset_class = "col-sm-offset-%d" % col_label_size
        help_class = "col-sm-%d" % col_help_size
        parent = CAT()
        for id, label, controls, help in fields:
            # wrappers
            _help = DIV(SPAN(help, _class='help-block'), _class="%s" % (help_class))
            # embed _help into _controls
            _controls = DIV(controls, _class="%s" % (col_class))
            if isinstance(controls, INPUT):
                if controls['_type'] == 'submit':
                    controls.add_class('btn btn-primary')
                    _controls = DIV(controls, _class="%s %s" % (col_class, offset_class))
                if controls['_type'] == 'button':
                    controls.add_class('btn btn-default')
                elif controls['_type'] == 'file':
                    controls.add_class('input-file')
                    controls.add_class(input_class)
                elif controls['_type'] in ('text', 'password'):
                    controls.add_class('form-control')
                    controls.add_class(input_class)
                elif controls['_type'] == 'checkbox':
                    label['_for'] = None
                    label.insert(0, controls)
                    label.insert(1, ' ')
                    _controls = DIV(DIV(label, _class="checkbox"),
                                    _class="%s %s" % (offset_class, col_class))
                    label = ''
                elif isinstance(controls, (SELECT, TEXTAREA)):
                    controls.add_class('form-control')
                    controls.add_class(input_class)

            elif isinstance(controls, SPAN):
                _controls = P(controls.components,
                              _class="form-control-static %s" % col_class)
            elif isinstance(controls, UL):
                for e in controls.elements("input"):
                    e.add_class('form-control')
            if isinstance(label, LABEL):
                label['_class'] = add_class(label.get('_class'), '%s %s' % (control_label, label_col_class))

            parent.append(DIV(label, _controls, _help, _class='row', _id=id))
        return DIV(parent, _class='form-group')
    return _inner
