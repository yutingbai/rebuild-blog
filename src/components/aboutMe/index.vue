<template>
  <div>
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
    <div v-if="content.toString()!='' && content[0].board" class="content">
      <ul
        class="cardList infinite-list"
        overflow="scroll"
        @scroll="listenScroll($event)"
        v-loading="loading"
      >
        <!-- v-infinite-scroll="load" :infinite-scroll-delay="1000" -->
        <li v-for="item  in content" :key="item.id" class="card infinite-list-item">
          <div class="content">
            <div class="author" style="cursor: pointer;">
              <a class="avatar" @click="pushRoute(item.id)">
                <img :src="item.userVO.avatarUrl" alt="180" />
              </a>
              <div class="info">
                <a class="nickname" @click="pushRoute(item.id)">{{item.userVO.nickname}}</a>
                <span
                  data-type="share_note"
                  data-datetime="2017-12-18T10:27:40+08:00"
                >{{timestampToTime(item.lastActiveAt)}}</span>
              </div>
            </div>

            <a class="title" @click="pushRoute(item.id)">{{item.title}}</a>
            <p
              style="cursor: pointer;"
              @click="pushRoute(item.id)"
              class="abstract"
            >{{regpassage(item.content)}}</p>
            <div class="meta">
              <a @click="pushRoute(item.id)">
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
                    :fill="item.isLike ? '#ea6f5a' : '#646464'"
                  />
                </svg>
                {{item.likeCount}}
              </a>
              <a @click="pushRoute(item.id)">
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
                {{item.looked}}
              </a>
              <span @click="pushRoute(item.id)">
                <i class="el-icon-chat-dot-round"></i> 0
              </span>
            </div>
          </div>
        </li>
        <p v-if="!last" class="last" style="text-align: center; color:#b4b4b4; font-size:20px">
          <i class="el-icon-loading"></i>
        </p>
      </ul>
      <p
        v-if="content.toString() == '' && !this.loading "
        style="text-align: center; color:#b4b4b4 ;font-size:50px"
      >
        <svg
          t="1591069880712"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2270"
          width="200"
          height="200"
        >
          <path
            d="M880.128 426.752a98.816 98.816 0 0 0-68.608-33.792H214.528a111.36 111.36 0 0 0-70.912 32.512c-18.944 18.944-128 195.072-128 232.192v236.8a66.816 66.816 0 0 0 20.224 47.36 68.352 68.352 0 0 0 48.384 19.456h856.32a68.352 68.352 0 0 0 48.384-19.456 66.816 66.816 0 0 0 20.224-47.36v-236.8c0-37.12-129.024-230.912-129.024-230.912zM659.2 636.672a32 32 0 0 0-32.768 23.04v4.864a111.872 111.872 0 0 1-223.488 0 39.68 39.68 0 0 1 0-6.4 35.328 35.328 0 0 0-31.744-21.76H89.6l96-162.304s19.2-31.488 37.376-31.232h597.76a80.64 80.64 0 0 1 32.256 30.976L947.2 636.672zM478.976 87.04h62.208V332.8h-62.208V87.04zM673.497 296.745l111.002-137.076 48.344 39.149-111.002 137.076-48.344-39.149zM191.288 198.776l48.344-39.149 111.002 137.076-48.344 39.15-111.002-137.077z"
            fill="#646464"
            p-id="2271"
          />
        </svg>
      </p>
    </div>
    <div v-if="content.toString()!='' && content[0].type" class="content">
      <ul
        class="cardList infinite-list"
        overflow="scroll"
        @scroll="listenScroll($event)"
        v-loading="loading"
      >
        <!-- v-infinite-scroll="load" :infinite-scroll-delay="1000" -->
        <li v-for="item  in content" :key="item.id" class="card infinite-list-item">
          <div class="content">
            <div class="author" style="cursor: pointer;">
              <a class="avatar">
                <img :src="item.userVO.avatarUrl" alt="180" />
              </a>
              <div class="info">
                <a class="nickname" >{{item.userVO.nickname}}</a>
                <span
                  data-type="share_note"
                  data-datetime="2017-12-18T10:27:40+08:00"
                >{{timestampToTime(item.lastModified)}}</span>
                <span>
                  <el-divider direction="vertical"></el-divider>
                  <span
                    :class="item.beRead == 0 ?'red' :'green'"
                    type="text"
                  >{{item.beRead == 0 ?'未读' :'已读'}}</span>
                </span>
              </div>
            </div>

            <a class="title" ></a>
            <p
              style="cursor: pointer;"
              class="abstract"
            >对你发布的「{{item.summary}}」，他好像有话要说</p>
            <div class="meta">
              <span @click="viewMore(item.id)">
                <i class="el-icon-chat-dot-round"></i> 点击查看详情
              </span>
            </div>
          </div>
        </li>
        <p v-if="!last" class="last" style="text-align: center; color:#b4b4b4; font-size:20px">
          <i class="el-icon-loading"></i>
        </p>
      </ul>
      <p
        v-if="content.toString() == '' && !this.loading "
        style="text-align: center; color:#b4b4b4 ;font-size:50px"
      >
        <svg
          t="1591069880712"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2270"
          width="200"
          height="200"
        >
          <path
            d="M880.128 426.752a98.816 98.816 0 0 0-68.608-33.792H214.528a111.36 111.36 0 0 0-70.912 32.512c-18.944 18.944-128 195.072-128 232.192v236.8a66.816 66.816 0 0 0 20.224 47.36 68.352 68.352 0 0 0 48.384 19.456h856.32a68.352 68.352 0 0 0 48.384-19.456 66.816 66.816 0 0 0 20.224-47.36v-236.8c0-37.12-129.024-230.912-129.024-230.912zM659.2 636.672a32 32 0 0 0-32.768 23.04v4.864a111.872 111.872 0 0 1-223.488 0 39.68 39.68 0 0 1 0-6.4 35.328 35.328 0 0 0-31.744-21.76H89.6l96-162.304s19.2-31.488 37.376-31.232h597.76a80.64 80.64 0 0 1 32.256 30.976L947.2 636.672zM478.976 87.04h62.208V332.8h-62.208V87.04zM673.497 296.745l111.002-137.076 48.344 39.149-111.002 137.076-48.344-39.149zM191.288 198.776l48.344-39.149 111.002 137.076-48.344 39.15-111.002-137.077z"
            fill="#646464"
            p-id="2271"
          />
        </svg>
      </p>
    </div>
    <el-dialog
      class="dialog"
      :title="`来自的${message.userVO.nickname}消息`"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <div class="author" style="cursor: pointer;">
        <a class="avatar">
          <img :src="message.userVO.avatarUrl" alt="180" />
        </a>
        <div class="info">
          <a class="nickname">{{message.userVO.nickname}}</a>
          <span
            data-type="share_note"
            data-datetime="2017-12-18T10:27:40+08:00"
          >{{timestampToTime(message.lastModified)}}</span>
          <span>
            <el-divider direction="vertical"></el-divider>

            <span
              :class="message.beRead == 0 ?'red' :'green'"
              type="text"
            >{{message.beRead == 0 ?'未读' :'已读'}}</span>
          </span>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import API from "@/service/api";
