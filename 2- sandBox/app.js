
const app = Vue.createApp({
  data(){
    return{
      goalList: [],
      inputValue: ''
    }
  },
  methods: {
      addGoal(){
        if(this.inputValue !== ''){
          this.goalList.push(this.inputValue);
          this.inputValue = '';
        }
      }
  }
});


app.mount('#app');




// const buttonEl = document.querySelector('#button');
// const inputEl = document.querySelector('#goal');
// const ulEl = document.querySelector('#ul');

// function onClickHandler() {
//   const inputValue = inputEl.value;
//   const newListEl = document.createElement('li');

//   if(inputValue !== ''){
//     newListEl.textContent = inputValue;
//     ulEl.appendChild(newListEl);
//     inputEl.value = '';
//   }


// }


// buttonEl.addEventListener('click', onClickHandler);