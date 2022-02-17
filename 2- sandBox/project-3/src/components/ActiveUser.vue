<template>
    <div>
        <h2>UserName : {{userName}}</h2>
        <h3>Age : {{age}}</h3>
    </div>
</template>

<script>
export default {
    props:{
        userName : String,
        age: Number,
    },

    data() {
        return {
            activeUser: "Components activeUser"
        }
    },
}
</script>