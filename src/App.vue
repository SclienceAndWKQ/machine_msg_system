<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>

import {getAllProvince} from '@/api/address'

export default {
  name: 'App',
  data() {
    return {
      data: []
    }
  },
  methods: {
    click_getAllProvince() {
      getAllProvince.then(resp => {
        console.log(resp.data);
      }).catch(error => {
        console.log(error);
      });
    }
  }
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
