# -*- coding: utf-8 -*-

from gluon import current


def force_download(filename, content):
    if 'attachment' in current.request.vars:
        current.response.headers['Content-Disposition'] = 'attachment; filename="%s"' % filename
        current.response.headers['Content-Type'] = 'application/force-download'
        current.response.headers['Content-Type'] = 'application/octet-stream'
        current.response.headers['Content-Type'] = 'application/download'
        current.response.headers['Content-Length'] = '%s' % len(content)
    return content
