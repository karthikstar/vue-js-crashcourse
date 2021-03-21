const app = Vue.createApp({
    // we can use template: '<h1>Hello {{firstName}} </h1>', OR put this directly in the html file
    // similar to text interpolation in react with single curly braces, but here its double curly braces
    data(){
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },

    methods: {
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()
            // console.log(results)
            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.email = results[0].email,
            this.gender = results[0].gender,
            this.picture = results[0].picture.large
        }
    }
})

app.mount('#app')