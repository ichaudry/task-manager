<template>
  <div class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal">
      <input
        v-model="editableTask.title"
        class="modal-title"
        placeholder="Task Title"
      />
      <textarea
        v-model="editableTask.description"
        class="modal-description"
        placeholder="Task Description"
      />
      <select v-model="editableTask.status" class="modal-status">
        <option value="To Be Done">To Be Done</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button @click="save">Save</button>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'

const props = defineProps(['task'])
const emit = defineEmits(['close', 'update'])

const editableTask = reactive({ ...props.task })

// Sync when new task is passed
watch(() => props.task, task => {
  Object.assign(editableTask, task)
})

function save() {
  emit('update', { ...editableTask })
  emit('close')
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 350px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
}
.modal-title {
  width: 100%;
  font-size: 18px;
  margin-bottom: 10px;
}
.modal-description {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
}
.modal-status {
  width: 100%;
  margin-bottom: 10px;
}
</style>
