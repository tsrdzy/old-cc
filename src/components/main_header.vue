<template>
  <header>
    <div class="header">
      <div class="left">
        <div class="logo">
          <h2 class="iconfont logo_img">&#xe7fa;</h2>
          <h1>MCBOX</h1>
        </div>
        <ul class="nav">
          <li>ChestCommands Editor</li>
        </ul>
      </div>
      <div class="right">
        <div class="login">
          <div class="head_img"></div>
          <div class="name"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "main_header",
};
</script>

<style lang="less" scoped>
header {
  color: rgb(25, 25, 25);
  text-shadow: 0 0 2px rgba(0, 0, 0, 1);
  width: 100%;
  height: 60px;

  .header {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;

    .left {
      display: flex;

      .logo {
        display: flex;

        .logo_img {
          font-size: 30px;
          line-height: 32px;
          text-align: center;
          margin: 14px 5px;
          width: 32px;
          height: 32px;
        }

        h1 {
          height: 60px;
          line-height: 60px;
          font-size: 18px;
        }
      }

      .nav {
        display: flex;
        height: 60px;
        margin: 0 10px;

        li {
          height: 60px;
          line-height: 60px;
          text-align: center;
          width: 100%;
          font-size: 16px;
          a {
            color: rgb(25, 25, 25);
          }
        }
      }
      .router {
        font-weight: bolder;
        text-shadow: 0 0 5px rgb(90, 90, 90);
        border-bottom: 4px solid rgba(0, 0, 0, 0.5);
        transition: all 0.1s;
        border-radius: 4px;
      }
    }
  }
}
</style>
