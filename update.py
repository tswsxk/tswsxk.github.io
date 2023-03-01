# coding: utf-8
# create by tongshiwei on 2019/4/24
import re
from jinja2 import Template
import io
from pybtex.database.input import bibtex
from copy import deepcopy
from scripts.patent import parse_pib
import itertools as it

with open("head.html") as _f:
    head = _f.read()
with open("sidebar.html") as _f:
    sidebar = _f.read()


def sort_entries(entries, by=None):
    if by is None:
        return entries
    elif by == "default":
        return sorted(entries, key=lambda x: (-x[2], x[1]), reverse=True)
    elif by == "time":
        return sorted(entries, key=lambda x: x[1], reverse=True)
    else:
        raise ValueError()


def format_entries(entries):
    for entry in entries:
        authors = list(entry.persons.values())[0]
        authors = ["%s %s" % ("".join(author.first_names), "".join(author.last_names)) for author in authors]
        my_index = authors.index("Shiwei Tong")
        authors = [author if author != "Shiwei Tong" else "<b>%s</b>" % author for author in authors]
        bib_entry = deepcopy(entry)
        for name in ["abbr", "abstract", "href", "address"]:
            if name in bib_entry.fields:
                del bib_entry.fields[name]
        bib = bib_entry.to_string('bibtex')[:-1].replace("\n", "<br>&nbsp&nbsp&nbsp&nbsp")
        bib = re.sub(r"\"(.*?)\"", r"{\1}", bib)
        yield (
            dict(author=", ".join(authors), bib=bib, **entry.fields),
            bib_entry.fields["year"],
            my_index
        )


def format_research():
    parser = bibtex.Parser()
    first_entries = parser.parse_file(r"src/_static/first_research.bib").entries
    first_len = len(first_entries.values())
    entries = parser.parse_file(r"src/_static/research.bib").entries

    with open("src/_static/research.template") as f:
        template = Template(f.read())

    research = ""
    first_entries = format_entries(list(first_entries.values())[:first_len])
    entries = sort_entries(format_entries(list(entries.values())[first_len:]), by="default")
    for i, entry in enumerate(
            sort_entries(
                it.chain(first_entries, entries),
                # by="time"
            )
    ):
        entry = entry[0]
        research += template.render(no=i+1, **entry)
    return research


def format_patent():
    patents = parse_pib("src/_static/patent.pib")

    with open("src/_static/patent.template", encoding="utf-8") as f:
        template = Template(f.read())

    entries = []
    for entry in patents:
        authors = entry.pop("en_authors")
        authors = [author if author != "Shiwei Tong" else "<b>%s</b>" % author for author in authors]
        entry["en_authors"] = ", ".join(authors)
        entries.append(entry)
    patents = template.render(pattern=entries)
    return patents


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
            params = {"research": format_research(), "patent": format_patent()}
        generate_html(
            source_dir + prefix + ".html",
            prefix + ".html",
            **params
        )
    # print(format_research())
