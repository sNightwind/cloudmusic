<template>
  <div>
    <div class="itemMusicTop">
      <img :src="playlist.coverImgUrl" alt="" class="bgimg" />
      <div class="itemLeft">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
          <use xlink:href="#icon-zuojiantou1"></use>
        </svg>
        <span>歌单</span>
      </div>
      <div class="itemRight">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>

        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-31liebiao"></use>
        </svg>
      </div>
    </div>
    <div class="middle">
      <img :src="playlist.coverImgUrl" alt="" class="touxiang" />
      <span class="name">{{ playlist.name }}</span>
      <!-- <div class="zuozhe">
                <img :src="playlist.creator.avatarUrl" alt="" class="authorTouxiang">
                <span></span>
            </div> -->
      <div class="description">{{ playlist.description }}</div>
    </div>
    <div class="footer">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-chat"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenxiang"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yunduanxiazai"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xuanze-duoxuan-tianchong"></use>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  setup(props) {
    // console.log(props);
    if ((props.playlist.creator = "")) {
      props.playlist.creator = JSON.parse(
        sessionStorage.getItem().playlist
      ).creator;
    }
  },
  props: ["playlist"],
};
</script>
<style lang="less" scoped>
.itemMusicTop {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem;
  position: relative;

  .itemLeft,
  .itemRight {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem;
    position: relative;
    .itemLeft,
    .itemRight {
      width: 25%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 0.2rem;
      span {
        font-size-adjust: 0.4rem;
        color: #fff;
      }
      .icon {
        fill: #fff;
      }
    }
    .bgimg {
      width: 100%;
      height: 11rem;
      position: fixed;
      z-index: -1;
      filter: blur(30px);
    }
  }
  .middle {
    // float: left;
    padding-top: 20px;
    width: 400px;
    height: 160px;
    margin: 0 auto;
    .touxiang {
      width: 150px;
      height: 150px;
      border-radius: 10px;
      float: left;
    }
    .name {
      color: #fff;
      display: block;
      font-weight: 900;
    }
    .description {
      // width: 250px;
      height: 90px;
      color: #fff;
      overflow: hidden;
    }
  }
  .footer {
    width: 390px;
    height: 85px;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    .icon {
      width: 35px;
      height: 35px;
      fill: #fff;
    }

    .icon {
      fill: #fff;
    }
  }

  .bgimg {
    width: 100%;
    height: 11rem;
    position: fixed;
    z-index: -1;
    filter: blur(30px);
  }
}

.middle {
  // float: left;
  padding-top: 20px;
  width: 400px;
  height: 160px;
  margin: 0 auto;

  .touxiang {
    width: 150px;
    height: 150px;
    border-radius: 10px;
    float: left;
  }

  .name {
    color: #fff;
    display: block;
    font-weight: 900;
  }

  .description {
    // width: 250px;
    height: 90px;
    color: #fff;
    overflow: hidden;
  }
}

.footer {
  width: 390px;
  height: 85px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;

  .icon {
    width: 35px;
    height: 35px;
    fill: #fff;
  }
}
</style>
