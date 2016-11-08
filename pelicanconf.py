#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals
from datetime import datetime

AUTHOR = u'Steve Schwarz'
SITENAME = u'Dog Agility Jump Height Calculator'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'America/Chicago'

DEFAULT_LANG = u'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = ()

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

STATIC_PATHS = ['images']  # put page specific assets here
PLUGIN_PATHS = ['../pelican-plugins']  # set this to the location of your plugins checkout
PLUGINS = ['assets']
THEME = './theme'          # All CSS/JS files go in directories under here
# I only want to generate Pages so I disable all "blog-like" pages see Note in:
# http://docs.getpelican.com/en/stable/settings.html?highlight=url_for#url-settings
TAGS_SAVE_AS = ''          # Don't generate Tags pages
TAG_SAVE_AS = ''
CATEGORY_SAVE_AS = ''      # Don't generate Category pages
AUTHOR_SAVE_AS = ''        # Don't generate Author pages
DIRECT_TEMPLATES = ['index']  # Don't generate tag, category, or author output for some themes
# In the generated output directory move files to the root and adjust their URLs to match:
PAGE_URL = '{slug}.html'
PAGE_SAVE_AS = '{slug}.html'
INDEX_SAVE_AS = "/ignore/index.html"  # don't use normal'

CURRDATE = datetime.now().strftime('%Y-%m-%d')
