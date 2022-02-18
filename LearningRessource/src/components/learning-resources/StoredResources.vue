<template>
  <ul>
    <show-resources
      v-for="resource in resources"
      :key="resource.id"
      :resource="resource"
    ></show-resources>
  </ul>
</template>

<script>
import ShowResources from "./ShowResources.vue";
export default {
  components: {
    ShowResources,
  },
  inject: ["resources"],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  margin: auto;
  padding: 0;
  max-width: 40rem;
}
</style>
