<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand>Demo</b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Simple</b-nav-item>
          <b-nav-item to="/todos">TodoList</b-nav-item>
           
        </b-navbar-nav>

        <TodoSearch />
        <button class="btn btn-warning ml-5" @click="tambahdiNavbar">Tambah Angka</button>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import TodoSearch from "./TodoSearch";
export default {
  components: { TodoSearch },
  data(){
    return{}
  },
  methods: {
    tambahdiNavbar(){
      this.$store.commit('SET_COUNTER')
    }
  },
};
</script>

<style></style>
