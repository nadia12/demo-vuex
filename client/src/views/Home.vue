<template>
  <div>
    <h1 class="mb-5">Simple Demo Counter</h1>
    <h3>{{ counter }}</h3>
    <button class="btn btn-warning" @click="tambah">Tambah Angka</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      counter: 3
    };
  },
  methods: {
    tambah() {
      this.counter++;
    }
  }
};
</script>
