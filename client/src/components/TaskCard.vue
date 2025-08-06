<template>
  <div class="task-card">
    <strong>{{ task.title }}</strong>
  </div>
</template>

<script setup>
defineProps(['task'])
</script>

<style scoped>
.task-card {
  background: white;
  border-radius: 4px;
  padding: 0.75rem;
  margin-top: 0.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  cursor: grab;
}
</style>
