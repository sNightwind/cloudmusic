<template>
  <div>
    <van-skeleton title="标题" :row="3" :loading="false">
      <div class ="main" v-for="event in events.events" :key="event">
        <div class="trend">
          <div class="trendTop">
            <img class="profileImg" :src="user.profile.avatarUrl" />
            <span class="profileName">{{ user.profile.nickname }}</span>
            <span class="eventTime">{{ formateTime(event.eventTime) }}</span>
            <span class="shareSong">分享单曲</span>
          </div>
          <div class="trendBody">
            <div class="trendContent">{{ getTrendContent(event.json) }}</div>
            <br />
            <div class="trendSong">
              <img
                class="trendSongImg"
                :src="getSongImg(getTrendSong(event.json))"
              />
              <div class="trendSongDetail">
                <span class="trendSongTitle">{{
                  getTrendSong(event.json).name
                }}</span>
                <span class="trendSongArtist">{{
                  getTrendSong(event.json).artists[0].name
                }}</span>
              </div>
            </div>
          </div>
          <div class="trendBottom"></div>
        </div>
      </div>
    </van-skeleton>
  </div>
</template>
<script>
import { getUserTrends } from "@/request/api/my.js";
export default {
  template: {},
  data() {
    return {
      user: {},
      events: {},
      // eventsDetail: {},
    };
  },
  async created() {
    try {
      //从本地获取userDetail信息
      let tempUser = JSON.parse(localStorage.getItem("user"));
      if (tempUser != null) {
        this.user = tempUser;
        let events = await getUserTrends(this.user.profile.userId);
        this.events = events.data;
        console.log(events.data);
      }
      //   console.log(tempUser);
    } catch (error) {
      console.error("获取本地user出错");
    }
  },
  methods: {
    formateTime: function (time) {
      var time = new Date(time);
      var year = time.getFullYear();
      var month =
        time.getMonth() + 1 > 9
          ? time.getMonth() + 1
          : 0 + (time.getMonth() + 1);
      var date = time.getDate() > 9 ? time.getDate() : 0 + time.getDate();
      var hour = time.getHours() > 9 ? time.getHours() : 0 + time.getHours();
      var minute =
        time.getMinutes() > 9 ? time.getMinutes() : 0 + time.getMinutes();
      var second =
        time.getSeconds() > 9 ? time.getSeconds() : 0 + time.getMinutes();

      return year + "年" + month + "月" + date + "日";
    },
    getTrendContent: function (json) {
      // console.log(JSON.parse(json));
      return JSON.parse(json).msg;
    },
    getTrendSong: function (json) {
      return JSON.parse(json).song;
    },
    getSongImg: function (song) {
      // let url = song.img80x80
      // if()
      return song.album.blurPicUrl;
    },
  },
};
</script>
<style lang="less" scoped>
.main{
  display: flex;
  height: auto;
.trend {
  width: 100%;
  height: auto;
  .trendTop {
    width: 100%;
    display: flex;
    align-items: center;
    .profileImg {
      width: 12%;
      height: 12%;
      border-radius: 50%;
    }
    .profileName {
      font-weight: 500;
    }
  }
  .trendBody {
    width: 100%;
    height: auto;
    background-color: lightgray;
    border-radius: 10px;
    // display: flex;
    .trendContent {
      // width: 100%;
      height: auto;
    }
    .trendSong {
      .trendSongImg {
        height: 12%;
        width: 12%;
      }
      .trendSongDetail {
        flex-direction: column;
        align-items: center;
      }
    }
  }
}}
</style>
