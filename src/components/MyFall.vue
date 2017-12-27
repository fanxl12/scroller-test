<template>
  <div>
    <div class="nav">我是导航部分</div>
    <div id="container" class="wrapper" ref="wrapper">
      <div class="content">
        <!--容器-->
        <div class="box" v-for="item in list">
            <!--承载图片容器-->
            <div class="box_img" >
                <!--边框-->
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
    // mounted () {
    //   console.log('生命周期mounted')
    //   // var that = this
    //   // setTimeout(function () {
    //   //   that.img_location('container', 'box')
    //   // }, 100)
    //   this.createList()
    //   // var that = this
    //   // window.onscroll = function () {
    //   //   if (that.check_csroll('container', 'box') && !that.loading) {
    //   //     console.log('获取数据')
    //   //     that.loading = true
    //   //     setTimeout(function () {
    //   //       that.loading = false
    //   //       console.log('数据获取成功')
    //   //       var dataList = that.justData()
    //   //       that.list = that.list.concat(dataList)
    //   //       that.$nextTick(function () {
    //   //         that.img_location('container', 'box')
    //   //       })
    //   //     }, 4000)
    //   //   }
    //   // }
    // },
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
      },
      createList () {
        var list = this.justData()
        var that = this
        setTimeout(function () {
          that.list = list
          that.$nextTick(function () {
            setTimeout(function () {
              that.img_location('container', 'box')
              that.scroll = new BScroll(that.$refs.wrapper, {})
            }, 6)
          })
        }, 1000)
      },
      img_location (parent, content) {
        var dparent = document.getElementById(parent)
        var dcontent = this.get_child_element(dparent, content)
        console.log('数量:' + dcontent.length)
        var decWidth = this.get_width(dparent, dcontent)
        this.min_image_locatin(decWidth, dcontent)
      },
      get_child_element (parent, content) {
        var contentArray = []
        var allContent = parent.getElementsByTagName('*')
        for (var i = 0; i < allContent.length; i++) {
          if (allContent[i].className === content) {
            contentArray.push(allContent[i])
          }
        }
        return contentArray
      },
      get_width (dparent, dcontent) {
        var imgWidth = dcontent[0].offsetWidth
        var winWidth = document.documentElement.clientWidth
        console.log('图片宽度:' + imgWidth + '屏幕宽度:' + winWidth)
        var numWidth = Math.floor(winWidth / imgWidth)
        dparent.style.cssText = 'width:' + imgWidth * numWidth + 'px; margin:0 auto'
        return numWidth
      },
      min_image_locatin (decWidth, dcontent) {
        var boxHeightArray = []
        for (var i = 0; i < dcontent.length; i++) {
          if (i < decWidth) {
            var height = dcontent[i].offsetHeight
            boxHeightArray[i] = height
            console.log('12组件' + i + '高:' + height)
          } else {
            var minHeight = Math.min.apply(null, boxHeightArray)
            var minIndex = this.get_min_height(boxHeightArray, minHeight)
            dcontent[i].style.position = 'absolute'
            dcontent[i].style.top = minHeight + 'px'
            dcontent[i].style.left = dcontent[minIndex].offsetLeft + 'px'
            var cHeight = dcontent[i].offsetHeight
            boxHeightArray[minIndex] = boxHeightArray[minIndex] + cHeight
            console.log('组件' + i + '高:' + cHeight)
            // console.log('组件' + i + 'minHeight:' + minHeight)
          }
        }
      },
      get_min_height (boxHeightArray, minHeight) {
        for (var i in boxHeightArray) {
          if (boxHeightArray[i] === minHeight) {
            return i
          }
        }
      }
    }
  }
</script>
<style scoped>
*{
  margin: 0px ;
  padding: 0px;
}
.nav {
  width: 100%;
  height: 40px;
  background-color: red;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.wrapper{
  position: relative;
  top: 40px;
  left: 0px;
  height: 600px
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