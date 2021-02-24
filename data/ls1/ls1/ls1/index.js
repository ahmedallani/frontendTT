import { style } from "@/data/help"
export default {
    title: "Introduction",
    list: [
        {
            is: "h2",
            text: "Introduction",
            props: { class: "font-serif text-xl  m-4" },
        },
        {
            is: "p",
            text:
                "If you can, imagine a time before the invention of the Internet. Websites didn’t exist, and books, printed on paper and tightly bound, were your primary source of information. It took a considerable amount of effort—and reading—to track down the exact piece of information you were after.",
            props: { class: style.p },
        },
        {
            is: "p",
            text:
                "Today you can open a web browser, jump over to your search engine of choice, and search away. Any bit of imaginable information rests at your fingertips. And chances are someone somewhere has built a website with your exact search in mind.",
            props: { class: style.p },
        },
        {
            is: "p",
            text:
                "Within this book I’m going to show you how to build your own websites using the two most dominant computer languages—HTML and CSS.",
            props: { class: style.p },
        },
        {
            is: "p",
            text:
                "Before we begin our journey to learn how to build websites with HTML and CSS, it is important to understand the differences between the two languages, the syntax of each language, and some common terminology.",
            props: { class: style.p },
        },
    ]
}