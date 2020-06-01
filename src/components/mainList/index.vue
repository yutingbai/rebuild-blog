<template>
  <div>
    <ul class="cardList infinite-list" v-infinite-scroll="load" style="overflow:auto">
      <li v-for="item  in content" :key="item.id" class="card infinite-list-item" >
        <div class="content">
          <div class="author">
            <a class="avatar" href="/#">
              <img :src="item.userVO.avatarUrl" alt="180" />
            </a>
            <div class="info">
              <a class="nickname" href="/u/f38fb8e3f2f0">{{item.userVO.nickname}}</a>
              <span
                data-type="share_note"
                data-datetime="2017-12-18T10:27:40+08:00"
              >{{new Date(item.lastActiveAt).toLocaleString()}}</span>
            </div>
          </div>

          <a class="title" href="/#">{{item.title}}</a>
          <p class="abstract">{{regpassage(item.content)}}</p>
          <div class="meta">
            <a href="/#">
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
                  :fill="isLike ? '#646464' : '#ea6f5a'"
                />
              </svg>
              {{item.likeCount}}
            </a>
            <a href="/#">
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
            <span>
              <i class="el-icon-chat-dot-round"></i> 0
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import API from "@/service/api";
import { mapGetters } from "vuex";
import { types } from "./info";
export default {
  name: "itemCard",
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
    isLike(data){
      return Boolean(data)
    }
  },
  data() {
    return {
      count: 10,
      type:"",
      info: {
        board: "ARTICLE",
        id: "",
        page: 1,
        per_page: 10
      },
      content: [],
      totalPages:0
    };
  },
  mounted() {
    this.type=this.$route.params.type;
    this.getContent(this.$route.params.type);
  },
  methods: {
    getPath() {
      this.type=this.$route.params.type,
      console.log(this.$route.params.type);
    },
    getContent(type) {
      var params = this.info;
      params.type = types[type];
      params.id = this.userId || "";
      API.getBoard(params).then(res => {
       this.content =  this.content.concat(res.content);
        this.totalPages = res.totalPages
      });
    },
    load(){
      console.log('loader',this.content)
      if(this.info.page < 4){
        this.info.page++
        this.getContent(this.type)
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
  width: 80%;
  padding-left: 5%;
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
</style>