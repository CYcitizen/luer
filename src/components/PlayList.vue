<template>
  <!-- 
  This is the play list component 
  To to show the play list's title, describetion img  etc.
  -->

  <div id="play-list">
    <img id="title-img" src="../assets/logo.png" alt="" srcset="" />
    <div id="deciption">
      <h3>test title</h3>
    </div>
  </div>
</template>

<style>
#play-list {
  width: 900px;
  height: 200px;
  /* background-color: rgb(235, 240, 167); */
  margin: 20px auto;
  margin-bottom: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-bottom: 3px;
  background-image: linear-gradient(rgb(95, 64, 37), rgb(95, 64, 37));
  background-position: 0 100%; /*OR bottom left*/
  background-size: 0% 3px;
  background-repeat: no-repeat;
  transition: background-size 0.3s, background-position 0s 0.3s; /*change after the size immediately*/
}
#play-list:hover {
  /* transform: translateY(-5px); */
  /* translate: 0.3s; */
  background-position: 50% 100%; /*OR bottom right*/
  background-size: 100% 3px;
}
#play-list h3 {
  /* background-color: blue; */
}
#title-img {
  /* background-color: aquamarine; */
  width: 20%;
  height: 90%;
  margin: 0 4%;
}

@media screen and (min-width: 600px) and (max-width: 1000px) {
  #play-list {
    width: 600px;
    height: 130px;
    margin: 15px auto;
  }
}

@media screen and (min-width: 400px) and (max-width: 600px) {
  #play-list {
    width: 500px;
    height: 110px;
    margin: 15px auto;
  }
}
@media screen and (min-width: 300px) and (max-width: 400px) {
  #play-list {
    width: 360px;
    height: 85px;
    margin: 15px auto;
  }
}
</style>
