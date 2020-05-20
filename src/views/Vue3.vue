<template>
  <div class="todo-wrapper">
    <form @submit.prevent="onSubmit">
      <div class="todo-input">
        <input
          v-model="state.todo"
          @keypress.enter="$refs.$submitButton.click()"
          type="text"
          name="todo"
          id="todo"
          required
        >
        <button ref="$submitButton" type="submit">Submit</button>
      </div>
    </form>

    <div class="todo-list">
      <div
        v-for="(item, index) in state.todoList"
        :key="index"
        class="todo-item"
      >
        <div class="todo">{{ item.name }}</div>
        <div class="reg-date">
          {{ `${item.date.getFullYear()}-${item.date.getMonth() + 1}-${item.date.getDate()}` }}
        </div>
        <div>
          <button @click="removeTodoItem(index)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import Vuex, { useStore } from 'vuex'

export default {
  name: 'Vue3',

  setup() {
    const store = useStore()
    const state = reactive({
      todo: '',
      todoList: computed(() => store.state.todoList)
    })

    const pushTodoItem = item => store.commit('PUSH_TODO_ITEM', item)
    const removeTodoItem = () => store.commit('REMOVE_TODO_ITEM')
    const onSubmit = () => {
      pushTodoItem({
        name: state.todo,
        date: new Date
      })

      state.todo = ''
    }

    return {
      state,
      pushTodoItem,
      removeTodoItem,
      onSubmit
    }
  }
}
</script>
