const app = Vue.createApp({
    data(){
        return{
            inputVal:'',
            tasks: [],
            show:true,
        }
    },
    computed:{
        buttonCaption(){
            return this.show ? 'Hide List' : 'Show List'
        }
    },
    methods:{
        addTask() {
            this.tasks.push(this.inputVal);
        },
        hideShowList(){
            this.show = !this.show;
        }
    }

});

app.mount('#assignment');