export default {
    data() {
        return {
            wordsByMinute: 200
        }
    },
    created() {
        this.$emit("time", this.estimate())
    },
    methods: {
        estimate() {
            let time = this.list.reduce((acc, cv) => {
                if (cv.text) {
                    acc += cv.text.split(" ").length / this.wordsByMinute;
                }
                return acc;
            }, 0);

            return Math.ceil(time);
        },
    },
}