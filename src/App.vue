<template>
  <div id="app" :class="{'collape-right': collapeRight, 'collape-bottom': collapeBottom}">
    <div class="top">
      <el-menu :default-active="activeIndex" mode="horizontal" @select="menuSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">查看</template>
          <el-menu-item index="2-1">侧边栏</el-menu-item>
          <el-menu-item index="2-2">基本信息</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="main">
      <my-canvas :msg="model.properties.name"></my-canvas>
    </div>
    <div class="bottom">
      <my-panel :name="model.properties.name"></my-panel>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
import MyCanvas from './components/MyCanvas'
import MyPanel from './components/MyPanel'
import MockModels from './mock/Models'

export default {
  name: "app",
  components: {
    MyCanvas,
    MyPanel
  },
  data () {
    return {
      activeIndex: '1',
      collapeRight: false,
      collapeBottom: false,
      model: MockModels.model1
    };
  },
  methods: {
    menuSelect: function(i) {
      switch (i) {
        case '2-1':
          this.collapeRight = !this.collapeRight;
          break;
        case '2-2':
          this.collapeBottom = !this.collapeBottom;
          break;
        case '1':
          console.log(this.model);
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template: 61px 1fr 250px / 1fr 350px;
}
#app.collape-right {
  grid-template-columns: 1fr 0;
}
#app.collape-bottom {
  grid-template-rows: 61px 1fr 0;
}
#app .top {
  grid-area: 1 / 1 / span 1 / span 2;
}
#app .main {
  grid-area: 2 / 1;
}
#app .bottom {
  grid-area: 3 / 1;
  background-color: #eee;
}
#app .right {
  grid-area: 2 / 2 / span 2 / span 1;
  background-color: #eee;
}
</style>
