import { style } from "@/data/help"
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