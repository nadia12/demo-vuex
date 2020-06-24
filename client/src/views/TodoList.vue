<template>
  <div>
    <h2>Todo List</h2>
    <hr />
    <!-- TODO LIST -->
    <div class="row mt-5">
      <TodoColumn
        v-for="category in categories"
        :key="category"
        :category="category"
        :todos="todosFromStore"
      />
    </div>
  </div>
</template>

<script>
import TodoColumn from "@/components/TodoColumn";

export default {
  name: "TodoList",
  components: { TodoColumn },
  data() {
    return {
      categories: ["uncompleted"],
    };
  },
  computed: {
    todosFromStore(){
      return this.$store.state.todos
    }
  },
  created(){
    this.$store.dispatch('getTodos')
  }
};
</script>
