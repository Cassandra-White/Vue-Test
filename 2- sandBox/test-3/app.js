const app = Vue.createApp({
  data() {
    return {
      data: "",
      dataDisplay: "",
    };
  },
  methods: {
    clickAlert() {
      alert("Vous venez de clicker");
    },

    setData(event) {
      this.data = event.target.value;
    },

    setDataDisplay(event) {
      this.dataDisplay = event.target.value;
    },
  },
});

app.mount("#assignment");
