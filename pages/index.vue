<template>
  <div class="wrapper">
    <div class="title">
      <h1>Akinori's<br>Portfolio</h1>
    </div>
    <router-link to="/works" class="btn"> 作品を見る </router-link>

    <div class="top-contact">
      <!-- ↓↓ index.vue<contact>と以下の部分をコンポーネント化・置換 -->
      <div class="contact-logo">
        <a href="https://github.com/Akinori99"
          ><img src="~assets/images/github.png" alt="GitHub"
        /></a>
        <a href="https://twitter.com/Akinori_99?ref_src=twsrc%5Etfw"
          ><img src="~assets/images/twitter.png" alt="Twitter"
        /></a>
      </div>
      <!-- ↑↑ -->
    </div>
  </div>
</template>

<script>
export default {
  layout: 'index',
}
</script>

<style lang="scss"></style>
