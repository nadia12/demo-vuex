<template>
  <div class="col-5 m-3 justify-content-center uncompleted">
    <h4 class="m-3 text-center">Status Here</h4>
    <TaskCard v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import TaskCard from "@/components/TaskCard";
export default {
  props: ["todos"],
  components: { TaskCard }
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
