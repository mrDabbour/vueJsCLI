<template>
  <div class="our-help">
    <h1>{{ pageName }}</h1>
    <h3>{{ pageDescription }}</h3>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pageName: "Help",
      pageDescription: "This is help ",
    };
  },
  name: "help-view",
};
</script>
