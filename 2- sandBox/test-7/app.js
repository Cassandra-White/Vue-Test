const app = Vue.createApp({
  data(){
    return{
      goals: [],
      inputUser: "",
    }
  },
  methods:{
    addGoal(){
      if(this.inputUser !== '')
        this.goals.push(this.inputUser);
      this.inputUser = '';
    },
    removeGoal(index){
      console.log("test");
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');