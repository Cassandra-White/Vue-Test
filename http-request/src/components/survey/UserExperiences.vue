<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadData">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && errorMessage">{{errorMessage}}</p>
      <p v-else-if="!isLoading && (results || results.lenght === 0)"> Nothing found in database</p>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  data(){
    return {
      results:[],
      isLoading: false,
      errorMessage: null
    }
  },
  components: {
    SurveyResult,
  },
  methods:{
    loadData(){
      this.errorMessage = null
      this.isLoading = true;
      fetch('https://http-request-ee3bd-default-rtdb.europe-west1.firebasedatabase.app/survey.json', {})
      .then((response) => {
        if(response.ok){
          return response.json();
        }
      })
      .then((response) => {
        const results = [];
        for (const id in response){
          results.push({
            id: id,
            name: response[id].name,
            rating: response[id].rating
          });
        }
        this.results = results;
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
        this.errorMessage = 'Error : Server don\'t response. Try later'
      });
    }
  },
  mounted() {
    this.loadData();
  },
};

</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>