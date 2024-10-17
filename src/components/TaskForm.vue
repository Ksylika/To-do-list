<template>
    <form @submit.prevent="handleSubmit">
        <input 
        type="text"
        placeholder="Новая задача"
        v-model="newTask"
        >
        <button type="submit">Добавить</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useTaskStore } from '@/stores/TaskStore';
import { uid } from 'uid';

const taskStore = useTaskStore()

const newTask = ref('')

const handleSubmit = () => {
    if (newTask.value.length > 0) {
        taskStore.addTask({
            title: newTask.value,
            isFavorite: false,
            isCompleted: false,
            id: uid(),
            
        })
        newTask.value = ''
    }
}
</script>

