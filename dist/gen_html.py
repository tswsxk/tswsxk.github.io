# coding: utf-8
# create by tongshiwei on 2019/4/24

import io

from jinja2 import Template


def generate_html(source, target):
    with open("../head.html") as f:
        head = f.read()
    with open("../sidebar.html") as f:
        sidebar = f.read()
    with io.open(source, encoding="utf-8") as f:
        body = f.read()

    template = Template(body)

    with io.open("../%s" % target, mode="w", encoding="utf-8") as wf:
        print(template.render(head=head, sidebar=sidebar), file=wf)


if __name__ == '__main__':
    source_dir = "../src/"
    prefix_list = [
        "index",
        "engineering",
        "experience",
        "personal",
        "research",
    ]
    for prefix in prefix_list:
        generate_html(
            source_dir + prefix + ".html",
            prefix + ".html"
        )
