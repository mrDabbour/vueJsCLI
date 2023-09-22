<template>
  <div class="about">
    <h1>{{ pageName }}</h1>
    <h2>{{ pageDescription }}</h2>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pageName: "About us",
      pageDescription: "This is about us page",
    };
  },
  name: "AboutView",
  components: {},
};
</script>
