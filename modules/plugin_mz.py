# -*- coding: utf-8 -*-

from gluon import current


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
