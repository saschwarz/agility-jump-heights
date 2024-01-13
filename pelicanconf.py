#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

from datetime import datetime

AUTHOR = "Steve Schwarz"
SITENAME = "Dog Agility Jump Height Calculator"
SITEURL = ""

PATH = "content"

TIMEZONE = "America/Chicago"

DEFAULT_LANG = "en"

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = ()

# Social widget
SOCIAL = (
    ("Facebook", "https://www.facebook.com/AgilityNerd/"),
    ("Twitter", "https://twitter.com/agilitynerd"),
)

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True

CURRDATE = datetime.now().strftime("%Y-%m-%d")
# copy all image to root directory and CNAME to root for GH Pages custom domains
EXTRA_PATH_METADATA = {
    "images/jumpheights.png": {"path": "jumpheights.png"},
    "images/android-chrome-192x192.png": {"path": "android-chrome-192x192.png"},
    "images/android-chrome-512x512.png": {"path": "android-chrome-512x512.png"},
    "images/apple-touch-icon.png": {"path": "apple-touch-icon.png"},
    "images/browserconfig.xml": {"path": "browserconfig.xml"},
    "images/favicon-16x16.png": {"path": "favicon-16x16.png"},
    "images/favicon-32x32.png": {"path": "favicon-32x32.png"},
    "images/favicon.ico": {"path": "favicon.ico"},
    "images/jumpheights.png": {"path": "jumpheights.png"},
    "images/mstile-150x150.png": {"path": "mstile-150x150.png"},
    "images/safari-pinned-tab.svg": {"path": "safari-pinned-tab.svg"},
    "images/screenshot.png": {"path": "screenshot.png"},
    "images/site.webmanifest": {"path": "site.webmanifest"},
    "extra/CNAME": {"path": "CNAME"},
}

STATIC_PATHS = ["images", "extra/CNAME"]  # put page specific assets here
# set this to the location of your plugins checkout
PLUGIN_PATHS = ["../pelican-plugins"]
PLUGINS = ["assets"]
THEME = "./theme"  # All CSS/JS files go in directories under here
# I only want to generate Pages so I disable all "blog-like" pages see Note in:
# http://docs.getpelican.com/en/stable/settings.html?highlight=url_for#url-settings
TAGS_SAVE_AS = ""  # Don't generate Tags pages
TAG_SAVE_AS = ""
CATEGORY_SAVE_AS = ""  # Don't generate Category pages
AUTHOR_SAVE_AS = ""  # Don't generate Author pages
# Don't generate tag, category, or author output for some themes
DIRECT_TEMPLATES = ["index"]
# In the generated output directory move files to the root and adjust their URLs to match:
PAGE_URL = "{slug}.html"
PAGE_SAVE_AS = "{slug}.html"
INDEX_SAVE_AS = "/ignore/index.html"  # don't use normal'
