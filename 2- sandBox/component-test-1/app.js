const app = Vue.createApp({
    data(){
        return{
            friends:[
                {
                    id:   "manuel"  ,
                    name:  'Manuel Lorenz' ,
                    phone: '01234 5678 991' ,
                    mail:  'manuel@localhost.com' ,

                },
                {
                    id:  "julie"   ,
                    name: "Julie Jones"  ,
                    phone: "09876 543 221" ,
                    mail:  "julie@localhost.com" ,
                },
            ]
        }
    }
});

app.component('friend-component', {
    template: `
        <li>
          <h2>{{friend.name}}</h2>
          <button @click="changeVisibility">Show Details</button>
          <ul v-if="visibleHide">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.mail}}</li>
          </ul>
        </li>
    `,
    
    data(){
       return {
        visibleHide: false,
        friend: {
            id:   "manuel"  ,
            name:  'Manuel Lorenz' ,
            phone: '01234 5678 991' ,
            mail:  'manuel@localhost.com' ,

        },
       } 
    },
    methods:{
        changeVisibility(){
            this.visibleHide = !this.visibleHide;
        }
    }
});

app.mount('#app');