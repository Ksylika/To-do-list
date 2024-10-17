import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: []
  }),
  getters : {
    favs() {
      return this.tasks.filter(task => task.isFavorite)
    },
    comps() {
      return this.tasks.filter(task => task.isCompleted)
    },
    favCounter() {
      return this.tasks.reduce((p, c) => {
        return c.isFavorite ? p + 1 : p
      }, 0)
    },
    totalCount () {
      return this.tasks.length
    },
    compCounter() {
      return this.tasks.reduce((p, c) => {
        return c.isCompleted ? p + 1 : p
      }, 0)
      
    }
  },
  actions: {
    getTasks() {
      if(localStorage.getItem('tasks')) {
        this.tasks = JSON.parse(localStorage.getItem('tasks'))
      }
    },
    addTask(task) {
      this.tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id)
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    toggleFav(id) {
      const task = this.tasks.find(task => task.id === id)
      task.isFavorite = !task.isFavorite
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    completeTask(id) {
      const task = this.tasks.find(task => task.id === id)
      task.isCompleted = !task.isCompleted
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
  }
}
)