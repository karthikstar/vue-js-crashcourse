<template>
    <header>
        <h1>{{title}}</h1>
        <Button text = "Add Task" color = "green" />
        <!-- <Button text = "Update Task" color = "blue" /> -->

    </header>
</template>

<script>
import Button from './Button'
export default {
    name: 'Header',
    // props: ['title'] - 1 way
    // alternate way define props as a object and give title a specific type
    props: {
        title: String
    },

    components: {
        Button
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
