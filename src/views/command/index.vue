<template>
  <div class="command">
    <!--搜索框-->
    <div class="search">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        input-align="center"
      />
    </div>
    <!--电台banner-->
    <van-tabs v-model="active">
      <van-tab
        v-for="category in categories"
        :key="category.targetId"
        :title="category.typeTitle"
      >
        <van-image
          :key="category.targetId"
          width="100%"
          height="10rem"
          fit="cover"
          :src="category.pic"
        />
      </van-tab>
    </van-tabs>

    <!--电台推荐-->
    <van-row type="flex" justify="space-around">
      <van-col span="10" v-for="item in recommend" class="djr">
        <van-image
          :key="item.id"
          width="10rem"
          height="10rem"
          fit="cover"
          :src="item.picUrl"
          :alt="item.name"
          @click="jumpToDetail(item.id)"
        >
          <p style="centre">{{ item.rcmdText }}</p>
        </van-image>
      </van-col>
    </van-row>
  </div>
</template>

<script>
// import Vue from 'vue'
// import { Tabbar, TabbarItem ,Search  } from 'vant'
import { getCategories } from "@/api/command";
import {
  getDjRadios,
  getProgram,
  getRecommend,
  getDjDetail,
} from "@/api/command";
// import { Image } from 'vant';
// Vue.use(VanImage);
// Vue.use(Search);
// Vue.use(Tabbar);
// Vue.use(TabbarItem);
export default {
  name: "",
  data() {
    return {
      value: "",
      active: 0,
      categories: [], //所有分类
      DjRadios: [], //电台推荐，未使用
      action: 0,
      program: [], //电台详情
      recommend: [], //电台个性推荐
    };
  },
  methods: {
    jumpToDetail(rid) {
      console.log("传递前获取到的rid" + rid);
      this.$router.push({
        path: "/program/?rid=" + rid,
        params: {
          rid,
        },
      });
      // '/program?rid='+rid
    },
  },
  async created() {
    try {
      // const[
      //     {
      //         data: categories
      //         }
      // ]=await Promise.all([
      //     getCategories()
      // ])
      let res = await getCategories();
      // console.log(res)
      this.categories = res.data.data;

      // const[
      //     {
      //         djRadios: djRadios
      //         }
      // ]=await Promise.all([
      //     getDjRadios()
      // ])
      let res2 = await getDjRadios();
      let tempRadios = [];
      for (let i = 0; i < 6 || i >= res2.data.djRadios.length; i++) {
        tempRadios.push(res2.data.djRadios[i]);
      }
      // this.DjRadios = res2.data.djRadios;
      this.DjRadios = tempRadios;
      // console.log(this.DjRadios)

      // let res3 = await getProgram()
      // this.program = res3.data.programs

      // console.log(this.program);
      // const[
      //     {
      //         programs: program
      //     }
      // ]=await Promise.all([
      //     getProgram()
      // ])
      // this.program = program
      // console.log(program)
      let res4 = await getRecommend();
      // console.log(res4.data.data)
      this.recommend = res4.data.data;

      let res6 = await getDjDetail();
      // console.log(res6.data.data)
      this.program = res6.data.data;
    } catch (error) {
      console.log("有错误", error);
    }
  },
};
</script>

<style scoped>
.search {
  flex: 1;
  padding-top: 0 12px;
}
</style>
