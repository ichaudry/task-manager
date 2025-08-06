<template>
  <div class="kanban-board">
    <KanbanColumn
      v-for="status in statuses"
      :key="status"
      :status="status"
    />
  </div>
</template>

<script setup>
import KanbanColumn from './KanbanColumn.vue'

const statuses = ['To Be Done', 'In Progress', 'Completed']
</script>

<style scoped>
.kanban-board {
  display: flex;
  gap: 1rem;
  padding: 1rem;
}
</style>
