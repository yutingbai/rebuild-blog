<template>
  <div id="App">
    <el-container class="app-container">
      <el-container class="common-main">
        <el-header>
          <div class="outBox">
            <div class="header">
              <el-row>
                <el-col :span="4">
                  <router-link class="toprouter" tag="div" to="/main">
                    <svg
                      t="1590923135500"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="1290"
                      width="200"
                      height="200"
                    >
                      <path
                        d="M800 160a64 64 0 0 1 64 64v576a64 64 0 0 1-64 64H224a64 64 0 0 1-64-64V224a64 64 0 0 1 64-64h576zM320 224H224v576h96V224z m128 256V224h-64v576h416V224h-96v256l-128-28.704L448 480z m0 192h320v64H448v-64z m0-128h256v64h-256v-64z m192-320h-128v176.064l64-14.336 64 14.336V224z"
                        p-id="1291"
                        fill="#ea6f5a"
                      />
                    </svg>
                    知道
                  </router-link>
                </el-col>
                <el-col :span="3">
                  <router-link class="toprouter" tag="div" to="/question">
                    <svg
                      t="1590923208893"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="3371"
                      width="200"
                      height="200"
                    >
                      <path
                        d="M853.333333 597.333333h-85.333333v128a85.333333 85.333333 0 0 1-85.333333 85.333334H399.488L256 938.666667l-42.666667-128H170.666667a85.333333 85.333333 0 0 1-85.333334-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333334-85.333333h170.666666V170.666667a85.333333 85.333333 0 0 1 85.333334-85.333334h426.666666a85.333333 85.333333 0 0 1 85.333334 85.333334v341.333333a85.333333 85.333333 0 0 1-85.333334 85.333333zM213.333333 341.333333a42.666667 42.666667 0 0 0-42.666666 42.666667v298.666667a42.666667 42.666667 0 0 0 42.666666 42.666666h426.666667a42.666667 42.666667 0 0 0 42.666667-42.666666v-85.333334h-256a85.333333 85.333333 0 0 1-85.333334-85.333333V341.333333H213.333333z m469.333334 170.666667V384a42.666667 42.666667 0 0 0-42.666667-42.666667h-213.333333v128a42.666667 42.666667 0 0 0 42.666666 42.666667h213.333334z m170.666666-298.666667a42.666667 42.666667 0 0 0-42.666666-42.666666h-341.333334a42.666667 42.666667 0 0 0-42.666666 42.666666v42.666667h256a85.333333 85.333333 0 0 1 85.333333 85.333333v170.666667h42.666667a42.666667 42.666667 0 0 0 42.666666-42.666667V213.333333z"
                        p-id="3372"
                        fill="#ea6f5a"
                      />
                    </svg>
                    问答
                  </router-link>
                </el-col>
                <el-col :span="3">
                  <router-link class="toprouter" tag="div" to="/comperate">
                    <svg
                      t="1590923244497"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="4268"
                      width="200"
                      height="200"
                    >
                      <path
                        d="M410.67 544H133.33A69.33 69.33 0 0 0 64 613.33v277.34A69.33 69.33 0 0 0 133.33 960h277.34A69.33 69.33 0 0 0 480 890.67V613.33A69.33 69.33 0 0 0 410.67 544zM402 842a40 40 0 0 1-40 40H182a40 40 0 0 1-40-40V662a40 40 0 0 1 40-40h180a40 40 0 0 1 40 40z m488.67-298H613.33A69.33 69.33 0 0 0 544 613.33v277.34A69.33 69.33 0 0 0 613.33 960h277.34A69.33 69.33 0 0 0 960 890.67V613.33A69.33 69.33 0 0 0 890.67 544zM882 842a40 40 0 0 1-40 40H662a40 40 0 0 1-40-40V662a40 40 0 0 1 40-40h180a40 40 0 0 1 40 40zM410.67 64H133.33A69.33 69.33 0 0 0 64 133.33v277.34A69.33 69.33 0 0 0 133.33 480h277.34A69.33 69.33 0 0 0 480 410.67V133.33A69.33 69.33 0 0 0 410.67 64zM402 362a40 40 0 0 1-40 40H182a40 40 0 0 1-40-40V182a40 40 0 0 1 40-40h180a40 40 0 0 1 40 40z m292.49 94.18a81.35 81.35 0 0 0 115 0l126.69-126.67a81.35 81.35 0 0 0 0-115L809.51 87.82a81.35 81.35 0 0 0-115 0L567.82 214.49a81.35 81.35 0 0 0 0 115z"
                        p-id="4269"
                        fill="#ea6f5a"
                      />
                    </svg>
                    做项目
                  </router-link>
                </el-col>
                <el-col :span="3">
                  <router-link class="toprouter" tag="div" to="/practice">
                    <svg
                      t="1590923269895"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="5195"
                      width="200"
                      height="200"
                    >
                      <path
                        d="M384 896c0 23.466667 19.2 42.666667 42.666667 42.666667l170.666667 0c23.466667 0 42.666667-19.2 42.666667-42.666667l0-42.666667L384 853.333333 384 896zM512 85.333333c-164.906667 0-298.666667 133.76-298.666667 298.666667 0 101.546667 50.773333 190.933333 128 244.906667L341.333333 725.333333c0 23.466667 19.2 42.666667 42.666667 42.666667l256 0c23.466667 0 42.666667-19.2 42.666667-42.666667l0-96.426667c77.226667-53.973333 128-143.36 128-244.906667C810.666667 219.093333 676.906667 85.333333 512 85.333333zM633.813333 558.933333 597.333333 584.32 597.333333 682.666667l-170.666667 0 0-98.133333-36.48-25.386667C332.8 519.04 298.666667 453.76 298.666667 384.213333c0-117.546667 95.786667-213.333333 213.333333-213.333333s213.333333 95.786667 213.333333 213.333333C725.333333 453.546667 691.2 518.826667 633.813333 558.933333z"
                        p-id="5196"
                        fill="#ea6f5a"
                      />
                    </svg>
                    实习专栏
                  </router-link>
                </el-col>
                <el-col :span="6">
                  <router-link tag="div" class="write" to="/users/editor">
                    <img class="svg" src="./assets/images/edit.svg" />
                    写文章
                  </router-link>
                </el-col>
                <el-col :span="5">
                  <div class="imgBox">
                    <el-dropdown
                      style="text-align: right; font-size: 12px"
                      placement="bottom-start"
                    >
                      <router-link tag="div" to="/users">
                        <img class="userHead" v-if="userHead" :src="userHead" alt="用户头像" />
                        <img v-else class="svg" src="./assets/images/login.svg" />
                      </router-link>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item @click.native="logout">
                          退出登录
                          <img class="logo" src="./assets/images/logout.svg" />
                        </el-dropdown-item>
                        <el-dropdown-item>
                          <router-link to="/users/setting">
                          修改信息
                          <img class="logo" src="./assets/images/pen.svg" />
                          </router-link>
                        </el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="dropdown site-logo"></div>
        </el-header>
        <el-main>
            <router-view v-if="isRouterAlive"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import API from "@/service/api";
