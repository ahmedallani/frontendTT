import ls1 from "./ls1"
import ls2 from "./ls2"
import ls3 from "./ls3"
import { toUrl, shortStr, style } from "@/data/help"


let title = "Building Your First Web Page"
let description = `If you can, imagine a time before the invention of the Internet. Websites didn’t exist, and books, printed on paper and tightly bound, were your primary source of information. It took a considerable amount of effort—and reading—to track down the exact piece of information you were after.`
export default {
    nbr: 1,
    back: "/",
    title,
    description: shortStr(description),
    url: toUrl(title),
    list: [
        ls1,
        ls2,
        ls3
    ]
}