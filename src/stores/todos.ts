import { defineStore } from "pinia";
import { TodoStatus, TodoStatusEnum } from "@/types";

import type { ITodo } from "@/types";

export const useTodosStore = defineStore("todos", {
  state: () => {
    return {
      todos: [
        {
          id: 1,
          label: "Find the Big Wumpa",
          status: TodoStatusEnum.TODO
        },
        {
          id: 2,
          label: "Try to fly",
          status: TodoStatusEnum.TODO
        }
      ] as ITodo[],
      todoStatuses: [
        TodoStatusEnum.TODO,
        TodoStatusEnum.IN_PROGRESS,
        TodoStatusEnum.DONE
      ]
    };
  },
  actions: {
    changeStatus(id: number, status: TodoStatus) {
      this.todos.find(todo => id === todo.id).status = status;
    },
    addTodo(newTodo: ITodo) {
      this.todos.push(newTodo);
    },
    editTodo(newTodo: ITodo) {
      const indexOfEditedItem = this.todos.findIndex(
        todo => newTodo.id === todo.id
      );
      this.todos[indexOfEditedItem] = newTodo;
    },
    removeTodo(id: number) {
      this.todos = this.todos.filter(todo => id !== todo.id);
    }
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
    getTodoStatuses(state) {
      return state.todoStatuses;
    }
  }
});
