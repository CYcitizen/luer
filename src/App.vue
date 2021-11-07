<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1 class="test">大萝莉的网站</h1>

  </div>
</template>



<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'app',
  data(){
    return{

    }
  }

  // components: {
  //   HelloWorld
  // }

}
</script>






<style>
*{
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* text-align: center; */
  /* color: #2c3e50;
  margin-top: 60px; */

}
.test{
  color: red;
  font-size: 1.5rem;
}
</style>
