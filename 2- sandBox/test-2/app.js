const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      nameDisplay: '',
      // fullname: '',
    }
  },
  watch : {
    // name(value){
    //   if(value !== ''){
    //     value = 'Alex';
    //     this.fullname = value +' '+ this.lastName
    //   } 
    // },
    // lastName(value){
    //   this.fullname = this.name +' '+ value
    // }

  },
  computed: {
    fullname() {
      if(this.name === '' || this.lastName === '')
        return ''
      return this.name + ' ' + this.lastName
    }
    
  },

  methods : {
    onClickRemove(num){
      this.counter -= num
    },
    onClickAdd(num){
      this.counter+= num
    },
    // setStateName(event){
    //   this.name = event.target.value
    // },
    // setStateNameDisplay(){
    //   this.nameDisplay = this.name;
    // },
    resetName(){
      this.name = '';
    },
    alertSubmit(){
      alert('Vous avez soumis un Nom');
    }
  }
});

app.mount("#events");