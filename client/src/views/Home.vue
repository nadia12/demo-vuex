<template>
  <div>
    <h1 class="mb-5">Simple Demo Counter</h1>
    <h3>{{ counter }}</h3>
    <!-- <button class="btn btn-warning" @click="tambah">Tambah Angka</button> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "Home",
  data() {
    return{}
  },
  created(){
    console.log(this, "<<<< VUE INSTANCE")
  },
  computed: {
    ...mapState(['counter']),
    contohComputed(){
      return 'sesuatu'
    }
  }
    // counterFromStore(){
    //   return this.$store.state.counter
    // }
  ,
  watch: {
    counterFromStore(newVal, oldVal){
      console.log(newVal, oldVal, 'watch counterFromStore')
    }
  },
  methods: {
    tambah() {
      // this.counter++;
      this.$store.commit('SET_COUNTER')
    }
  }
};
</script>
