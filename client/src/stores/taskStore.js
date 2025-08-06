import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref([
    {
      id: 1,
      title: 'Sample Task',
      description: 'Example description',
      status: 'To Be Done'
    }
  ])

  function addTask(status) {
    const id = Date.now()
    tasks.value.push({
      id,
      title: 'New Task',
      description: '',
      status
    })
  }

  function updateTask(updatedTask) {
    const index = tasks.value.findIndex(t => t.id === updatedTask.id)
    if (index !== -1) {
      tasks.value[index] = { ...updatedTask }
    }
  }

  return {
    tasks,
    addTask,
    updateTask
  }
})
