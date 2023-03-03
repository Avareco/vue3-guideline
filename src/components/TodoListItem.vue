<script setup lang="ts">
import TodoListAddNewItem from "@/components/TodoListAddNewItem.vue";
import BaseButtonDelete from "@/components/BaseButtonDelete.vue";
import BaseButtonEdit from "@/components/BaseButtonEdit.vue";
import { useTodosStore } from "@/stores/todos";
import { ref } from "vue";
import type { TodoStatus } from "../types";

const props = defineProps<{
  todo: {
    id: number;
    label: string;
    status: TodoStatus;
  };
  index: number;
}>();

const todosStore = useTodosStore();

const currentStatus = ref<TodoStatus>(props.todo.status);
const isOpen = ref(false);

function openDialog() {
  isOpen.value = true;
}

function closeDialog() {
  isOpen.value = false;
}
</script>

<template>
  <todo-list-add-new-item
    v-if="isOpen"
    :todo="props.todo"
    @close-dialog="closeDialog"
  />
  <q-item>
    <q-item-section>
      {{ props.index + 1 + " " + props.todo.label }}
    </q-item-section>
    <q-item-section
      side
      top
    >
      <q-select
        v-model="currentStatus"
        :options="todosStore.todoStatuses"
        @update:model-value="
          todosStore.changeStatus(props.todo.id, currentStatus)
        "
      />
    </q-item-section>
    <q-item-section
      side
      top
    >
      <base-button-edit :on-click="openDialog" />

      <base-button-delete
        :on-click="
          () => {
            todosStore.removeTodo(props.todo.id);
          }
        "
      />
    </q-item-section>
  </q-item>
</template>
