<template>
  <div id="app">
    <Navbar />
    <div class="container mt-5">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: { Navbar }
};
</script>
