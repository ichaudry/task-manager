<script setup>
import { useTaskStore } from './stores/taskStore'
import KanbanBoard from './components/KanbanBoard.vue'

const taskStore = useTaskStore()
</script>

<template>
  <KanbanBoard />
</template>
