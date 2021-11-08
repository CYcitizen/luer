<template>
  <div class="home">
    <img class="logo" alt="luoli logo" src="../assets/logo.png" />

    <HelloWorld msg="Welcome 大萝莉's Website" />
  </div>
</template>

<script>
// @ is an alias to /src
// @ 符号代表着 /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style>
@media screen and (min-width: 960px) and (max-width: 1200px) {
  .logo {
    width: 50%;
  }
}

@media screen and (min-width: 550px) and (max-width: 960px) {
  .logo {
    width: 80%;
  }
}

@media screen and (min-width: 300px) and (max-width: 550px) {
  .logo {
    width: 80%;
  }
}

@media screen and (min-width: 0px) and (max-width: 300px) {
  .logo {
    width: 80%;
  }
}
</style>
