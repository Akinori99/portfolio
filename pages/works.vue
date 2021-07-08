<template>
  <div class="wrapper">
    <div class="title">
      <h1>Works</h1>
      <p>-作品-</p>
      <div class="scroll"><span>Scroll</span></div>
    </div>
    <div class="content">
      <div class="works-grid">
        <!-- ポートフォリオ -->
        <div class="item">
          <a href="#"
            ><img
              class="item-img"
              src="~assets/images/portfolio.jpg"
              alt="ポートフォリオ"
          /></a>
          <h2>ポートフォリオ</h2>
          <div class="work-desc">
            <p>
              Nuxt.jsによるSPA対応、Vuetifyを用いたヘッダー・フッター作成、GridLayoutとFlexboxを使ったデスクトップファーストのレスポンシブ対応。今までの学習で培った知識を詰め込んだポートフォリオサイトです。
            </p>
            <h3>開発言語</h3>
            <p>HTML、SCSS、JavaScript（Vue.js、Nuxt.js）</p>
            <h3>サイトURL</h3>
            <p>※このサイト</p>
            <h3>コード</h3>
            <p><a href="https://github.com/Akinori99/portfolio"
                >https://github.com/Akinori99/portfolio</a
              ></p>
            <h3>作成日</h3>
            <p>2021/07/03</p>
          </div>
        </div>
        <!-- タイマー機能付きToDoリスト -->
        <div class="item">
          <a href="https://akinori99.github.io/vuetodo_timer/"
            ><img
              class="item-img"
              src="~assets/images/todotimer.jpg"
              alt="タイマー機能付きToDoリスト"
          /></a>
          <h2>タイマー機能付き<br class="br-tb" />ToDoリスト</h2>
          <div class="work-desc">
            <p>
              <a href="https://cr-vue.mio3io.com/tutorials/todo.html"
                >『基礎から学ぶVue.js』のチュートリアル（ToDoリストを作りながら学習しよう！）</a
              >
              を元に作成したToDoリストに、自主的に作成したタイマー機能を付けたものです。
            </p>
            <h3>開発言語</h3>
            <p>HTML、SCSS、JavaScript（Vue.js）</p>
            <h3>サイトURL</h3>
            <p>
              <a href="https://akinori99.github.io/vuetodo_timer/"
                >https://akinori99.github.io/vuetodo_timer/</a
              >
            </p>
            <h3>コード</h3>
            <p>
              <a href="https://github.com/Akinori99/vuetodo_timer"
                >https://github.com/Akinori99/vuetodo_timer</a
              >
            </p>
            <h3>作成日</h3>
            <p>2021/07/01<br />【更新：2021/07/02】</p>
          </div>
        </div>
        <!-- 禁煙チャレンジ -->
        <div class="item">
          <a href="https://akinori99.github.io/no_smoking/"
            ><img
              class="item-img"
              src="~assets/images/nosmoking.jpg"
              alt="禁煙チャレンジ"
          /></a>
          <h2>禁煙チャレンジ</h2>
          <div class="work-desc">
            <p>
              指定範囲内でランダムな数値を表示する、禁煙手助けアプリです。ページ下部には禁煙のコツを6秒ごとに表示する、揺れるメッセージチャットを設けています。
            </p>
            <h3>開発言語</h3>
            <p>HTML、SCSS、JavaScript（Vue.js）</p>
            <h3>サイトURL</h3>
            <p>
              <a href="https://akinori99.github.io/no_smoking/"
                >https://akinori99.github.io/no_smoking/</a
              >
            </p>
            <h3>コード</h3>
            <p>
              <a href="https://github.com/Akinori99/no_smoking"
                >https://github.com/Akinori99/no_smoking</a
              >
            </p>
            <h3>作成日</h3>
            <p>2021/06/26<br />【更新：2021/06/29】</p>
          </div>
        </div>
        <!-- 作品名 -->
        <div class="item">
          <img class="item-img" src="~assets/images/noimg.jpg" alt="No Image" />
          <h2>Coming Soon...</h2>
          <div class="work-desc">
            <p>新たに作品が完成したら、こちらに追加していく予定です。</p>
            <h3>開発言語</h3>
            <p>Coming Soon...</p>
            <h3>サイトURL</h3>
            <p>Coming Soon...</p>
            <h3>コード</h3>
            <p>Coming Soon...</p>
            <h3>作成日</h3>
            <p>Coming Soon...</p>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/about" class="btn"> 自己紹介へ </router-link>
  </div>
</template>

<script>
export default {
  layout: 'works',
}
</script>

<style lang="scss"></style>
