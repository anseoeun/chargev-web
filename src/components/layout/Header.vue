<template>
    <div class="header">
        <div class="inner-wrapper">
            <div class="left">
                <h1 class="logo"><router-link to="/"><Icon type="chargev"></Icon></router-link></h1>
            </div>
            <div class="right">
               <div class="gnb-menu">
                   <ul>
                       <li><router-link :to="{ path:'/main', query: { pos: 'chargev' }}" class="gnb-chargev">차지비</router-link></li>
                       <li><router-link :to="{ path:'/main', query: { pos: 'business' }}" class="gnb-business">사업</router-link></li>
                       <li><router-link :to="{ path:'/main', query: { pos: 'notice' }}" class="gnb-notice">공지</router-link></li>
                       <li><router-link :to="{ path:'/main', query: { pos: 'request' }}" class="gnb-request">문의</router-link></li>
                       <li><router-link to="/">충전기 설치신청</router-link></li>
                       <li><router-link to="/culture">채용</router-link></li>
                       <li class="c-green"><router-link to="/">로그인</router-link></li>
                   </ul>
               </div>
               <a href="javascript:void(0);" class="btn-dwn mo-ver">앱 다운로드</a>
               <button class="menu pc-ver"><span></span><span></span><span></span></button>
               <button class="menu mo-ver"><span></span><span></span><span></span></button>
           </div>
        </div>
    </div>
</template>
<script>
export default{
  mounted(){
    this.gnbMenu();
  }
}
</script>
