import lesson from "@/data/ls1";
export const state = () => ({
    lesson: lesson
})

export const getters = {
    getUsername: state => {
        return state.username ? state.username : "state.username"
    }
}
