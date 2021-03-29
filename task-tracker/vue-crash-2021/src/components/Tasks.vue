<template>
    <div :key="task.id" v-for = "task in tasks">
        <!-- v for directive, meant for arrays -->
        <!-- <h3>{{task.text}}</h3> -->
        <Task @delete-task="$emit('delete-task',task.id)" 
        @toggle-reminder ="$emit('toggle-reminder',task.id)"
        :task = "task"/>
    </div>

</template>

<script>
import Task from './Task'

export default {
    name: 'Tasks',
    props: {
        tasks: Array,
    },

    // we are gonna take in a tasks prop which is a array
    components: {
        Task,
    },
    emits : ['delete-task','toggle-reminder']
}
</script>

<style scoped>

</style>