<template>
  <main>
    
    <header>
      <h1> To Do list</h1>
      
    </header>
      <div class="new-task-form">
        <TaskForm />
      </div>
    <nav class="filter">
      <button @click="filter= 'all'">Все задачи</button>
      <button @click="filter= 'favs'">Избранные</button>
      <button @click="filter= 'comp'">Завершенные</button>
    </nav>
    
    
    <div class="task-list" v-if="filter === 'all'">
      <p>Количество задач {{ taskStore.totalCount }} для выполнения</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetail :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>Количество избранных задач {{ taskStore.favCounter }} для выполнения</p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetail :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'comp'">
      <p>Количество избранных задач {{ taskStore.compCounter }} для выполнения</p>
      <div v-for="task in taskStore.comps" :key="task.id">
        <TaskDetail :task="task" />
      </div>
      
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import TaskDetail from './components/TaskDetail.vue';
import { useTaskStore } from './stores/TaskStore';
import TaskForm from './components/TaskForm.vue';


const taskStore = useTaskStore();

taskStore.getTasks()

const filter = ref('all');

</script>
