<template>
  <b-navbar-nav>
    <b-nav-form @submit.prevent="findTodo">
      <b-form-input
        size="sm"
        class="mr-sm-2"
        placeholder="Search"
        v-model="search"
      ></b-form-input>

      <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
    </b-nav-form>
  </b-navbar-nav>
</template>

<script>
export default {
  data(){
    return{
      search: ''
    }
  },
  methods:{
    findTodo(){
      this.$store.dispatch('filterTodo', this.search)
    }
  }
};
</script>

<style></style>
