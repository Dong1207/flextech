const app = Vue.createApp({
    data () {
        return {
            courseGoalA: 'Result 1: U love her',
            courseGoalB: 'Result 2: U do not love her',
            vueLink: 'https://toidicodedao.com/'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA
            } else {
                return this.courseGoalB
            }
        }
    }
});

app.mount('#user-goal');