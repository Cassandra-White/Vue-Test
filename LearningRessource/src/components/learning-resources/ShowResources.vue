<template>
  <li>
    <base-card>
      <header>
        <h3>{{ resource.title }}</h3>
        <base-button mode="flat" @click="resourceRemove(resource.id)">Delete</base-button>
      </header>
        <p>{{ resource.description }}</p>
        <nav>
        <a :href="resource.link">{{ resource.title }}</a>
        </nav>
    </base-card>
  </li>
</template>

<script>
export default {
  components: {  },
  props: ["resource"],
  inject: ["resourceRemove"],
};
</script>

<style scoped>
li {
  margin: auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: salmon;
}

a:active,
a:hover {
  color: sandybrown;
}
</style>
