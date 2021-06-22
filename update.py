# coding: utf-8
# create by tongshiwei on 2019/4/24
import re
from jinja2 import Template
import io
from pybtex.plugin import find_plugin
from pybtex.database import parse_string
from pybtex.database.input import bibtex
from copy import deepcopy

with open("head.html") as _f:
    head = _f.read()
with open("sidebar.html") as _f:
    sidebar = _f.read()


def bib2html(bibliography, exclude_fields=None):
    APA = find_plugin('pybtex.style.formatting', 'apa')()
    HTML = find_plugin('pybtex.backends', 'html')()

    exclude_fields = exclude_fields or []
    if exclude_fields:
        bibliography = parse_string(bibliography.to_string('bibtex'), 'bibtex')
        for entry in bibliography.entries.values():
            for ef in exclude_fields:
                if ef in entry.fields.__dict__['_dict']:
                    del entry.fields.__dict__['_dict'][ef]
    formattedBib = APA.format_bibliography(bibliography)
    return "<br>".join(entry.text.render(HTML) for entry in formattedBib)


def format_research():
    parser = bibtex.Parser()
    entries = parser.parse_file(r"src\_static\research.bib").entries

    with open("src/_static/research.template") as f:
        template = Template(f.read())

    research = ""
    for entry in entries.values():
        authors = list(entry.persons.values())[0]
        authors = ["%s %s" % ("".join(author.first_names), "".join(author.last_names)) for author in authors]
        authors = [author if author != "Shiwei Tong" else "<b>%s</b>" % author for author in authors]
        bib_entry = deepcopy(entry)
        for name in ["abbr", "abstract", "href", "address"]:
            if name in bib_entry.fields:
                del bib_entry.fields[name]
        bib = bib_entry.to_string('bibtex')[:-1].replace("\n", "<br>&nbsp&nbsp&nbsp&nbsp")
        bib = re.sub(r"\"(.*?)\"", r"{\1}", bib)
        research += template.render(author=", ".join(authors), bib=bib, **entry.fields)
    return research


def generate_html(source, target, **kwargs):
    with io.open(source, encoding="utf-8") as f:
        body = f.read()

    template = Template(body)

    with io.open("%s" % target, mode="w", encoding="utf-8") as wf:
        print(template.render(head=head, sidebar=sidebar, **kwargs), file=wf)
        print("update %s" % target)


if __name__ == '__main__':
    source_dir = "src/"
    prefix_list = [
        "index",
        "engineering",
        "experience",
        "personal",
        "research",
    ]
    for prefix in prefix_list:
        params = {}
        if prefix == "research":
            params = {"research": format_research()}
        generate_html(
            source_dir + prefix + ".html",
            prefix + ".html",
            **params
        )
    # print(format_research())
