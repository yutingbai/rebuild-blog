<template>
  <div>
    <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
    <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
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
   data () {
      return {
        count: 0
      }
    },
    methods: {
      load () {
        this.count += 2
      }
    }
};
</script>
<style scoped>
.card {
  line-height: 70px;
  margin: 0 auto;
  width: 60%;
  height: 200px;
  /* border-top: 1px solid #999; */
  border-bottom: 1px solid #999;
  margin-top: 3px;
  /* font-size: 14px; */
  overflow: hidden;
}

.card div {
  float: left;
  margin-right: 15px;
}

.titleBox {
  width: 30%;

  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pay {
  margin-left: 20px;
  font-size: 14px;
  color: red;
}

.need {
  font-size: 12px;
  color: #666;
  text-align: center;
  width: 20%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.userBox {
  font-size: 14px;
}

.userBox img {
  margin: 10px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
}

.button span {
  padding: 3px;
  color: #fff;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 0 1px #ccc;
  background-color:
                /* rgb(249,205,173) */ #df8c7a;
}
</style>