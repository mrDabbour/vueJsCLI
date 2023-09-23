<template>
  <div class="our-blog">
    <h1>{{ pageName }}</h1>
    <h3>{{ pageDescription }}</h3>

    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="posts-area">
            <BlogPosts
              v-for="post in posts"
              v-bind:key="post.id"
              :views="post.views"
              :content="post.content"
              :title="post.title"
              :category="post.category"
              :date="post.date"
              :author="post.author"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="sidebar">
            <BlogSidebar></BlogSidebar>
          </div>
        </div>
      </div>
    </div>
    <!-- alert code  -->
    <div class="container">
      <div
        v-if="showAlert"
        class="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        <strong>تعلم Vue.js:</strong> يمكنك إضافة رسالة هنا.
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          @click="closeAlert"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPosts from "@/components/Blog/BlogPosts.vue";
import BlogSidebar from "@/components/Blog/BlogSidebar.vue";
import JsonPosts from "@/components/json/posts.json";
export default {
  data: function () {
    return {
      pageName: "Blog",
      pageDescription: "This is blog page",
      showAlert: true,
      posts: JsonPosts,
    };
  },
  methods: {
    closeAlert() {
      this.showAlert = false; // تعيين الحالة لإخفاء التنبيه عند النقر على الزر
    },
  },
  name: "blog-view",
  components: {
    BlogPosts,
    BlogSidebar,
  },
};
</script>

<style scoped>
.alert {
  background-color: #d4edda;
  color: #155724;
  border-color: #c3e6cb;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
}

.alert button.close {
  font-size: 20px;
}

.alert button.close:hover {
  color: #155724;
}
</style>
