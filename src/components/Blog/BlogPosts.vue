<template>
  <div class="blog-box">
    <span class="views">{{ views }}</span> viewers
    <h3 class="post-title">{{ title | reverse }}</h3>
    <span class="post-date">{{ date }}</span>
    <p class="post-content">{{ content | shorten(30) }}</p>
    <div class="row">
      <div class="col-sm-6">
        <span class="author">{{ author }}</span>
      </div>
      <div class="col-sm-6">
        <span class="post-category" text-right>{{ category | uppercase }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["views", "date", "title", "category", "author", "content"],
  name: "blog-post",
};
</script>
<style scoped>
.blog-box {
  margin-bottom: 20px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 0 10px #ddd;
}
.views {
  color: #fff;
  right: 5px;
  background-color: #f00;
  border-radius: 4px;
  padding: 1px 5px;
}
.post-date {
  display: block;
  padding: 0 0 5px;
  color: #888;
  font-size: 14px;
}
.post-content {
  line-height: 1.8;
  color: #666;
}
.author {
  background-color: #607d8b;
  padding: 6px 10px;
  border-radius: 4px;
  color: #fff;
}
.post-category {
  background-color: #607d8b;
  padding: 6px 10px;
  border-radius: 4px;
  color: #fff;
}
</style>
