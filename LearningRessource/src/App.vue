<template>
<div>
    <the-header title="Souviens Toi"></the-header>
    <the-resource></the-resource>
</div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheResource from './components/learning-resources/TheResource.vue'
export default {
    components:{
        TheHeader,
        TheResource,
    },
}
</script>



<style >

* {
    box-sizing: border-box;
}

html {
    font-family: 'Arial', sans-serif;
}

body {
    margin: 0;
}
</style>

