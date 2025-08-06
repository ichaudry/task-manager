<template>
  <div class="kanban-board">
    <KanbanColumn
      v-for="status in statuses"
      :key="status"
      :status="status"
      @openTask="$emit('openTask', $event)"
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
  gap: 24px;
  padding: 24px;
  align-items: flex-start;
  overflow-x: auto;
}
</style>
