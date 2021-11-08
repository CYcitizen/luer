<template>
  <!-------------------------------
  this file is the root components
  这个文件是网站的根 component
  this file been used in /src/main.js
  这个文件会在 /src/main.js 中使用到
 --------------------------------->
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <!-- 
      <router-link to="/about">About</router-link>
      相比写死到 /about 可以传入对象，
      那么 以后即使 path 改变也不用 一个一个页面的改
    -->
    <router-link :to="{ name: 'Listen' }">Listen Now</router-link> |

    <router-link :to="{ name: 'About' }">About</router-link>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  /* background-color: bisque; */
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 15%;
}

#nav a.router-link-exact-active {
  color: snow;
  background-color: #1975b3;
}
</style>
