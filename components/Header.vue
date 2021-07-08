<template>
  <header>
    <v-app-bar app dark>
      <v-toolbar-title
        ><router-link to="/">
          <img
            class="mylogo"
            src="~assets/images/mylogo.svg"
            alt="mylogo"
          /> </router-link
        > <span>Portfolio</span></v-toolbar-title
      >
      <v-tabs>
        <v-tab
          v-for="(menuItem, index) in menuItems"
          :key="index"
          :to="menuItem.url"
        >
          {{ menuItem.name }}
        </v-tab>
      </v-tabs>
      <div class="open" @click="drawer = true">≡</div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      width="60%"
      dark
      right
    >
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            v-for="(menuItem, index) in menuItems"
            :key="index"
            :to="menuItem.url"
          >
            <v-list-item-title>
              <div>{{ menuItem.name }}</div>
            </v-list-item-title>
          </v-list-item>
          <div class="close" @click="drawer = false">
            <p>✕</p>
          </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
import constants from '~/assets/constants'
export default {
  data() {
    return {
      drawer: false,
      menuItems: constants.menuItems,
    }
  },
}
</script>

<style lang="scss">
// ナビゲーションタブ
.v-app-bar {
  max-width: 100vw;
}
.v-toolbar__title {
  overflow: visible;
  span {
    font-family: 'Pinyon Script', cursive;
    font-size: 45px;
  }
  .mylogo {
    height: 55px;
    position: relative;
    top: -4px;
    margin: 0 5px;
  }
}
.v-tabs-bar__content {
  z-index: 10;
  display: block flex;
  justify-content: flex-end;
  margin-right: 30px;
  .v-tab {
    @include h {
      display: none;
    }
    margin-left: 15px;
    font-size: 25px;
    font-weight: bold;
    letter-spacing: 0.1rem;
    &:hover {
      text-decoration: none;
      color: azure;
      opacity: 0.6;
    }
    &.v-tab--active {
      color: aqua;
    }
  }
}

// ナビゲーションドロワー
.v-navigation-drawer {
  margin-top: 56px;
  position: fixed;
  overflow-y: scroll;
}
.open {
  display: none;
  font-size: 3.5rem;
  margin-left: 10px;
  @include h {
    display: block;
  }
}
.v-list-item {
  &:first-child {
    margin-top: 20px;
  }
  &.v-list-item--active {
    color: aqua;
  }
}
.v-list-item__title {
  & > div {
    margin: 15px 0;
    padding: 20px 0;
    font-size: 25px;
    font-weight: bold;
  }
}
.close {
  display: inline-block;
  position: absolute;
  right: 0;
  height: fit-content;
  padding-bottom: 30px;
  color: #ffffff;
  font-size: 4rem;
  p {
    display: inline;
  }
}
</style>
