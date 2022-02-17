<template>
    <div>
        <form @submit.prevent="submitUserForm">
            <div>
                <label for="userName">UserName : </label>
                <input type="text" v-model="userName">
            </div>
            <div>
                <label for="age">Age : </label>
                <input type="number" v-model="age">
            </div>
            <button>Add User</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName:"",
            age: 0
        }
    },

    methods:{
        submitUserForm(){
            this.$emit('submit-user-form', this.userName, this.age);
        }
    }
}
</script>