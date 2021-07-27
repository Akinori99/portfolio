<template>
  <div class="page-set works wrapper">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.works-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 35px 25px;
  margin: 20px 0;
  @include tb {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
  }
  a:hover {
    color: currentColor;
  }
}
.item-img {
  display: flex;
  width: 450px;
  height: 250px;
  margin-bottom: 10px;
  @include sp {
    width: 330px;
    height: 180px;
  }
}
.work-desc {
  text-align: left;
  h3 {
    font-size: 1.5rem;
    border-left: 8px solid rgb(3, 34, 138);
    border-radius: 20px;
    padding-left: 10px;
  }
  p {
    padding: 15px 20px;
  }
}
</style>
