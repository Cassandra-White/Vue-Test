const App = Vue.createApp({
    data(){
        return {
            messagesTest : ['Moi', 'Toi', 'Nous'],
            message : "This message Works Fine !!!",
            linkVue: 'https://vuejs.org',
            randomMessageA : 'Je suis le message Aleatoire A',
            randomMessageB : 'Je suis le message Aleatoire B',
            messageVHTML : '<h3>Message HTML en H3</h3>',
        }
    },
    methods: {
        exempleFunctionRandom(){
             const randomNum = Math.random()
             console.log(randomNum);
            if( randomNum >= 0.5){
                return 'Nombre Positif'
            }
            else
                return 'Nombre Négatif'
        },

        exempleFunctionRandomWithThis(){
            const randomNum = Math.random();
            if(randomNum >= 0.5){
                return this.randomMessageA
            }
            else
                return this.randomMessageB
        }
    }
})

App.mount('#user-goal');