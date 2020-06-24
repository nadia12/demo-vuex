<template>
  <div>
    <h2>Todo Add</h2>
    <hr />
    <b-form class="mb-5" @submit.prevent="addTodo">
      <b-form-group id="input-group-1" label="Title" label-for="input-1">
        <b-form-input
          id="input-1"
          type="text"
          v-model="title"
          required
          placeholder="Enter title"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
