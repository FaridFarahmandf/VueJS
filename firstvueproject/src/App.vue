<template> 
  <div>
    <h1>{{title}}</h1>
    <teleport to=".modals" v-if="showModal">
      <Modal theme="smds,ale" @close="toggleModal">
        <template v-slot:links>
          <a href="#">Sign in</a>
          <a href="#">More info</a>
        </template>
        <h2>{{header}}</h2>
        <p>{{paragraph}}</p>
      </Modal>
    </teleport>

    <teleport to=".modals" v-if="isToggle">
      <Modal @close="toggleHandler2">
        <template v-slot:links2>
          <a href="#">cat</a>
          <a href="#">dog</a>
        </template>
        <h2>another challenge with new Modal component</h2>
        <p>Maybe I can solve that</p>
      </Modal>
    </teleport>
    <button @click="toggleModal">show modal</button>
    <button @click="toggleHandler2" style="margin-left:10px">toggle modal 2</button>
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
      title:"this is the first vue web",
      header:"Let's make the web",
      text:"this is the modal in app",
      showModal: false,
      paragraph:"all the content comes here",
      isToggle:false,
    }
  },

  methods: {
    clickHandler() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleHandler2() {
      this.isToggle = !this.isToggle;
    }
  }
}

</script>

<style>
#app, .modals {
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
