const app = Vue.createApp({
  data() {
    return {
      inputData: "",
      hidden: false,
      show:true,
      bcColor: ''
    };
  },

  computed: {
    stylingUser() {
      return {
        user1: this.inputData === "user1",
        user2: this.inputData === "user2",
      };
    },
    
  },
  methods:{
    onclickButton(){
        this.show = !this.show;
        this.hidden= !this.hidden;
        return {
            visible: this.show,
           hidden: this.hidden 
        }
    }
  },
});

app.mount("#assignment");
