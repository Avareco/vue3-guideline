<script setup lang="ts">
import TodoList from "@/components/TodoList.vue";
import TodoListAddNewItem from "@/components/TodoListAddNewItem.vue";

import { ref } from "vue";

import { TodoStatusEnum } from "@/types";

const isOpen = ref(false);

function openDialog() {
  isOpen.value = true;
}

function closeDialog() {
  isOpen.value = false;
}
</script>

<template>
  <main class="window-height">
    <todo-list-add-new-item
      v-if="isOpen"
      :todo="null"
      @close-dialog="closeDialog"
    />
    <q-btn
      square
      color="primary"
      label="Add new item"
      icon="add"
      @click="openDialog"
    />
    <todo-list :status="TodoStatusEnum.TODO" />
    <todo-list :status="TodoStatusEnum.IN_PROGRESS" />
    <todo-list :status="TodoStatusEnum.DONE" />
  </main>
</template>
