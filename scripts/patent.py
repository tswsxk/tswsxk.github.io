# coding: utf-8
# 2021/6/26 @ tongshiwei
from xpinyin import Pinyin
import re

p = re.compile(r"\{(.+?)\}", re.S)
STATUS = {
    "公开": "public",
    "授权公告": "licensing announcement",
    "授权": "licensing",
}
STATUS_PRIORITY = {
    "公开": 0,
    "授权公告": 1,
    "授权": 2,
}


def parse_pib(filepath):
    with open(filepath, encoding="utf-8") as f:
        c = f.read()
    items = []
    items_index = {}
    for item in p.findall(c):
        status = re.findall("【(.+?)】", item, re.S)[0]
        item_list = [line for line in item.split("\n") if line.strip()]
        _item = {"name": item_list[0], "status": status, "en_status": STATUS[status]}
        for e in item_list:
            if "发明名称" in e:
                _item["en_name"] = e.split("---")[-1].strip()
            elif ":" in e:
                key, value = e.split(":")
                _item[key.strip()] = value.strip()
        en_authors = []
        _item["发明人"] = [author.strip() for author in _item["发明人"].split(";") if author.strip()]
        for author in _item["发明人"]:
            if not author.strip():
                continue
            author = author.strip()
            if " " in author:
                names = author.split(" ")
                names = ["".join(Pinyin().get_pinyin(name).split("-")) for name in names]
                en_author = names[1].capitalize() + " " + names[0].capitalize()
                en_authors.append(en_author)
            else:
                pinyin_name = Pinyin().get_pinyin(author).split("-")
                en_author = ''.join(pinyin_name[1:]).capitalize() + ' ' + pinyin_name[0].capitalize()
                en_authors.append(en_author)
        _item["number"] = _item["申请号"]
        _item["en_authors"] = en_authors

        if _item["number"] not in items_index:
            items_index[_item["number"]] = _item
            items.append(_item)
        else:
            if STATUS_PRIORITY[items_index[_item["number"]]["status"]] >= STATUS_PRIORITY[_item["status"]]:
                continue
            else:
                items_index[_item["number"]].update(_item)

    items.sort(key=lambda x: x["申请日"], reverse=True)

    return items