import { mapGetters } from "vuex";
import { types } from "./const";
export default {
  inject: ["userPagereload"],
  name: "itemCard" + this.type,
  props: {
    item: {
      author: Object
    }
  },
  watch: {
    $route: "getPath"
  },
  created() {},
  computed: {
    ...mapGetters(["userName", "userId", "userHead"]),
    isLike(data) {
      return Boolean(data);
    }
  },
  data() {
    return {
      count: 10,
      type: "",
      info: {
        id: "",
        page: 1,
        per_page: 20
      },
      content: [],
      aboutMeCount: [],
      totalElements: 0,
      timeout: false,
      loading: false,
      last: false,
      dialogVisible: false,
      message: {
        userVO: {
          nickname: "",
          avatarUrl: ""
        }
      }
    };
  },
  mounted() {
    this.type = types[this.$route.params.type];
    this.getContent(this.type);
  },
  methods: {
    pushRoute(url) {
      this.$router.push("/postDetail/" + url);
    },
    listenScroll(event) {
      var Loading = this.load;
      if (
        !this.timeout &&
        event.srcElement.scrollTop - (this.totalElements - 3) * 83 > 0
      ) {
        this.timeout = setTimeout(function() {
          Loading();
        }, 300);
      }
    },
    getPath() {
      this.type = this.$route.params.type;
      this.userPagereload();
    },
    getContent(type) {
      var params = this.info;
      this.loading = true;
      params.id = this.userId || "";
      if (type == "post/myquestion") {
        API.notification(params).then(res => {
          this.content = this.content.concat(res.data.content);
          this.totalElements = res.data.totalElements;
          this.timeout = null;
          this.loading = false;
          if (this.totalElements < 10) {
            this.last = true;
          }
        });
      } else {
        API.aboutMe(type, params).then(res => {
          this.content = this.content.concat(res.content);
          this.totalElements = res.totalElements;
          this.timeout = null;
          this.loading = false;
          if (this.totalElements < 10) {
            this.last = true;
          }
        });
      }
    },
    load() {
      if (this.info.page * 10 <= this.totalElements) {
        this.info.page++;
        this.getContent(this.type);
      } else {
        this.last = true;
      }
    },
    regpassage(data) {
      if (data) {
        return data
          .slice(0, 100)
          .replace(
            /[\#\* |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,
            ""
          )
          .concat("...");
      }
    },
    timestampToTime(timestamp) {
      var date = new Date(new Date(timestamp).valueOf() + 13 * 60 * 60 * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + "-";
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D = date.getDate() + " ";
      var h = date.getHours() + ":";
      var m = date.getMinutes() + ":";
      var s = date.getSeconds();
      return Y + M + D + h + m + s;
    },
    viewMore(id) {
      
      API.notificationDetail(id).then(res => {
        this.message = res;
        this.dialogVisible = true;
      });
    }
  }
};
</script>
<style lang="less" scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  padding: 0 5% 0 0;
  margin-left: 5%;
  position: absolute;
  top: 30px;
  bottom: 0px;
  flex: 1;
  overflow: auto;
  width: 80%;
}
li {
  -webkit-tap-highlight-color: transparent;
  font-size: 17px;
  color: #333;
  font-family: -apple-system, SF UI Text, Arial, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  list-style: none;
  box-sizing: border-box;
  line-height: 20px;
  position: relative;
  width: 100%;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
  .content {
    -webkit-tap-highlight-color: transparent;
    font-size: 17px;
    color: #333;
    font-family: -apple-system, SF UI Text, Arial, PingFang SC, Hiragino Sans GB,
      Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
    list-style: none;
    line-height: 20px;
    box-sizing: border-box;
    .author {
      -webkit-tap-highlight-color: transparent;
      color: #333;
      font-family: -apple-system, SF UI Text, Arial, PingFang SC,
        Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
      list-style: none;
      line-height: 20px;
      box-sizing: border-box;
      margin-bottom: 14px;
      font-size: 13px;

      .avatar {
        float: left;
        -webkit-tap-highlight-color: transparent;
        font-family: -apple-system, SF UI Text, Arial, PingFang SC,
          Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
        list-style: none;
        line-height: 20px;
        font-size: 13px;
        box-sizing: border-box;
        background-color: transparent;
        text-decoration: none;
        width: 24px;
        height: 24px;
        cursor: pointer;
        color: #333;
        margin: 0 5px 0 0;
        display: inline-block;
        vertical-align: middle;
        img {
          margin-top: -5px;
          margin-right: 3px;
          -webkit-tap-highlight-color: transparent;
          font-family: -apple-system, SF UI Text, Arial, PingFang SC,
            Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
          list-style: none;
          line-height: 20px;
          font-size: 13px;
          cursor: pointer;
          color: #333;
          box-sizing: border-box;
          vertical-align: middle;
          width: 100%;
          height: 100%;
          border: 1px solid #ddd;
          border-radius: 50%;
        }
      }
    }
    .title {
      -webkit-tap-highlight-color: transparent;
      list-style: none;
      box-sizing: border-box;
      background-color: transparent;
      text-decoration: none;
      cursor: pointer;
      margin: -7px 0 4px;
      display: inherit;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
      color: #333;
      font-family: -apple-system, SF UI Display, Arial, PingFang SC,
        Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
    }
    .abstract {
      -webkit-tap-highlight-color: transparent;
      font-family: -apple-system, SF UI Text, Arial, PingFang SC,
        Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
      list-style: none;
      box-sizing: border-box;
      margin: 0 0 8px;
      font-size: 13px;
      line-height: 24px;
      color: #999;
    }
    .meta {
      -webkit-tap-highlight-color: transparent;
      color: #333;
      font-family: -apple-system, SF UI Text, Arial, PingFang SC,
        Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
      list-style: none;
      box-sizing: border-box;
      padding-right: 0 !important;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      a {
        -webkit-tap-highlight-color: transparent;
        font-family: -apple-system, SF UI Text, Arial, PingFang SC,
          Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
        list-style: none;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        box-sizing: border-box;
        background-color: transparent;
        text-decoration: none;
        cursor: pointer;
        margin-right: 10px;
        color: #b4b4b4;
      }
      span {
        -webkit-tap-highlight-color: transparent;
        font-family: -apple-system, SF UI Text, Arial, PingFang SC,
          Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
        list-style: none;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        box-sizing: border-box;
        margin-right: 10px;
        color: #b4b4b4;
      }
      i {
        -webkit-tap-highlight-color: transparent;
        list-style: none;
        line-height: 20px;
        cursor: pointer;
      }
    }
  }
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
  .name {
    display: inline;
    font-size: 21px;
    font-weight: ceil(100vh - 60px);
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
  color: #969696;
  margin-top: 2px;
}
div.router-link-active,
div.router-link-active path {
  color: #ea6f5a;
  fill: #ea6f5a;
  border-bottom: 3px solid #ea6f5a;
  margin-right: 30px;
  border-radius: 3px;
}
#content {
  position: relative;
  top: 320px;
  bottom: 0px;
  flex: 1;
  overflow: auto;
  min-width: 1013px;
  width: 92%;
}

.userCenter {
  position: relative;
}
.dialog {
  .avatar {
    float: left;
    -webkit-tap-highlight-color: transparent;
    font-family: -apple-system, SF UI Text, Arial, PingFang SC, Hiragino Sans GB,
      Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
    list-style: none;
    line-height: 20px;
    font-size: 13px;
    box-sizing: border-box;
    background-color: transparent;
    text-decoration: none;
    width: 24px;
    height: 24px;
    cursor: pointer;
    color: #333;
    margin: 0 5px 0 0;
    display: inline-block;
    vertical-align: middle;
    img {
      margin-top: -5px;
      margin-right: 3px;
      -webkit-tap-highlight-color: transparent;
      font-family: -apple-system, SF UI Text, Arial, PingFang SC,
        Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
      list-style: none;
      line-height: 20px;
      font-size: 13px;
      cursor: pointer;
      color: #333;
      box-sizing: border-box;
      vertical-align: middle;
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      border-radius: 50%;
    }
  }
}
.red {
  color: #F56C6C;
}
.green {
  color: #67C23A;
}
</style>