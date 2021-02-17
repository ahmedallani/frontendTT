let toUrl = (str) => str.replace(/\s+/g, "_").toLowerCase()
let mapTitles = (list) => list.map(title => ({ title: title, url: toUrl(title) }))
export const state = () => ({
    lesson: {
        nbr: 1,
        title: "HTML & CSS",
        list: mapTitles(["Building Your First Web Page", "Getting to Know HTML", "Getting to Know CSS"])
    }
})