<template>
  <form @submit.prevent='addFriend'>
    <div>
      <label for="text">Name</label>
      <input type="text" name="name" v-model="inputName">
    </div>
     <div>
      <label for="text">Phone</label>
      <input type="tel" name="phone" v-model="inputPhone">
    </div>
     <div>
      <label for="text"  >Email</label>
      <input type="email" name="email" v-model="inputEmail">
    </div>
    <div>
      <button >
        Add new contact
      </button>
    </div>
  </form>
</template>

<script>
export default{
    data(){
        return{
            inputName :'',
            inputPhone:'',
            inputEmail:'',
        }
    },

    methods:{
      addFriend(){
        this.$emit('add-friend', this.inputName, this.inputPhone, this.inputEmail);  
      }
    }
}
</script>
