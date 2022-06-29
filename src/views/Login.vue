<template>
  <div class="contents">
    <div class="login-wrap">
      <div class="inner-wrapper">
        <router-link to="/" class="btn-back"><Icon type="arr-back" />뒤로가기</router-link>
        <div class="login-content">
          <div class="login-menu">
            <ul>
              <li><button>법인회원 로그인</button></li>
              <li><button>일반회원 로그인</button></li>
            </ul>
          </div>
          <div class="login-form">
            <!-- 법인회원 -->
            <div class="form-box">
                <div class="row">
                    <div class="input">
                        <Input type="text" v-model="form.email" placeholder="EMAIL" />
                    </div>
                </div>
                <div class="row">
                    <div class="input">
                        <Input type="text" v-model="form.pw" placeholder="비밀번호" />
                    </div>
                </div>
                <div class="row">
                    <button class="btn-more">로그인<Icon type="arr-more" /></button>
                </div>
                <div class="row">
                    <p class="login-txt"><router-link to="/" class="txt-link">회원이 아니신가요?</router-link></p>
                </div>
                <div class="row">
                    <button class="btn-more">회원가입<Icon type="arr-more" /></button>
                </div>
            </div>
            <!-- 일반회원 -->
            <div class="form-box">
                <div class="row">
                    <div class="input auto">
                        <Input type="text" v-model="form.PHONE" placeholder="PHONE" />
                    </div>
                    <div class="right">
                      <button class="btn" @click="btmLayer.PopAddr = true">우편번호</button>
                    </div>
                </div>
                <div class="row">
                    <div class="input">
                        <Input type="text" v-model="form.key" placeholder="인증키" />
                    </div>
                </div>
                <div class="row">
                    <button class="btn-more">로그인<Icon type="arr-more" /></button>
                </div>
                <div class="row">
                    <p class="login-txt"><router-link to="/" class="txt-link">회원이 아니신가요?</router-link></p>
                </div>
                <div class="row">
                    <button class="btn-more">회원가입<Icon type="arr-more" /></button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {

  },

  data(){
    return{
      form:{

      }
    }
  },
}
</script>
