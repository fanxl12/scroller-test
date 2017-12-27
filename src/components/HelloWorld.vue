<template>
  <div id="main">
    <router-link  to="/water">Water</router-link>
    <div class="box" v-for="item in items">
        <div class="pic">
          <img :src="item.url">
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: [
        {
          url: 'http://image.highyundong.com/topic/1503304629502.jpeg'
        },
        {
          url: 'http://image.highyundong.com/luck-draw/body_bg.jpg'
        },
        {
          url: 'http://image.highyundong.com/exercise/parent_exercise_1502284332799.jpg'
        },
        {
          url: 'http://image.highyundong.com/topic/1503460942600.jpg'
        },
        {
          url: 'http://image.highyundong.com/exercise/child_exercise_1505570308183.jpg'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

* {
  margin: 0;
  padding: 0;
}

#main {
  -webkit-column-width: 180px;
  -moz-column-width: 180px;
  column-width: 180px;
}

.box {
  float: left;
}

.pic {
  border: 1px solid #dddddddd;
}

.pic img {
  width: 160px;
}

</style>
