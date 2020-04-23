<template>
  <div class="page-home">
     <header class="index-header">
    <a href="mine.html?cpid=0">
       <div class="header-user">
             <div class="user-btn"></div>
       </div>
    </a>
    <div class="header-logo"></div>
    <a href="search.html?cpid=0">
       <div class="header-search"></div>
    </a>
</header>
  </div>
</template>
<script>
export default {
  name: 'Home'
}
</script>
<style lang="scss" scoped>
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;
  .index-header{
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: 0 16px;
    height: 38px;
    box-sizing: border-box;
   .user-btn{
     width: 21px;
     height: 21px;
     background:url('../../assets/icon/user.png') no-repeat;
     background-size: 100%;
   }
   .header-logo{
     width: 79px;
     height: 24px;
     background:url('../../assets/icon/logo.png') no-repeat;
     background-size: 100%;
   }
   .header-search{
     width: 21px;
     height: 21px;
     background:url('../../assets/icon/search.png') no-repeat;
     background-size: 100%;
   }

  }
}
</style>
