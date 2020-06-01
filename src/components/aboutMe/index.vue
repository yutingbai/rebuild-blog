<template>
  <div>
    <ul class="cardList">
      <li v-for="i in count" :key="i" class="card">
        <div class="content">
          <div class="author">
            <a class="avatar" href="/users/f38fb8e3f2f0">
              <img
                src="https://user-gold-cdn.xitu.io/2019/3/9/169616bd57e84912?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1"
                alt="180"
              />
            </a>
            <div class="info">
              <a class="nickname" href="/u/f38fb8e3f2f0">实心爆米花</a>
              <span
                data-type="share_note"
                data-datetime="2017-12-18T10:27:40+08:00"
              >收藏了你的文章 · 2019.12.18 10:27</span>
            </div>
          </div>

          <a class="title" href="/p/8b6a58efc237">在Windows10系统下安装Ubuntu系统</a>
          <p
            class="abstract"
          >准备工作 1.首先对电脑磁盘进行分区 在windows界面找计算机→右键管理→磁盘管理，装Ubuntu分配的硬盘大小最好是30G以上，不要太小。 2.下载Ubuntu系统文件...</p>

          <div class="meta">
            <a href="/p/8b6a58efc237">
              <i class="el-icon-star-on"></i> 126
            </a>
            <a href="/p/8b6a58efc237">
              <i class="el-icon-view"></i> 0
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
export default {
  name: "itemCard",
  props: {
    item: {
      author: Object
    }
  },
  created() {
    console.log(this.item);
  },
  data() {
    return {
      count: 10
    };
  },
  methods: {}
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