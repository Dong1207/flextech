const app = Vue.createApp({
    data() {
        return {
            counter : 10,
            name: '',
            lastName: '',
            // fullname: ''
        };
    },
    watch: {
        counter(value) {
            if (value > 50) {
                const that = this
                setTimeout(function() {
                    that.counter = 0
                }, 2000)
            }
        }
        // name (value) {
        //     if (value === '') {
        //         this.fullname = ''
        //     } else {
        //         this.fullname = this.name + ' ' + this.lastName
        //     }
        // },
        // lastName (value) {
        //     if (value === '') {
        //         this.fullname = ''
        //     } else {
        //         this.fullname = this.name + ' ' + this.lastName
        //     }
        // }
    },
    computed: {
        fullname() {
            // console.log('Running again...')
            if(this.name === ''|| this.lastName === '') {
                return ''
            }
            return this.name + ' ' + this.lastName;
        }
    },
    methods: {
        // confirmInput() {
        //     this.confirmedName = this.name
        // },
        // outputFullname() {
        //     if(this.name === '') {
        //         return ''
        //     }
        //     return this.name + ' Nguyen Van';
        // },
        submitForm() {
            alert('Submitted!')
        },
        setName(event) {
            this.name = event.target.value
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
        },
        resetInput() {
            this.name = '';
            this.lastName = '';
        }
    }
})

app.mount('#events')