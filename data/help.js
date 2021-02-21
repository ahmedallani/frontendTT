export function toUrl(str) {
    return str.replace(/\s+/g, "_").toLowerCase()
}

export function mapTitles(list) {
    return list.map(title => ({ title: title, url: toUrl(title) }))
}

export function shortStr(str) {
    if (str.length > 200) {
        return str.substr(0, 197) + "..."
    }
    return str
}

export let icons = {
    ["arrow-left"]: "M10 19l-7-7m0 0l7-7m-7 7h18",
    ["arrow-right"]: "M14 5l7 7m0 0l-7 7m7-7H3",
    clock: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    ["arrow-circle-left"]: "M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z",
    menu: "M4 6h16M4 12h16M4 18h16",
    x: "M6 18L18 6M6 6l12 12"

}
