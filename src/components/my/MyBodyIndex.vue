<template>
  <div>
    <h4>基本信息</h4>
    <span
      >村龄：
      <span>{{ formatYear(user.createDays) }}年 ({{ user.createDays }}天)</span>
    </span>
    <br />
    <span
      >性别：
      <span>{{ (user.profile.gender = 1 ? "男" : "女") }}</span>
    </span>
    <br />
    <span
      >年龄：
      <span>{{ formatDay(user.profile.birthday) }}</span>
    </span>
    <br />
    <span
      >个人简介：
      <span>{{ user.profile.signature }}</span>
    </span>
    <br />
  </div>
</template>
<script>
export default {
  template: {},
  data() {
    return {
      user: {},
    };
  },
   created() {
    try {
      //从本地获取userDetail信息
      let tempUser = JSON.parse(localStorage.getItem("user"));
      if (tempUser != null) {
        this.user = tempUser;
      }
    //   console.log(tempUser);
    } catch (error) {
      console.error("获取本地user出错");
    }
  },
  methods: {
    formatYear: function (value) {
      let temp = value / 365;
      return temp.toFixed(2);
    },
    formatDay: function (value) {
      let birthday = this.formateTime(value);
      return birthday;
    },
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

      let jilinghou = this.jijihou(year);
      let xingzuo = this.xingzuo(month, date);
      return jilinghou + "后 " + xingzuo;
    },
    jijihou: function (year) {
      year = year.toString();
      let lastTwoWord = year.substr(-2);
      return lastTwoWord;
    },
    xingzuo: function (month, date) {
      let value = "";
      if ((month == 1 && date >= 20) || (month == 2 && date <= 18)) {
        value = "水瓶座";
      }
      if (month == 1 && date > 31) {
        value = "Huh?";
      }
      if ((month == 2 && date >= 19) || (month == 3 && date <= 20)) {
        value = "双鱼座";
      }
      if (month == 2 && date > 29) {
        value = "Say what?";
      }
      if ((month == 3 && date >= 21) || (month == 4 && date <= 19)) {
        value = "白羊座";
      }
      if (month == 3 && date > 31) {
        value = "OK. Whatever.";
      }
      if ((month == 4 && date >= 20) || (month == 5 && date <= 20)) {
        value = "金牛座";
      }
      if (month == 4 && date > 30) {
        value = "I'm soooo sorry!";
      }
      if ((month == 5 && date >= 21) || (month == 6 && date <= 21)) {
        value = "双子座";
      }
      if (month == 5 && date > 31) {
        value = "Umm ... no.";
      }
      if ((month == 6 && date >= 22) || (month == 7 && date <= 22)) {
        value = "巨蟹座";
      }
      if (month == 6 && date > 30) {
        value = "Sorry.";
      }
      if ((month == 7 && date >= 23) || (month == 8 && date <= 22)) {
        value = "狮子座";
      }
      if (month == 7 && date > 31) {
        value = "Excuse me?";
      }
      if ((month == 8 && date >= 23) || (month == 9 && date <= 22)) {
        value = "室女座";
      }
      if (month == 8 && date > 31) {
        value = "Yeah. Right.";
      }
      if ((month == 9 && date >= 23) || (month == 10 && date <= 22)) {
        value = "天秤座";
      }
      if (month == 9 && date > 30) {
        value = "Try Again.";
      }
      if ((month == 10 && date >= 23) || (month == 11 && date <= 21)) {
        value = "天蝎座";
      }
      if (month == 10 && date > 31) {
        value = "Forget it!";
      }
      if ((month == 11 && date >= 22) || (month == 12 && date <= 21)) {
        value = "人马座";
      }
      if (month == 11 && date > 30) {
        value = "Invalid Date";
      }
      if ((month == 12 && date >= 22) || (month == 1 && date <= 19)) {
        value = "摩羯座";
      }
      if (month == 12 && date > 31) {
        value = "No way!";
      }
      return value;
    },
  },
};
</script>
