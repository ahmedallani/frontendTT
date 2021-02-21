import { mapMutations } from "vuex"

export default {
    created() {
        this.changeLesson(this.lesson)
    },
    methods: {
        ...mapMutations(["changeLesson"])
    }
}