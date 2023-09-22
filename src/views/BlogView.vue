<template>
  <div class="our-blog">
    <h1>{{ pageName }}</h1>
    <h3>{{ pageDescription }}</h3>

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
export default {
  data: function () {
    return {
      pageName: "Blog",
      pageDescription: "This is blog page",
      showAlert: true,
    };
  },
  methods: {
    closeAlert() {
      this.showAlert = false; // تعيين الحالة لإخفاء التنبيه عند النقر على الزر
    },
  },
  name: "blog-view",
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
