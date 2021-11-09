<template>
  <!-------------------------------
  this file is the root components
  这个文件是网站的根 component
  this file been used in /src/main.js
  这个文件会在 /src/main.js 中使用到
 --------------------------------->
  <div id="nav">
    <h1>DA Luo Li</h1>
    <div class="links">
      <router-link to="/">Home</router-link> |
      <!-- 
      <router-link to="/about">About</router-link>
      相比写死到 /about 可以传入对象，
      那么 以后即使 path 改变也不用 一个一个页面的改
    -->
      <router-link :to="{ name: 'Listen' }">Listen Now</router-link> |
      <router-link :to="{ name: 'Event' }">Events</router-link> |
      <router-link :to="{ name: 'Support' }">Support</router-link>
    </div>
  </div>

  <!----------------------------->
  <!-- 这里是 router 注入的页面 -->
  <!----------------------------->
  <!-- 
    <router-view /> 这个标签的意思是
    当 router 把 某一个页面 指引到这里时
    这个地方就是 注入页面的地方
   -->
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #dfd0b9;
}
@font-face {
  font-family: "SimpleScript";
  src: url("./assets/font/SimpleScript-3.ttf");
}
@font-face {
  font-family: "Moreland";
  src: url("./assets/font/Moreland-3.ttf");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

#nav {
  /* background-color: bisque; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
}

#nav a {
  /* background-color: #fff; */
  font-family: "Moreland";
  margin: 50px 30px;
  font-size: 1.2rem;
  letter-spacing: 0.5vw;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  /* border-radius: 15%; */
}

#nav a.router-link-exact-active {
  color: rgb(36, 22, 22);
}
#nav h1 {
  margin: 20px;
  /* color: red; */
  font-family: "SimpleScript";
  font-size: 2.3rem;
  display: inline-block;
}

@media screen and (min-width: 400px) and (max-width: 570px) {
  #nav h1 {
    margin: 20px;
    /* color: red; */
    font-family: "SimpleScript";
    font-size: 1.5rem;
    display: inline-block;
  }

  #nav a {
    /* background-color: #fff; */
    font-family: "Moreland";
    margin: 50px 25px;
    font-size: 1rem;
    letter-spacing: 0.3vw;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    /* border-radius: 15%; */
  }
}

@media screen and (min-width: 200px) and (max-width: 400px) {
  #nav h1 {
    margin: 20px;
    /* color: red; */
    font-family: "SimpleScript";
    font-size: 1.2rem;
    display: inline-block;
  }

  #nav a {
    /* background-color: #fff; */
    font-family: "Moreland";
    margin: 40px 10px;
    font-size: 0.3rem;
    letter-spacing: 0.1vw;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    /* border-radius: 15%; */
  }
}

@media screen and (min-width: 400px) and (max-width: 500px) {
  #nav h1 {
    margin: 10px;
    /* color: red; */
    font-family: "SimpleScript";
    font-size: 1.5rem;
    display: inline-block;
  }

  #nav a {
    /* background-color: #fff; */
    font-family: "Moreland";
    margin: 40px 10px;
    font-size: 1rem;
    letter-spacing: 0.1vw;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    /* border-radius: 15%; */
  }
}
</style>
