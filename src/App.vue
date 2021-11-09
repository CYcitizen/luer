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
body::-webkit-scrollbar {
  display: none;
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
  /* background-color: rgb(255, 143, 7); */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
}

#nav a {
  font-family: "Moreland";
  margin: 0.1vw 2vw;
  font-size: 1.5em;
  letter-spacing: 0.5vw;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  display: inline-block;
  padding-bottom: 2px;
  background-image: linear-gradient(#000, #000);
  background-position: 0 100%; /*OR bottom left*/
  background-size: 0% 2px;
  background-repeat: no-repeat;
  transition: background-size 0.3s, background-position 0s 0.3s; /*change after the size immediately*/
}

#nav a:hover {
  background-position: 100% 100%; /*OR bottom right*/
  background-size: 100% 2px;
}
#nav a.router-link-exact-active {
  color: rgb(36, 22, 22);
}
#nav h1 {
  /* color: red; */
  /* background-color: #fff; */
  font-family: "SimpleScript";
  font-size: 2.5rem;
  display: inline-block;
  margin: 1vw;
}

@media screen and (min-width: 550px) and (max-width: 600px) {
  #nav a {
    font-size: 1.2rem;
  }
  #nav h1 {
    font-size: 1.8rem;
  }
}
@media screen and (min-width: 450px) and (max-width: 550px) {
  #nav a {
    font-size: 1rem;
  }
  #nav h1 {
    font-size: 1.6rem;
  }
}
@media screen and (min-width: 350px) and (max-width: 450px) {
  #nav a {
    font-size: 0.8rem;
  }
  #nav h1 {
    font-size: 1.4rem;
  }
}
@media screen and (min-width: 250px) and (max-width: 350px) {
  #nav a {
    font-size: 0.6rem;
  }
  #nav h1 {
    font-size: 1.2rem;
  }
}
@media screen and (min-width: 150px) and (max-width: 250px) {
  #nav a {
    font-size: 0.4rem;
  }
  #nav h1 {
    font-size: 1rem;
  }
}
</style>
