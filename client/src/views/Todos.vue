<template>
  <div>
    <h2>Todo List</h2>
    <hr />
    <!-- TODO LIST -->
    <div class="row mt-5">
      <TaskColumn
        v-for="category in categories"
        :key="category"
        :category="category"
        :todos="todos"
      />
    </div>
  </div>
</template>

<script>
import TaskColumn from "@/components/TaskColumn";

export default {
  name: "Todos",
  components: { TaskColumn },
  data() {
    return {
      categories: ["uncompleted", "completed"],
      todos: [
        {
          userId: 1,
          id: 6,
          title: "qui ullam ratione quibusdam voluptatem quia omnis",
          completed: false
        },
        {
          userId: 1,
          id: 7,
          title: "illo expedita consequatur quia in",
          completed: false
        },
        {
          userId: 1,
          id: 9,
          title: "molestiae perspiciatis ipsa",
          completed: false
        },
        {
          userId: 1,
          id: 10,
          title: "illo est ratione doloremque quia maiores aut",
          completed: true
        }
      ]
    };
  }
};
</script>
