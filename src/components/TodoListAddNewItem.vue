<script setup lang="ts">
import { useTodosStore } from "@/stores/todos";
import { onMounted, ref } from "vue";
import { TodoStatusEnum } from "@/types";
import type { ITodo } from "@/types";

const props = defineProps<{ todo: ITodo | null }>();
const emit = defineEmits<{ (e: "close-dialog"): void }>();

const todosStore = useTodosStore();
const newTodo = ref<ITodo>({
  id: todosStore.getTodos[todosStore.getTodos.length - 1].id + 1,
  label: "",
  status: TodoStatusEnum.TODO
});

onMounted(() => {
  if (props.todo !== null) {
    Object.assign(newTodo.value, props.todo);
  }
});

function onSave() {
  if (props.todo === null) {
    todosStore.addTodo(newTodo.value);
    return;
  }
  todosStore.editTodo(newTodo.value);
  emit("close-dialog");
}
</script>

<template>
  <q-dialog
    :model-value="true"
    @hide="
      () => {
        emit('close-dialog');
      }
    "
  >
    <q-card class="q-pa-md">
      <q-card-section>
        <q-input
          v-model.trim="newTodo.label"
          placeholder="Label"
          type="text"
        />
        <q-select
          v-model="newTodo.status"
          :options="todosStore.todoStatuses"
        />
      </q-card-section>
      <q-card-actions>
        <q-btn
          label="Save"
          icon="done"
          @click="onSave"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
