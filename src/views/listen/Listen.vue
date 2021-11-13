<template>
  <h1 class="subtitle">*** PlayList ***</h1>
  <PlayList />
  <PlayList />
  <PlayList />
  <PlayList />
  <PlayList />
  <PlayList />
  <PlayList />
  <PlayList />

  <div v-for="content in contents" :key="content.id">
    <router-link :to="{ name: 'VoiceDetails', params: { id: content.id } }">
      <h4>{{ content.title }}</h4>
    </router-link>
  </div>
</template>

<script>
import PlayList from "@/components/PlayList.vue";

export default {
  data() {
    return {
      contents: [
        { title: "文声识鹿儿", id: 1, detail: "听鹿儿给你聊聊文学作品" },
        { title: "《全民学英语》第一季", id: 2, detail: "和大萝莉一起学英语" },
        { title: "用心，对你说 ~", id: 3, detail: "大萝莉有悄悄话对你说..." },
        { title: "大萝莉读三毛", id: 4, detail: "三毛与荷西的爱情故事..." },
        { title: "英语场景词汇及句子", id: 5, detail: "大萝莉你来学英语..." },
      ],
    };
  },
  // =====
  components: {
    PlayList,
  },
};
</script>

<style>
.subtitle {
  font-weight: 100;
  margin: 3% 0;
  /* text-decoration: underline; */
}
</style>
