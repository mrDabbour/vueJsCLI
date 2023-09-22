<template>
  <div class="our-blog">
    <h1>{{ pageName }}</h1>
    <h3>{{ pageDescription }}</h3>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pageName: "Blog",
      pageDescription: "This is blog page",
    };
  },
  name: "blog-view",
};
</script>
