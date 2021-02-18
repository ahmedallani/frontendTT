
export default {
    created: function () {
        if (process.client) {
            window.addEventListener('resize', this.reportWindowSize);
        }
    },
    data() {
        return {
            test: true
        }
    },
    methods: {
        reportWindowSize(evt) {
            console.log(evt.target.innerWidth)
        }
    }
}