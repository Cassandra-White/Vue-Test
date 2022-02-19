<template>
  <base-card>
    <form @submit.prevent="addNewResource">
      <div class="form-control">
        <label for="title">Titre :</label>
        <input type="text" id="title" name="title" v-model="inputTitle" />
      </div>
      <div class="form-control">
        <label for="description">Description :</label>
        <textarea
          id="description"
          name="description"
          type="text"
          rows="3"
          v-model="inputDescription"
        >
        </textarea>
      </div>
      <div class="form-control">
        <label for="link">Link :</label>
        <input id="link" name="link" type="url" v-model="inputLink" />
      </div>
      <div>
        <base-button>Ajouter la Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      inputTitle: "",
      inputDescription: "",
      inputLink: "",
    };
  },
  inject: ["tabSelected","resources"],

  methods: {
    addNewResource() {

    
      this.resources.unshift({
        id: this.inputTitle,
        title: this.inputTitle,
        description: this.inputDescription,
        link: this.link,
      });

      this.inputTitle = '';
      this.inputDescription= '';
      this.inputLink= ''; 

      this.tabSelected = 'stored-resources';
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
