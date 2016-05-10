# -*- coding: utf-8 -*-

import os


db.define_table('configfile',
        Field('configfile', 'upload', default=os.path.join(request.folder, 'config_in')))
