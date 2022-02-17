<template>
  <li>
    <h2>{{ name }} {{isFavorite ? '(Favorite)' : ''}}</h2>
    <button @click="toogleFavorite">Change to Favorite</button>
    <button @click="hideShowButton">{{hideShow ? 'Hide' : 'Show'}} More</button>
    <ul v-if="hideShow">
      <li><strong>Phone : </strong>{{ phoneNumber }}</li>
      <li><strong>Email : </strong>{{ mailAddress }}</li>

      <button @click="deleteFriend">Delete This Friend</button>
    </ul>
  </li>
</template>

<script>
export default {
  props:{
    id:{
      type:String,
      required: true
    },
    name:{
      type: String,
      required: true,
    },
    phoneNumber:{
      type: String,
      required: true,
    },
    mailAddress:{
      type: String,
      required: true,
    },
    isFavorite:{
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emit:['toggle-favorite'],
  data() {
    return {
      hideShow: false,
      friend:
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          mail: "manuel@localhost.com",
        },
    };
  },
  methods: {
    hideShowButton() {
      this.hideShow = !this.hideShow;
    },
    toogleFavorite(){
      this.$emit('toggle-favorite', this.id);
    },

    deleteFriend(){
      this.$emit('delete-friend', this.id);
    },
  },
};
</script>
