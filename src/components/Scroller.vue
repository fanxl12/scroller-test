<template>
  <div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="box" v-for="item in list">
            <div class="box_img" >
                <img :src="item.url">
                <div>{{item.name}}</div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'

  export default {
    data () {
      return {
        dataList: [
          {
            name: 'a',
            url: require('../assets/images/a.jpg')
          },
          {
            name: 'b',
            url: require('../assets/images/b.jpg')
          },
          {
            name: 'c',
            url: require('../assets/images/c.jpg')
          },
          {
            name: 'd',
            url: require('../assets/images/d.jpg')
          },
          {
            name: 'e',
            url: require('../assets/images/e.jpg')
          },
          {
            name: 'f',
            url: require('../assets/images/f.jpg')
          },
          {
            name: 'g',
            url: require('../assets/images/g.jpg')
          },
          {
            name: 'h',
            url: require('../assets/images/h.jpg')
          },
          {
            name: 'i',
            url: require('../assets/images/i.jpg')
          },
          {
            name: 'k',
            url: require('../assets/images/k.jpg')
          },
          {
            name: 'l',
            url: require('../assets/images/l.jpg')
          },
          {
            name: 'm',
            url: require('../assets/images/m.jpg')
          },
          {
            name: 'o',
            url: require('../assets/images/o.jpg')
          }
        ],
        list: [],
        loading: false
      }
    },
    created () {
      this.list = this.justData()
      this.$nextTick(function () {
        this.scroll = new BScroll(this.$refs.wrapper, {})
      })
    },
    methods: {
      justData () {
        var list = []
        var item0 = {
          name: 'a',
          url: require('../assets/images/a.jpg')
        }
        list[0] = item0
        var item1 = {
          name: 'b',
          url: require('../assets/images/b.jpg')
        }
        list[1] = item1
        var item2 = {
          name: 'c',
          url: require('../assets/images/c.jpg')
        }
        list[2] = item2
        var item3 = {
          name: 'd',
          url: require('../assets/images/d.jpg')
        }
        var item4 = {
          name: 'e',
          url: require('../assets/images/e.jpg')
        }
        var item5 = {
          name: 'f',
          url: require('../assets/images/f.jpg')
        }
        var item6 = {
          name: 'g',
          url: require('../assets/images/g.jpg')
        }
        var item7 = {
          name: 'h',
          url: require('../assets/images/h.jpg')
        }
        var item8 = {
          name: 'i',
          url: require('../assets/images/i.jpg')
        }
        var item9 = {
          name: 'j',
          url: require('../assets/images/j.jpg')
        }
        var item10 = {
          name: 'k',
          url: require('../assets/images/k.jpg')
        }
        var item11 = {
          name: 'l',
          url: require('../assets/images/l.jpg')
        }
        var item12 = {
          name: 'm',
          url: require('../assets/images/m.jpg')
        }
        var item13 = {
          name: 'n',
          url: require('../assets/images/n.jpg')
        }
        var item14 = {
          name: 'o',
          url: require('../assets/images/o.jpg')
        }
        list[2] = item2
        list[3] = item3
        list[4] = item4
        list[5] = item5
        list[6] = item6
        list[7] = item7
        list[8] = item8
        list[9] = item9
        list[10] = item10
        list[11] = item11
        list[12] = item12
        list[13] = item13
        list[14] = item14
        return list
      }
    }
  }
</script>
<style scoped>

.wrapper {
  position: relative;
  height: 600px;
}

.box{
  padding: 5px;
  float: left;
}
.box_img{
  padding: 5px;
  border: 1px solid #cccccc;
  box-shadow:0 0 5px #ccc;
  border-radius: 5px;
}
.box_img img{
  width: 150px;
  height: auto;
}
</style>