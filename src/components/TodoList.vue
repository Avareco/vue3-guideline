<script setup lang="ts">
import TodoListItem from "@/components/TodoListItem.vue";
import { useTodosStore } from "@/stores/todos";
import { storeToRefs } from "pinia";
import type { TodoStatus } from "../types";

const props = defineProps<{
  status: TodoStatus;
}>();
const todosStore = useTodosStore();
const { todos } = storeToRefs(todosStore);
</script>

<template>
  <h6>{{ props.status }}</h6>
  <div>
    <q-list class="full-height">
      <template
        v-for="(todo, index) in todos"
        :key="todo.id"
      >
        <todo-list-item
          v-if="todos.find(() => todo.status === props.status)"
          :todo="todo"
          :index="index"
        />
      </template>
    </q-list>
  </div>
</template>

<style scoped>
.q-list {
  width: 50rem;
}
</style>
