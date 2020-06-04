<template>
  <div class="content">
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
          <p style="cursor: pointer;" @click="pushRoute(item.id)" class="abstract">{{regpassage(item.content)}}</p>
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
      <p v-else class="last" style="text-align: center; color:#b4b4b4">没有更多了啦...</p>
    </ul>
  </div>
</template>
<script>
import API from "@/service/api";
import { mapGetters } from "vuex";
export default {
  inject: ["reload"],
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
        board: "PRACTICE",
        id: "",
        page: 1,
        per_page: 10
      },
      content: [],
      totalElements: 0,
      timeout: false,
      loading: true,
      last: false
    };
  },
  mounted() {
    this.type = this.$route.params.type;
    this.getContent(this.$route.params.type);
  },
  methods: {
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
    pushRoute(url){
      this.$router.push('/postDetail/'+url);

    },
    listenScroll(event) {
      var Loading = this.load;
      if (
        !this.timeout &&
        event.srcElement.scrollTop - (this.totalElements - 3) * 140 > 0
      ) {
        this.timeout = setTimeout(function() {
          Loading();
        }, 300);
      }
    },
    getPath() {
      this.type = this.$route.params.type;
      this.reload();
    },
    getContent(type) {
      var  params = this.info;
      this.loading = true;
      params.id = this.userId || "";
      params.type = type;
      API.getBoard(params).then(res => {
        this.content = this.content.concat(res.content);
        this.totalElements = res.totalElements;
        this.timeout = null;
        this.loading = false;
        if(this.totalElements < 10){
          this.last=true
        }
      });
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
      return data
        .slice(0, 100)
        .replace(
          /[\#\* |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,
          ""
        )
        .concat("...");
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
  top: 80px;
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

.userCenter {
  position: relative;
}
</style>