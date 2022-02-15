const app = Vue.createApp({
    data(){
        return {
            name: 'Alexandre',
            age: 29,
            imgSRC: 'http://www.consult-action.fr/assets/uploads/images2.jpg'

        }
    },
    methods: {
        randomNbr(){
            return Math.random();
        }
    }
});

app.mount('#assignment');