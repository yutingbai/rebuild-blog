<template>
  <div id="main">
    <div id="content" >
        <router-view />
   
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import API from "@/service/api";

export default {
  name: "users",
  inject: ["reload"],
  components: {},
  data() {
    return {
      user: {}
    };
  },
  mounted() {
    
  },
  computed: {
    ...mapGetters(["userName", "userId", "userHead"])
  },
  methods:{
    
  }
 
};
</script>

<style lang="less" scoped>
#main {
  padding:0 2.5%;
  margin: -20px auto;
}
.headbox {
  padding: 0 40px;
  background: #fff;
  height: 200px;
  width: 94%;
  min-width: 1040px;
  border-radius: 5px;
  margin: 0 auto;
}
.main-top {
  margin-top: 20px;
}
.avatar {
  float: left;
  width: 90px;
  height: 90px;
  margin-left: -10px;
  margin-top: 10px;
  display: block;
  cursor: pointer;
}
.title {
  padding: 5px 0 0 100px;
  .name {
    display: inline;
    font-size: 21px;
    font-weight: 700;
    vertical-align: middle;
    cursor: pointer;
  }
}

.wordList {
  margin-left: 2.5%;
  width: 95%;
  min-width: 606.13px;
}
.wordList div {
  color: #555;
  margin-top: 5px;
}
div.router-link-active,
div.router-link-active path {
  color: #ea6f5a;
  fill: #ea6f5a;
  border-bottom: 3px solid #ea6f5a;
  border-radius: 3px;
}
#content {
  flex: 1;
  overflow: auto;
  min-width: 1013px;
  width: 92%;
}
.userCenter {
  position: relative;
}
</style>
