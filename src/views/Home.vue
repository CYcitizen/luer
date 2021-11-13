<template>
  <div class="home">
    <!-- <img
      class="logo"
      alt="luoli logo"
      src="https://z3.ax1x.com/2021/11/10/IdVQJJ.png"
    /> -->

    <!-- <HelloWorld msg="Welcome 大萝莉's Website" /> -->

    <div id="section">
      <div id="HearNow">
        <!-- <h1>this is hearNow part</h1> -->
        <img src="../assets/1.png" />
      </div>
      <VoiceWave />
    </div>

    <div id="section">
      <div id="daluoli">
        <h1>* Who is Da luo li ?</h1>
      </div>
    </div>

    <div id="section">
      <div id="intro">
        <h1>* What is this Website for ?</h1>
      </div>
    </div>

    <div id="section">
      <div id="clay">
        <h1>* Who is Clay ?</h1>
      </div>
    </div>
    <div id="section">
      <div id="more">
        <h1>* You may like</h1>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// @ 符号代表着 /src
import HelloWorld from "@/components/HelloWorld.vue";
import VoiceWave from "@/components/VoiceWave.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    VoiceWave,
  },
};
</script>

<style>
@font-face {
  font-family: "Moreland";
  src: url("../assets/font/Moreland-3.ttf");
}
h1 {
  font-family: "Moreland";
  font-size: 2.5rem;
}
#section {
  display: flex;
  flex-direction: row;
  background-color: #dfd0b9;
  justify-content: center;
}
#HearNow {
  height: 500px;
  width: 500px;
  /* background-color: cadetblue; */
}
#HearNow img {
  height: 100%;
  margin-top: 10%;
}

#daluoli {
  height: 500px;
  width: 1000px;
  /* background-color: rgb(153, 152, 228); */
}
#daluoli h1 {
  margin-top: 20%;
  text-decoration: underline;
  /* letter-spacing: 8px; */
  font-weight: 100;
}
#intro {
  height: 500px;
  width: 1000px;
  /* background-color: rgb(109, 95, 160); */
}
#intro h1 {
  font-weight: 100;
  text-decoration: underline;
}
#clay {
  height: 500px;
  width: 1000px;
  /* background-color: rgb(152, 197, 81); */
}
#clay h1 {
  text-decoration: underline;
  font-weight: 100;
}
#more {
  height: 500px;
  width: 1000px;
  /* background-color: rgb(98, 196, 89); */
}
#more h1 {
  text-decoration: underline;
  font-weight: 100;
}
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
