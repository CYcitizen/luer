<template>
  <h1>This is the listen page</h1>
  <h1>播单</h1>
  <div v-for="content in contents" :key="content.id">
    <h4>{{ content.title }}</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contents: [
        { title: "文声识鹿儿", id: 1, detail: "听鹿儿给你聊聊文学作品" },
        { title: "《全民学英语》第一季", id: 2, detail: "和大萝莉一起学英语" },
        { title: "用心，对你说 ~", id: 3, detail: "大萝莉有悄悄话对你说..." },
        { title: "大萝莉读三毛", id: 4, detail: "三毛与荷西的爱情故事..." },
        { title: "英语场景词汇及句子", id: 5, detail: "大萝莉喊你来学英语..." },
      ],
    };
  },
};
</script>
