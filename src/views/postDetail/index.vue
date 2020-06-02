<template>
  <div class="login_body">
    <el-container class="app-container">
      <el-container class="common-main">
        <el-header>
          <div class="outBox">
            <div class="header">
              <el-row>
                <el-col :span="2">
                  <div class="userHeadBox">
                    <img class="userHead" :src="detail.userVO.avatarUrl" alt="用户头像" />
                  </div>
                </el-col>
                <el-col :span="3">
                  <div class="toprouter" tag="div" to="/main">
                    <svg
                      t="1591078786365"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="1769"
                      width="200"
                      height="200"
                    >
                      <path
                        d="M864.41472 942.675968H329.081856c-20.987904 0-37.899264 16.912384-37.899264 37.906432 0 20.993024 16.91136 37.906432 37.899264 37.906432h535.332864c20.993024 0 37.900288-16.912384 37.900288-37.906432s-16.907264-37.906432-37.900288-37.906432zM798.517248 385.193984c77.558784-134.705152 90.389504-322.47808 90.973184-330.063872 1.16224-13.991936-6.418432-27.988992-18.664448-34.985984-12.246016-6.995968-27.406336-6.995968-39.652352 0.58368-27.988992 18.0736-274.661376 177.856512-327.728128 268.243968-77.55776 130.624512-268.248064 479.345664-269.996032 482.843648-1.75104 2.919424-2.33472 5.833728-3.497984 8.749056L125.566976 961.339392c-10.493952 18.080768-4.081664 41.404416 13.997056 51.899392 5.828608 3.504128 12.244992 5.250048 18.65728 5.250048 12.83072 0 25.660416-6.996992 32.656384-19.243008L297.59488 814.971904c66.480128-45.48608 422.781952-293.905408 500.922368-429.77792z m-229.757952-58.315776c26.236928-44.9024 139.37152-131.208192 235.00288-197.105664-10.492928 61.81376-31.485952 148.70528-70.555648 217.515008-45.48608 78.14144-217.51296 216.346624-353.386496 316.650496 61.812736-112.550912 144.036864-261.249024 188.939264-337.05984z"
                        p-id="1770"
                        fill="#ea6f5a"
                      />
                    </svg>
                    {{detail.userVO.nickname}}
                  </div>
                </el-col>
                <el-col :span="10">
                  <div class="titleBox">{{detail.title}}</div>
                </el-col>
                <el-col :span="1" class="countBox" :offset="4">
                  <a href="#">
                    <svg
                      t="1591034383019"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="1747"
                      width="200"
                      height="200"
                    >
                      <path
                        d="M646.4 272c-59.2 0-108.8 33.6-134.4 81.6-25.6-48-76.8-81.6-134.4-81.6-84.8 0-153.6 68.8-153.6 155.2 0 25.6 6.4 51.2 17.6 72 1.6 3.2 6.4 9.6 12.8 19.2 4.8 6.4 9.6 12.8 16 17.6 44.8 51.2 132.8 139.2 190.4 193.6 28.8 27.2 76.8 27.2 105.6 0 57.6-56 145.6-144 190.4-193.6 4.8-4.8 11.2-11.2 16-17.6 4.8-6.4 9.6-14.4 12.8-19.2 11.2-22.4 17.6-48 17.6-72-3.2-86.4-72-155.2-156.8-155.2z"
                        p-id="1748"
                        :fill="detail.isLike ? '#ea6f5a' : '#646464'"
                      />
                    </svg>
                    {{detail.likeCount}}
                  </a>
                </el-col>
                <el-col :span="1" class="countBox">
                  <a href="#">
                    <svg
                      t="1569135820525"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="978"
                      width="200"
                      height="200"
                    >
                      <path
                        d="M726.277689 227.555556l-91.886933 138.899911L539.420444 227.555556 726.277689 227.555556zM619.793067 398.222222 415.9488 398.222222l101.910756 387.629511L619.793067 398.222222zM422.752711 375.466667l190.225067 0-95.118222-139.127467L422.752711 375.466667zM401.351111 366.455467 496.310044 227.555556 309.464178 227.555556 401.351111 366.455467zM496.264533 793.156267 392.430933 398.222222 168.721067 398.222222 496.264533 793.156267zM169.039644 375.466667l210.989511 0-91.909689-138.934044L169.039644 375.466667zM747.463111 236.782933 655.712711 375.466667l210.625422 0L747.463111 236.782933zM643.310933 398.222222l-103.844978 394.899911L866.656711 398.222222 643.310933 398.222222z"
                        p-id="979"
                        fill="#ea6f5a"
                      />
                    </svg>
                    {{detail.looked}}
                  </a>
                </el-col>
                <el-col :span="1" class="countBox">
                  <span>
                    <i class="el-icon-chat-dot-round"></i> 0
                  </span>
                </el-col>
                <el-col :span="2" class="countBox">
                  <span @click="routeBack()">
                    返回
                    <i class="el-icon-arrow-right"></i>
                  </span>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-header>
        <div class="contentBox">
          <div class="content">
            <mavonEditor
              v-model="detail.content"
              :subfield="false"
              defaultOpen="preview"
              :toolbarsFlag="false"
            />
          </div>
        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { constants } from "crypto";
import API from "../../service/api";
import { mapGetters } from "vuex";
import { mavonEditor } from "mavon-editor";
export default {
  name: "detail",
  inject: ["reload", "setCookie"],
  data() {
    return {
      postId: "",
      detail: {
        userVO: {
          nickname: "",
          avatarUrl: ""
        }
      }
    };
  },
  components: { mavonEditor },
  mounted() {
    this.postId = this.$route.params.postId;
    console.log(this.postId);
    this.getDetail();
  },
  computed: {
    ...mapGetters(["userName", "userId", "userHead"])
  },
  methods: {
    getDetail() {
      var params = {};
      params.id = this.postId;
      params.userId = this.userId;
      API.getPostDetail(params).then(res => {
        this.detail = res;
        console.log(res);
      });
    },
    routeBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
*,
:after,
:before {
  box-sizing: border-box;
}
.login_body {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgb(251, 251, 251);
  overflow: hidden;
}
.userHeadBox {
  float: right;
  margin-top: 5px;
  margin-right: -10px;
}
.userHeadBox img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.titleBox {
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  font-size: 28px;
  word-wrap: break-word;
  color: #222226;
  font-weight: 600;
  margin: 0;
  word-break: break-all;
}
.contentBox {
  width: 100%;
  position: absolute;
  top: 60px;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  padding-bottom: 60px;
}
.content {
  position: relative;
  top: 0;
  left: 0;
  width: 80%;
  margin: 0 auto;
}
.countBox {
  line-height: 50px;
  text-align: center;
  svg {
    font-size: 1.2em;
  }
}
</style>
