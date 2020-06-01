<template>
  <div id="main">
    <div class="userCenter">
      <div>
        <el-card class="headbox" shadow="hover">
          <div class="main-top">
            <a class="avatar" href="/#/users">
              <img class="imgCercle" :src="userHead" alt="用户头像" />
            </a>
            <div class="title">
              <a class="name" href="/#/users">{{userName}}</a>
            </div>
            <div class="info">
              <ul>
                <li>
                  <div class="meta-block">
                    <p>
                      <span>{{user.major}}</span>-
                      <span>{{user.grade}}</span>
                    </p>
                    <a>
                      <span>专业</span>-
                      <span>班级</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="meta-block">
                    <a href="/#">
                      <p>{{user.follow}}</p>关注 >
                    </a>
                  </div>
                </li>
                <li>
                  <div class="meta-block">
                    <a href="#">
                      <p>{{user.fans}}</p>粉丝 >
                    </a>
                  </div>
                </li>
                <li>
                  <div class="meta-block">
                    <a href="/#">
                      <p>1</p>文章 >
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </el-card>
      </div>

      <div class="wordList">
        <el-row>
          <el-col :span="3">
            <router-link tag="div" to="/users/aboutMe">
              <svg
                t="1591009031462"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="6135"
                width="200"
                height="200"
              >
                <path
                  d="M353.792 687.104c48.64 0 74.24-25.6 74.24-74.24v-133.12c0-48.64-25.6-74.24-74.24-74.24s-74.24 25.6-74.24 74.24v133.12c0 48.64 25.6 74.24 74.24 74.24zM648.704 687.104c48.64 0 74.24-25.6 74.24-74.24v-133.12c0-48.64-25.6-74.24-74.24-74.24s-74.24 25.6-74.24 74.24v133.12c0 48.64 25.6 74.24 74.24 74.24z"
                  p-id="6136"
                  fill="#969696"
                />
                <path
                  d="M878.592 864.256c91.648-95.232 141.824-220.16 141.824-352.256C1020.416 231.936 792.576 3.584 512 3.584 376.32 3.584 248.832 56.32 153.088 152.576 56.832 248.832 3.584 376.32 3.584 512c0 280.064 227.84 508.416 508.416 508.416h364.544c20.48 0 39.424-12.288 48.128-30.72 8.704-18.432 6.144-40.96-7.168-56.832l-38.912-68.608zM512 92.16c231.424 0 419.84 188.416 419.84 419.84 0 109.056-41.472 211.968-116.736 290.816-30.72 31.744-36.864 76.288-17.92 129.024H512c-231.424 0-419.84-188.416-419.84-419.84s188.416-419.84 419.84-419.84z"
                  p-id="6137"
                  fill="#969696"
                />
              </svg>
              与我相关
            </router-link>
          </el-col>
          <el-col :span="3">
            <router-link tag="div" to="/users/myPost">
              <svg
                t="1591008866931"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1778"
                width="200"
                height="200"
              >
                <path
                  d="M234.666667 128h554.666666a42.666667 42.666667 0 0 1 42.666667 42.666667v682.666666a42.666667 42.666667 0 0 1-42.666667 42.666667H234.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667z m96 149.333333a32 32 0 0 0 0 64h362.666666a32 32 0 0 0 0-64h-362.666666z m0 192a32 32 0 0 0 0 64h362.666666a32 32 0 0 0 0-64h-362.666666z m0 192a32 32 0 0 0 0 64h234.666666a32 32 0 0 0 0-64h-234.666666z"
                  p-id="1779"
                  fill="#969696"
                />
              </svg>
              我发布的
            </router-link>
          </el-col>
          <el-col :span="3">
            <router-link tag="div" to="/users/mystar">
              <svg
                t="1591008948541"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3381"
                width="200"
                height="200"
              >
                <path
                  d="M953.472 478.784l-165.248 141.568c-10.432 10.176-15.168 24.768-12.672 39.104l39.04 227.456c3.072 18.048 0 30.912-14.784 41.728-8.384 6.08-18.304 9.152-28.288 9.152-7.616 0-15.296-1.856-22.336-5.504l-208.64-112.448c-12.864-6.784-28.224-6.784-41.088 0l-199.872 112.448C283.392 940.8 263.808 939.328 248.96 928.576c-14.784-10.752-26.56-23.68-23.488-41.728L273.28 654.72c2.432-14.336-2.304-28.928-12.672-39.04L86.528 478.784c-13.12-12.736-17.856-31.872-12.224-49.28C80 412.096 95.04 399.424 113.152 396.8l226.368-39.744c14.4-2.112 26.816-11.136 33.216-24.128l104.192-219.904C484.992 96.64 501.696 86.208 520 86.208c18.304 0 34.944 10.368 43.072 26.816l100.096 219.904c6.4 13.056 18.88 22.08 33.216 24.128L926.912 396.8c18.048 2.624 33.152 15.296 38.784 32.704C971.328 446.912 966.528 465.984 953.472 478.784L953.472 478.784zM953.472 478.784"
                  p-id="3382"
                  fill="#969696"
                />
              </svg>
              我的收藏
            </router-link>
          </el-col>
          <el-col :span="3">
            <router-link tag="div" to="/users/myItem">
              <svg
                t="1591009071389"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="7757"
                width="200"
                height="200"
              >
                <path
                  d="M807.6 728.3c69.7 35.9 113.8 102.9 116.5 179.4-0.7 6.1-4.1 16.9-16.9 16.9h-4.7c-12.9-2-21.7-14.2-23.7-17.6v-0.7c-16.2-99.5-77.9-153.7-173.3-153.7-92.8 0-151 53.5-167.9 154.4-2 2.7-10.8 19-25.1 19h-3.4c-16.9 0-20.3-11.5-22.3-16.2 3.4-76.5 47.4-145.6 117.1-181.5l26.4-13.5-22.3-19c-32-29.1-51-69-51-112.4 0-81.9 65.7-148.3 149-148.3 81.3 0 148.3 66.4 148.3 148.3 0 43.3-18.3 82.6-50.8 111.7l-23 19.6 27.1 13.6zM706 685c55.5 0 101.6-45.4 101.6-101.6 0-55.5-46-100.9-101.6-100.9s-101.6 45.4-101.6 100.9c0 56.2 46.1 101.6 101.6 101.6z m-6.8-409.7c9.5 0 16.9 2.7 22.4 7.4 4.7 4.7 6.8 9.5 6.8 15.6 0 10.8-8.1 27.8-29.1 27.8h-426c-21.7 0-28.4-14.2-28.4-25.1 0-8.8 5.4-25.7 28.4-25.7h425.9zM331.5 864.4c14.2 0 24.4 10.8 24.4 26.4 0 7.5-2 12.9-6.1 16.9-5.4 6.1-12.9 7.5-18.3 7.5H192c-40.6 0-73.8-23.7-86.7-61.6-2.7-10.2-4.7-21.7-4.7-32.5v-239L100 209c0-111.1 62.3-111.1 113.8-111.1h544.4c86.7 0 114.4 27.8 114.4 113.8v59.6c0 10.2-2 15.6-6.8 20.3-8.1 8.8-27.1 8.8-35.9 0.7-4.7-4.7-7.5-12.2-7.5-21v-59.6c0-46-17.6-63-64.3-63H213.7c-52.1 0-62.3 11.5-62.3 63v589.8c0 39.9 22.4 63 62.3 63h117.8z m149-404.9c4.7 3.4 6.8 8.8 6.8 16.2 0 10.8-8.1 27.1-29.1 27.1H273.3c-23 0-28.4-16.3-28.4-25.1 0-8.1 5.4-26.4 28.4-26.4h184.2c12.9 0.1 19.6 3.5 23 8.2z m-40.6 184.2c8.8 0 16.9 2.7 23 7.5 4.7 4.7 6.8 8.8 6.8 16.2 0 10.2-7.5 27.1-28.4 27.1h-168c-21 0-28.4-13.5-28.4-25.1 0-8.8 5.4-25.7 28.4-25.7h166.6z"
                  p-id="7758"
                  fill="#969696"
                />
              </svg>
              参与项目
            </router-link>
          </el-col>
        </el-row>
      </div>
    </div>
    <div id="content">
      <keep-alive>
        <router-view />
      </keep-alive>
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
    API.GetUserInfo(this.userId).then(res => {
      console.log(res);
      this.user = res;
    });
  },
  computed: {
    ...mapGetters(["userName", "userId", "userHead"])
  },
 
  beforeRouteEnter(to, from, next) {
    let cookie = document.cookie.split(';')
    var res = {}
    cookie.forEach(item => {
      var result = item.split("=");
      if (result[0] && result[1]) {
        res[result[0].trim()] = result[1].trim();
      }
    });
    console.log(res.userId)
    if (res.userId) {
      next();
    } else {
      next({ path: "/users/login" });
    }
  }
};
</script>

<style lang="less" scoped>
#main {
  padding: 2.5%;
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
.info {
  margin-top: 5px;
  padding-left: 100px;
  font-size: 14px;
  ul {
    padding-left: 0;

    margin-top: 0;
    margin-bottom: 10px;
    li {
      display: inline-block;
      line-height: 20px;
      .meta-block {
        font-size: 12px;
        margin: 0 7px 6px 0;
        padding: 0 7px 0 0;
        border-right: 1px solid #f0f0f0;
        p {
          margin-bottom: -5px;
          font-size: 15px;
          color: #333;
          box-sizing: border-box;
          margin-block-start: 1em;
          margin-block-end: 0.5em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
        }
        a {
          color: #969696;
        }
      }
    }
    div {
      color: #969696;
    }
  }
}

.imgCercle {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 50%;
  vertical-align: middle;
}

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
.userCenter {
  position: relative;
}
</style>
