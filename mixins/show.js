import { mapState, mapMutations } from "vuex"

export default {
    computed: {
        ...mapState(["show"])
    },
    methods: {
        ...mapMutations(["changeShow"])
    }
}