<template>

  <header>
    <v-app-bar
      app
      fixed
      dark
      hide-on-scroll
      height="55px"
    >
      <img
        class="mylogo"
        src="~assets/images/mylogo.svg"
        alt="mylogo"
      />
      <v-toolbar-title>
        <div class="h-title">Portfolio</div>
      </v-toolbar-title>
      <v-tabs>
        <v-tab
          v-for="(menuItem, index) in menuItems"
          :key="index"
          :to="menuItem.url"
        >
          {{ menuItem.name }}
        </v-tab>
      </v-tabs>
      <v-app-bar-nav-icon
        v-if="drawer === false"
        id="open"
        @click="drawer = !drawer"
      />
      <v-icon
        v-else-if="drawer === true"
        @click="drawer = false"
      >
        mdi-close
      </v-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      width="55%"
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
.mylogo {
  height: 55px;
  position: relative;
  top: 0;
  margin:0 10px;
}
.v-toolbar__title {
  min-width: fit-content;
  .h-title {
    font-family: 'Pinyon Script', cursive;
    font-size: 40px;
  }
}
.v-tabs-bar__content {
  z-index: 5;
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
  margin-top: 55px;
  position: fixed;
}
.v-list-item__title {
  & > div {
    margin: 15px 0;
    padding: 20px 0;
    font-size: 25px;
    font-weight: bold;
  }
}
.v-list-item {
  position: relative;
  &:first-child {
    margin-top: 20px;
  }
  &.v-item--active {
    color: aqua;
  }
}
#open {
  display: none;
  font-size: 3.5rem;
  margin-left: 10px;
  @include h {
    display: block;
  }
}
.close {
  display: inline-block;
  position: absolute;
  right: 0;
  height: fit-content;
  color: #ffffff;
  font-size: 3rem;
  p {
    display: inline;
  }
}
</style>
