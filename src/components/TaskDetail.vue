<template>
    <div class="task">
        <h3 class="task-title"
        :class="{lineThrough: task.isCompleted}"
        >{{ task.title }}</h3>
        
        <i class="material-icons" 
        @click="taskStore.completeTask(task.id)"
        :class="{done: task.isCompleted}"
        >done</i>
        <i class="material-icons" @click="taskStore.deleteTask(task.id)">delete</i>
        <i class="material-icons" 
        @click="taskStore.toggleFav(task.id)"
        :class="{active: task.isFavorite}"
        >favorite</i>
        
    </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/TaskStore'

defineProps([
'task'
])

const taskStore = useTaskStore()

</script>
