# coding: utf-8
# create by tongshiwei on 2019/4/24

from jinja2 import Template
import io
from pybtex.database.input import bibtex

with open("head.html") as _f:
    head = _f.read()
with open("sidebar.html") as _f:
    sidebar = _f.read()


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
        research += template.render(author=", ".join(authors), **entry.fields)

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
