import { toUrl, shortStr } from "@/data/help"
let title = "Building Your First Web Page"
let description = `If you can, imagine a time before the invention of the Internet. Websites didn’t exist, and books, printed on paper and tightly bound, were your primary source of information. It took a considerable amount of effort—and reading—to track down the exact piece of information you were after.`
export default {
    nbr: 1,
    title,
    description: shortStr(description),
    url: toUrl(title),
    list: []
}