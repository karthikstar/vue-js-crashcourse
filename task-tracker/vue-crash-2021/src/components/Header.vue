<template>
    <header>
        <h1>{{title}}</h1>
        <Button v-show="homePage" 
        @btn-click="$emit('toggle-add-task')" 
        :text = "showAddTask ? 'Close' : 'Add Task'" 
        :color = "showAddTask ? 'red' : 'green' " />

    </header>
</template>

<script>
import Button from './Button'
export default {
    name: 'Header',
    // props: ['title'] - 1 way
    // alternate way define props as a object and give title a specific type
    props: {
        title: String,
        showAddTask: Boolean
    },

    components: {
        Button
    },
    computed: {
        // setting true false to home page and using v-show above, to restirct component to just home page route. and ensure it doesnt show up on the about page.
        homePage() {
            if(this.$route.path === '/'){
                return true
            } else {
                return false
            }
        }
    }

    // props: {
    //     title : {
    //         type : String,
    //         default: 'Hello World'
    //         // this will show if no value  passed in for title prop
    //     }
    // }
}
</script>

<style scoped>
/* scoped means everything thats here is  only gonna be for this component*/
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>
