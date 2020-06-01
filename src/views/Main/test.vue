<template>
  <div class="nummber-supplier">
    <div class="wordList">
      <el-row>
        <el-col :span="3">
          <router-link tag="div" to="/main/all">全部文章</router-link>
        </el-col>
        <el-col :span="3">
          <router-link tag="div" to="/main/web">web前端</router-link>
        </el-col>
        <el-col :span="3">
          <router-link tag="div" to="/main/java">Java后台</router-link>
        </el-col>
        <el-col :span="3">
          <router-link tag="div" to="/main/other">其他相关</router-link>
        </el-col>
      </el-row>
    </div>
    <div id="content">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  components: {}
};
</script>
<style lang="less" scoped>


.wordList {
  margin-left: 2.5%;
  width: 95%;
  min-width: 606.13px;
}
.wordList div {
  color: #969696;
  margin-top: 5px;
}
div.router-link-active,
div.router-link-active path {
  color: #646464;
  fill: #555;
  border-bottom: 3px solid #646464;
  margin-right: 30px;
  border-radius: 3px;
}
#content {
  position: absolute;
  top: 365px;
  bottom: 0px;
  flex: 1;
  overflow: auto;
  min-width: 1013px;
  width: 92%;
}


</style>