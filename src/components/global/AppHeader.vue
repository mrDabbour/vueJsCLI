<template>
  <div class="header">
    <div class="logo">Mohammed Dabour Blog</div>
    <ul class="text-right">
      <router-link to="/" tag="li" exact><a>Home</a></router-link>

      <router-link to="/about" tag="li"><a>About</a></router-link>

      <router-link to="/help" tag="li"><a>Help</a></router-link>
      <router-link to="/blog" tag="li"><a>Blog</a></router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "AppHeader",
};
</script>
<style scoped lang="scss">
.header {
  background-color: #333;
  color: #fff;
  overflow: hidden;
  .logo {
    font-size: 24px;
    padding: 20px;
    float: left;
    width: 200px;
  }
  ul {
    float: left;
    width: calc(100% - 200px);
    margin: 0;
    li {
      padding: 20px;
      display: inline-block;
      font-size: 18px;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
</style>
