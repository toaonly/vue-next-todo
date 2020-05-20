<template>
  <div class="todo-wrapper">
    <form @submit.prevent="onSubmit">
      <div class="todo-input">
        <input
          v-model="todo"
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
        v-for="(item, index) in todoList"
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
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Vue2',

  data: () => ({
    todo: ''
  }),

  computed: {
    ...mapState([ 'todoList' ])
  },

  methods: {
    ...mapMutations({
      pushTodoItem: 'PUSH_TODO_ITEM',
      removeTodoItem: 'REMOVE_TODO_ITEM'
    }),

    onSubmit() {
      this.pushTodoItem({
        name: this.todo,
        date: new Date
      })

      this.todo = ''
    }
  }
}
</script>
