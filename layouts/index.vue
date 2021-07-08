<template>
  <div class="page-set index wrapper">
    <Header />
    <nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.top-contact {
  display: none;
  @include contactLogo;
  @include tb {
    display: block;
  }
}
</style>
