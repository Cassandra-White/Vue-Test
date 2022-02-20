<template>
<div>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode='storedHighligthButton'>Toutes les resources</base-button>

        <base-button @click="setSelectedTab('add-resource')" :mode='addHighligthButton'>Ajouter une resource</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</div> 
</template>

<script>
import StoredResources from './StoredResources.vue'
import AddResource from './AddResource.vue'
export default {
    components:{
        StoredResources,
        AddResource,
    },
    data(){
        return{
            selectedTab:'stored-resources',
            storedResources:[
                {
                    id: 'vuejs',
                    title: 'Vue.Js',
                    description:'Apprendre Vue.Js avec la documentation officiel',
                    link:'https://vuejs.org',
                },
                {
                    id: 'google',
                    title: 'Google',
                    description:'Trouvez n\'importe quelle informations !',
                    link:'https://google.com',
                },
            ], 
        }
    },
    provide() {
        return {
            resources: this.storedResources,
            tabSelected: this.selectedTab,
            resourceRemove: this.removeResource,
        }
    },
    computed:{
        storedHighligthButton(){
            return this.selectedTab === 'stored-resources' ? null : 'flat';
        },

        addHighligthButton(){
            return this.selectedTab === 'add-resource' ? null : 'flat';
        }
    },
    methods:{
        setSelectedTab(tab){
            this.selectedTab = tab;
        },

        removeResource(idResource){
            const elementRsource = this.storedResources.findIndex((element) => element.id === idResource);
            this.storedResources.splice(elementRsource, 1);
        },
    }

}
</script>