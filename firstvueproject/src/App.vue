<template> 
  <div>
    <h1>{{title}}</h1>
    <Modal/>
  </div>
</template>

<script>

import Modal from "./components/Modal.vue"

export default {
  name: 'App',
  components: {
    Modal,
},
  data() {
    return {
      title:"Hello Vue Cli App Component",
    }
  },

  methods: {
    clickHandler() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color:rgb(72, 126, 241)
}
</style>
