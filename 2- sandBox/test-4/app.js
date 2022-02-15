const app = Vue.createApp({
    data(){
        return {
            result : 0
        }
    },
    watch: {
        result(value){
            setInterval(() => {
                this.result = 0;
            }, 5000)
        }
    },
    computed:{
        showResult(){
            if(this.result < 37)
                return 'Not there yet'
            else if(this.result > 37){
                return 'Too much!'
            }
            else
                return this.result
        }
    },
    methods: {
        addFive(){
            this.result+= 5;
        },
        addOne(){
            this.result++;
        }
    }

});

app.mount("#assignment");