<template>
  <div class="page-set about wrapper">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.about-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 0.5fr repeat(3, auto);
  gap: 20px 20px;
  grid-template-areas:
    'myimg        myimg        myname       myname       myname'
    'introduction introduction introduction introduction introduction'
    'skills       skills       skills       skills       skills'
    'contact      contact      contact      twitter      twitter';
  @include tb {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, auto);
    grid-template-areas:
      'myimg'
      'myname'
      'introduction'
      'skills'
      'contact'
      'twitter';
  }
  .myimg {
    grid-area: myimg;
    img {
      width: 250px;
      border-radius: 50%;
      border: 10px solid black;
    }
  }
  .myname {
    grid-area: myname;
    padding-top: 45px;
    margin-bottom: 20px;
    h1 {
      display: inline-block;
      font-family: 'Shippori Mincho B1', serif;
      font-size: 5.5rem;
    }
    p {
      font-size: 2rem;
    }
    @include tb {
      padding-top: 0;
      margin-bottom: 90px;
      height: 93px;
      h1 {
        font-size: 4rem;
      }
      p {
        font-size: 1.5rem;
      }
    }
  }
}

.introduction {
  grid-area: introduction;
  height: fit-content;
  p {
    text-align: left;
    padding: 10px 0;
    span {
      display: inline-block;
      border-bottom: 1px solid black;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
}
.skills {
  grid-area: skills;
  .skill {
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    padding: 15px 0;
    img {
      width: 60px;
      height: 60px;
    }
    .skill-name {
      font-weight: bold;
      margin-left: 15px;
      span {
        color: rgb(136, 116, 1);
      }
    }
    .skill-desc {
      margin-left: 70px;
    }
  }
}
.contact {
  grid-area: contact;
  height: fit-content;
  @include contactLogo;
  p {
    margin: 15px 0;
  }
}
.twitter {
  grid-area: twitter;
  padding-top: 3.5%;
  @include sp {
    padding-top: 0;
  }
}
</style>
