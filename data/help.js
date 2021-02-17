export function toUrl(str){
    return str.replace(/\s+/g, "_").toLowerCase()
}

export function mapTitles(list){
    return list.map(title => ({ title: title, url: toUrl(title) }))
}

export function shortStr(str){
    if(str.length>200){
        return str.substr(0,197) + "..."
    }
    return str
}