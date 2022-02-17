<template>
  <div>
    <h1>Active Menu 2 :</h1>
    <input type="text" ref="goal" />
    <button @click="send">send</button>
    <teleport to="#app">
        <error-alerte v-if="inputIsInvalid">
        <h2>Input is Invalid</h2>
        <p>Input can't be empty</p>
        <button @click="confirmError">Okey !!</button>
        </error-alerte>
    </teleport>
  </div>
</template>

<script>
import ErrorAlerte from "./ErrorAlerte.vue";

export default {
  components: {
    ErrorAlerte,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },

  methods: {
    send() {
      const msgSend = this.$refs.goal.value;

      if (msgSend === "") this.inputIsInvalid = true;
      else this.inputIsInvalid = false;
    },
    confirmError(){
        this.inputIsInvalid = false
    },
  },
};
</script>
