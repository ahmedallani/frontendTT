import lesson from "@/data/ls1";
export const state = () => ({
    lesson: lesson,
})

export const mutations = {
    changeLesson: (state,lesson) => {
        state.lesson = lesson
    }
}
