<template>
  <div>
    <button @click="isActive('active-menu')">Active Menu 1</button>
    <button @click="isActive('second-active-menu')">Active Menu 2</button>

    <keep-alive>
       <component :is="menuSelected"></component>
    </keep-alive>

    <!-- <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info> -->
  </div>
</template>

<script>
// import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
import ActiveMenu from './components/ActiveMenu.vue';
import SecondActiveMenu from './components/SecondActiveMenu.vue';


export default {
  components:{
    // TheHeader : TheHeader,
    // BadgeList: BadgeList,
    // UserInfo: UserInfo,
    ActiveMenu,
    SecondActiveMenu,

  },
  data() {
    return {

      menuSelected: 'active-menu',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods:{
    isActive(item){
      this.menuSelected = item;

    },
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>