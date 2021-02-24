import { toUrl, shortStr } from "@/data/help"
let style = {
    p: "text-sm text-gray-700 pl-5 m-2",
};
let title = "Building Your First Web Page"
let description = `If you can, imagine a time before the invention of the Internet. Websites didn’t exist, and books, printed on paper and tightly bound, were your primary source of information. It took a considerable amount of effort—and reading—to track down the exact piece of information you were after.`
export default {
    nbr: 1,
    back: "/",
    title,
    description: shortStr(description),
    url: toUrl(title),
    list: [
        {
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
        },
        {
            title: "What Are HTML & CSS?",
            list: [
                {
                    is: "h2",
                    text: "What Are HTML & CSS?",
                    props: { class: "font-serif text-xl  m-4" },
                },
                {
                    is: "p",
                    text:
                        "HTML, HyperText Markup Language, gives content structure and meaning by defining that content as, for example, headings, paragraphs, or images. CSS, or Cascading Style Sheets, is a presentation language created to style the appearance of content—using, for example, fonts or colors.",
                    props: { class: style.p },
                },
                {
                    is: "p",
                    text:
                        "The two languages—HTML and CSS—are independent of one another and should remain that way. CSS should not be written inside of an HTML document and vice versa. As a rule, HTML will always represent content, and CSS will always represent the appearance of that content.",
                    props: { class: style.p },
                },
                {
                    is: "p",
                    text:
                        "With this understanding of the difference between HTML and CSS, let’s dive into HTML in more detail.",
                    props: { class: style.p },
                }
            ],
        },
        {
            title: "Understanding Common HTML Terms",
            list: [
                {
                    is: "h2",
                    text: "Understanding Common HTML Terms",
                    props: { class: "font-serif text-xl  m-4" },
                },
                {
                    is: "p",
                    text:
                        "While getting started with HTML, you will likely encounter new—and often strange—terms. Over time you will become more and more familiar with all of them, but the three common HTML terms you should begin with are elements, tags, and attributes.",
                    props: { class: style.p },
                },
                {
                    is: "h3",
                    text: "Elements",
                    props: { class: "font-serif text-lg  m-4 text-green-800" },
                },
                {
                    is: "p",
                    text:
                        "Elements are designators that define the structure and content of objects within a page. Some of the more frequently used elements include multiple levels of headings (identified as <h1> through <h6> elements) and paragraphs (identified as the <p> element); the list goes on to include the <a>, <div>, <span>, <strong>, and <em> elements, and many more.",
                    props: { class: style.p },
                },
                {
                    is: "p",
                    text:
                        "Elements are identified by the use of less-than and greater-than angle brackets, < >, surrounding the element name. Thus, an element will look like the following:",
                    props: { class: style.p },
                },
                {
                    is: "Code",
                    text:
                        "Elements are identified by the use of less-than and greater-than angle brackets, < >, surrounding the element name. Thus, an element will look like the following:",
                    props: { class: style.p },
                },
            ],
        }
    ]
}