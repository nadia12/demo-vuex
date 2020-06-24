<template>
  <div class="col-5 m-3 justify-content-center uncompleted">
    <h4 class="m-3 text-center">Status Here</h4>
    <TodoCard v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import TodoCard from "@/components/TodoCard";
export default {
  props: ["todos"],
  components: { TodoCard }
};
</script>

<style scoped>
.uncompleted {
  background-color: #a6a6a6;
}
.completed {
  background-color: #3488a2;
}
</style>
