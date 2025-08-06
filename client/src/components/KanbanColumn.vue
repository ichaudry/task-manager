<script setup>
import { useTaskStore } from '../stores/taskStore'
import TaskCard from './TaskCard.vue'
import draggable from 'vuedraggable'
import { computed } from 'vue'

const props = defineProps(['status'])
const emit = defineEmits(['openTask'])

const taskStore = useTaskStore()

// Computed tasks for this column
const tasksInColumn = computed(() =>
  taskStore.tasks.filter(t => t.status === props.status)
)

function addTask() {
  taskStore.addTask(props.status)
}

function onReorder(newList) {
  // Rebuild the master task list with updated order
  const otherTasks = taskStore.tasks.filter(t => t.status !== props.status)
  taskStore.tasks = [...otherTasks, ...newList.map(task => ({ ...task, status: props.status }))]
}
</script>

<template>
  <div class="kanban-column">
    <h2>{{ status }}</h2>
    <button @click="addTask">+ Add Task</button>

    <draggable
      :modelValue="tasksInColumn"
      @update:modelValue="onReorder"
      group="tasks"
      item-key="id"
    >
      <template #item="{ element }">
        <TaskCard :task="element" @click="$emit('openTask', element)" />
      </template>
    </draggable>
  </div>
</template>

<style scoped>
.kanban-column {
  background: #f9f9f9;
  border-radius: 8px;
  padding: 16px;
  min-width: 300px;
  max-width: 300px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  flex-shrink: 0;
}

button {
  margin-bottom: 10px;
}

h2 {
  margin-bottom: 8px;
}
</style>