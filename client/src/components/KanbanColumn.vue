<template>
  <div class="kanban-column">
    <h2>{{ status }}</h2>
    <button @click="addTask">+ Add Task</button>

    <draggable
      v-model="filteredTasks"
      group="tasks"
      @end="onDragEnd"
      item-key="id"
    >
      <template #item="{ element }">
        <TaskCard :task="element" />
      </template>
    </draggable>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useTaskStore } from '../stores/taskStore'
import TaskCard from './TaskCard.vue'
import draggable from 'vuedraggable'

const props = defineProps(['status'])
const taskStore = useTaskStore()

const filteredTasks = computed({
  get: () => taskStore.tasks.filter(t => t.status === props.status),
  set: (newList) => {
    newList.forEach(task => {
      task.status = props.status
      taskStore.updateTask(task)
    })
  }
})

function addTask() {
  taskStore.addTask(props.status)
}

function onDragEnd() {
  // optional hook for analytics/logging
}
</script>

<style scoped>
.kanban-column {
  background: #f4f4f4;
  border-radius: 8px;
  padding: 1rem;
  width: 300px;
}
</style>
