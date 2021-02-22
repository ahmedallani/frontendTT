import lesson from "@/data/ls1";
export const state = () => ({
    lesson: lesson,
    show: false
})

export const mutations = {
    changeLesson: (state,lesson) => {
        state.lesson = lesson
    },
    changeShow: (state,show) => {
        debugger
        state.show = show
    }
}