import { mapGetters } from "vuex";
export default {
  name: "App",
  // 提供reload方法
  provide: function() {
    return {
      reload: this.reload,
      setCookie: this.setCookie
    };
  },
  // isRouterAlive控制显示
  data: function() {
    return {
      isRouterAlive: true
    };
  },
  mounted() {},
  beforeCreate() {
    let cookie = document.cookie.split(";");
    var res = {};
    cookie.forEach(item => {
      var result = item.split("=");
      if (result[0] && result[1]) {
        res[result[0].trim()] = result[1].trim();
      }
    });
    this.$store.commit("SET_USERMSG", res);
  },
  methods: {
    // 刷新方法
    reload: function() {
      this.isRouterAlive = false;
      // 该方法会在dom更新后执行
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    },
    setCookie: function(name, value) {
      var d = new Date();
      d.setTime(d.getTime() + 2 * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = name + "=" + value + "; " + expires;
    },
    logout() {
      this.setCookie("userId", " ");
      this.setCookie("userName", " ");
      this.setCookie("userHead", " ");
      this.$store.commit("LOGOUT");
      this.$router.push("/");
    }
  },
  computed: {
    ...mapGetters(["userName", "userId", "userHead"]),
  
  }
};
</script>

<style lang="less" >
body {
  height: 100%;
  font-family: "PingFang SC", Arial, "Microsoft YaHei", sans-serif;
}
#app {
  outline: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  // width: 100%;
  height: 100%;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
    // background: #2c3e50;
  }
  .el-dropdown {
    color: #666;
  }
  .site {
    padding-right: 20px;
    cursor: pointer;
  }
  .el-dropdown-link {
    cursor: pointer;
  }
  .site-logo {
    position: absolute;
    top: 0px;
    right: 30px;
    line-height: 60px;
    img {
      width: 30px;
    }
  }
  .el-table th > .cell {
    word-break: break-word;
  }
}
.outBox {
  background: #fff;
  position: relative;
  top: 0px;
  left: 2.5px;
  height: 70px;
  width: 100%;
  /* border: 1px solid black; */
}
.header {
  height: 50px;
  width: 95%;
  min-width: 1040px;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
  position: absolute;
  top: 10px;
  left: 2.5%;
}
.toprouter {
  float: right;
  margin-top: 7.5px;
  height: 35px;
  color: #ea6f5a;
  font-size: 17px;
  margin-left: 5%;
  display: inline-block;
  line-height: 35px;
  text-align: right;
  margin-left: 15px;
  cursor: pointer;
}
.imgBox {
  float: right;
  margin-right: 100px;
  margin-top: 2.5px;
}
.imgBox .userHead {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}

div.active,
div.active path {
  color: #555;
  fill: #555;
}
div.router-link-active,
div.router-link-active path {
  color: #555;
  fill: #555;
}
svg {
  width: 1.1em;
  height: 1.1em;
  vertical-align: -0.2em;
  margin-right: 0.1em;
}
.sign {
  width: 45px;
  height: 45px;
}
.write {
  margin-top: 5px;
  margin-right: -25px;
  line-height: 40px;
  width: 100px;
  height: 40px;
  border-radius: 20px;
  font-size: 16px;
  color: #fff;
  background-color: #ea6f5a;
  float: right;
}

.write img.svg {
  margin-left: 8px;
  vertical-align: text-bottom;
  width: 1.5em;
  height: 1.5em;
}

.toprouter img.svg,
img.logo {
  vertical-align: middle;
  width: 1.1em;
  height: 1.1em;
}
</style>
