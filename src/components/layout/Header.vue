<template>
    <div class="header">
        <div class="left">
            <h1 class="logo"></h1>
        </div>
       <div class="right">
           <div class="gnb-menu">
               <ul>
                   <li><router-link to="/">차지비</router-link></li>
                   <li><router-link to="/">사업</router-link></li>
                   <li><router-link to="/">공지</router-link></li>
                   <li><router-link to="/">문의</router-link></li>
                   <li><router-link to="/">충전기 설치신청</router-link></li>
                   <li><router-link to="/">채용</router-link></li>
                   <li><router-link to="/">로그인</router-link></li>
               </ul>
           </div>
           <button class="menu"></button>
       </div>
    </div>
</template>
<script>
export default{
  data(){
      return { }
  }
}
</script>
