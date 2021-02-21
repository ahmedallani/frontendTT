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
    clock: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
}