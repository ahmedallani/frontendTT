import { style } from "@/data/help"
let ls1 = [
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
            "<a>",
        props: { highlight: "<a>" },
    },
]
let ls2 = [
    {
        is: "h3",
        text: "Tags",
        props: { class: "font-serif text-lg  m-4 text-green-800" },
    },
    {
        is: "p",
        text:
            "An opening tag marks the beginning of an element. It consists of a less-than sign followed by an element’s name, and then ends with a greater-than sign; for example, <div>.",
        props: { class: style.p },
    },
    {
        is: "p",
        text:
            "A closing tag marks the end of an element. It consists of a less-than sign followed by a forward slash and the element’s name, and then ends with a greater-than sign; for example, </div>.",
        props: { class: style.p },
    },
    {
        is: "p",
        text:
            "The content that falls between the opening and closing tags is the content of that element. An anchor link, for example, will have an opening tag of <a> and a closing tag of </a>. What falls between these two tags will be the content of the anchor link.",
        props: { class: style.p },
    },
    {
        is: "p",
        text:
            "So, anchor tags will look a bit like this:",
        props: { class: style.p },
    },
    {
        is: "Code",
        text:
            "<a>...</a>",
        props: { highlight: "<a>...</a>" },
    },
]
let ls3 = [
    {
        is: "h3",
        text: "Attributes",
        props: { class: "font-serif text-lg  m-4 text-green-800" },
    },
    {
        is: "p",
        text:
            "Attributes are properties used to provide additional information about an element. The most common attributes include the id attribute, which identifies an element; the class attribute, which classifies an element; the src attribute, which specifies a source for embeddable content; and the href attribute, which provides a hyperlink reference to a linked resource.",
        props: { class: style.p },
    },
    {
        is: "p",
        text:
            "Attributes are defined within the opening tag, after an element’s name. Generally attributes include a name and a value. The format for these attributes consists of the attribute name followed by an equals sign and then a quoted attribute value. For example, an <a> element including an href attribute would look like the following:",
        props: { class: style.p },
    },
    {
        is: "Code",
        text:
            '<a href="http://shayhowe.com/">Shay Howe</a>',
        props: { highlight: '<a href="http://shayhowe.com/">Shay Howe</a>' },
    }
]
let ls4 = [
    {
        is: "h3",
        text: "Demo",
        props: { class: "font-serif text-lg  m-4 text-green-800" },
    },
    {
        is: "Pen"
    }
]
export default {
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
        ...ls1, ...ls2, ...ls3, ...ls4
    ],
}