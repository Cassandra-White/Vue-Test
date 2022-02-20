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
  <base-dialog v-if='isInvalid' title='Erreur de Formulaire' @click="confirmError">
    <template #default>
        <p>Vous ne pouvez pas faire cela</p>
        <p>Tous les champs doivent être rempli</p>
    </template>
    <template #actions>
        <base-button @click="confirmError">Ok</base-button>
    </template>
  </base-dialog>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseDialog from '../UI/BaseDialog.vue';
export default {
  components: { BaseDialog, BaseButton },
  data() {
    return {
      inputTitle: "",
      inputDescription: "",
      inputLink: "",
      isInvalid: false,
    };
  },
  inject: ["tabSelected","resources"],

  methods: {
    addNewResource() {

        console.log(this.tabSelected);

        if(this.inputTitle.trim() === ""|| this.inputDescription.trim() === "" || this.inputLink.trim() === '' ){
            this.isInvalid = true;
            return;
        }
      this.resources.unshift({
        id: this.inputTitle,
        title: this.inputTitle,
        description: this.inputDescription,
        link: this.link,
      });

      this.inputTitle = '';
      this.inputDescription= '';
      this.inputLink= ''; 
      console.log(this.tabSelected);
      this.tabSelected = 'stored-resources';
    },
    confirmError(){
        this.isInvalid = false;    
    }
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
