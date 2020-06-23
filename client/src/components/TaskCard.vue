<template>
  <div>
    <b-card
      :title="`Task ID: ${todo.id}`"
      style="max-width: 20rem;"
      class="mb-3 mx-auto"
    >
      <b-card-text>
        {{ todo.title }}
        <div>
          <button class="btn btn-sm btn-info">Update</button>
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["todo"]
};
</script>

<style></style>
