const app = Vue.createApp({
    data(){
        return {
            divA: false,
            divB: false,
            divC: false,
        }
    },
    computed:{
        activeDivA(){
            return{active: this.divA}
        }
    },
    methods: {
        selectedDiv(div){
            this.divA = false;
            this.divB = false;
            this.divC = false;
            if(div === 'A'){
                this.divA = true
            }
            if(div === 'B'){
                this.divB = true
            }
            if(div === 'C'){
                this.divC = true
            }
            console.log('DivA : ', this.divA);
            console.log('DivB : ', this.divB);
            console.log('DivC : ', this.divC);
        }
    }

});

app.mount('#styling');