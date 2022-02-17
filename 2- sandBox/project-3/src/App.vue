<template>
    <div>
        <user-data @submit-user-form='saveForm'/>
        <active-user v-for="user in users" :key="user.id" :userName='user.userName' :age='user.age'></active-user>
    </div>
</template>

<script lang="ts">
export default ({
    data() {
        return{
            users:[],   
        }
    },

    methods:{
        saveForm(userName, age){
            this.users.push({
                id: new Date().toISOString(),
                userName: userName,
                age: age,
            });
        },
    },
})
</script>
