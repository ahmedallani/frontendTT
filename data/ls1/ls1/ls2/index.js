import { style } from "@/data/help"
export default {
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
}