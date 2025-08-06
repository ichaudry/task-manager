<script setup>
import { ref } from 'vue'
import { useTaskStore } from './stores/taskStore'
import KanbanBoard from './components/KanbanBoard.vue'
import TaskModal from './components/TaskModal.vue'

const taskStore = useTaskStore()
const selectedTask = ref(null)

function openModal(task) {
  selectedTask.value = { ...task }
}

function updateTask(task) {
  taskStore.updateTask(task)
}
</script>

<template>
  <KanbanBoard @openTask="openModal" />

  <TaskModal
    v-if="selectedTask"
    :task="selectedTask"
    @close="selectedTask = null"
    @update="updateTask"
  />
</template>
