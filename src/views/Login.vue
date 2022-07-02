<template>
  <div class="contents">
    <div class="login-wrap">
      <div class="inner-wrapper">
        <button @click="status = prevStatus" class="btn-back"><Icon type="arr-back" />뒤로가기</button>
        <div class="login-content">
          <!-- 로그인 -->
          <template v-if="status === 'login'">
            <div class="left">
              <div class="login-menu">
                <ul>
                  <li><button @click="memType='coper'">법인회원 로그인</button></li>
                  <li><button @click="memType='normal'">일반회원 로그인</button></li>
                </ul>
              </div>
            </div>
            <div class="right">
              <div class="form-box">
                  <!-- 법인회원 -->
                  <template v-if="memType === 'coper'">
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
                  </template>
                  <!-- 일반회원 -->
                  <template v-if="memType === 'normal'">
                    <div class="row">
                        <div class="input auto">
                            <Input type="text" v-model="form.phone" placeholder="PHONE" />
                        </div>
                        <div class="right">
                          <button class="btn">인증키 전송</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input">
                            <Input type="text" v-model="form.key" placeholder="인증키" />
                        </div>
                    </div>
                  </template>
                  <div class="row">
                      <button class="btn-more">로그인<Icon type="arr-more" /></button>
                  </div>
                  <div class="row">
                      <p class="join-guide-txt">회원이 아니신가요?</p>
                  </div>
                  <div class="row">
                      <button class="btn-more" @click="status = 'join'">회원가입<Icon type="arr-more" /></button>
                  </div>
              </div>
            </div>
          </template>
          <!-- 회원가입 -->
          <template v-if="status === 'join'">
            <div class="left">
              <div class="login-txt">
                차지비 서비스 이용을 위한
                <br />회원 유형을 선택해주세요.
              </div>
            </div>
            <div class="right">
              <div class="login-menu">
                <ul>
                  <li><button @click="status='coper-rule'">법인회원</button></li>
                  <li><button @click="status='normal-join'">일반회원</button></li>
                </ul>
              </div>              
            </div>
          </template>
          <!-- 일반회원 -->
          <template v-if="status === 'normal-join'">
            <div class="left">
              <div class="login-txt">
                차지비 일반회원 가입은
                <br />모바일앱을 통해 가능합니다.
                <div class="pc-ver"><br />QR을 확인해 주세요.</div>
                <div class="mo-ver">
                  <br />아래의 버튼을 누르면 모바일 앱 다운로드
                  <br />페이지로 이동합니다.
                </div>
              </div>
            </div>
            <div class="right">
              <div class="qr-wrap pc-ver">
                <div class="qr"></div>
              </div>
              <div class="btn-down mo-ver">
                <button class="btn">차지비 모바일 앱 다운로드</button>
              </div>
            </div>
          </template>
          <!-- 법인회원 rule -->
          <template v-if="status === 'coper-rule'">
            <div class="left">
              <div class="login-txt">
                이용약관에 동의해주세요.
              </div>
            </div>
            <div class="right">
              <div class="grid-list-menu">
                <div class="row total">
                  <div class="check">
                      <button  @click="setAllCheck">
                        <Icon type="check" :class="{on: !ruleChecked.includes(false)}" />
                        <span class="txt">전체동의</span>
                      </button>
                  </div>
                </div>
                <div v-for="(item, index) in ruleList" :key="index" class="row">
                  <div class="check">
                      <button  @click="checkIcon($event, 'ruleChecked', index)">
                        <Icon type="check" :class="{on: ruleChecked[index]}" />
                        <span class="txt">{{ item.tit }}</span>
                      </button>
                  </div>
                  <div class="right">
                    <button class="bth-link">
                      <Icon type="arr-right2" />
                    </button>
                  </div>
                </div>
              </div>
              <div class="btn-more-wrap">
                <button class="btn-more" @click="status='coper-input'">다음<Icon type="arr-more" /></button>
              </div>
            </div>
          </template>
          <!-- 법인회원 input -->
          <template v-if="status === 'coper-input'">
            <div class="left">
              <div class="login-txt">
                로그인 시 사용할 계정과
                <br />비밀번호를 입력해주세요.
              </div>
            </div>
            <div class="right">
              <div class="form-box">
                  <div class="row">
                      <div class="input">
                          <Input type="text" v-model="form.email" placeholder="EMAIL" />
                      </div>
                  </div>
                  <div class="row">
                      <div class="input">
                          <Input type="password" v-model="form.password" placeholder="비밀번호" />
                      </div>
                  </div>
                  <div class="row">
                      <div class="input">
                          <Input type="password" v-model="form.password2" placeholder="비밀번호 확인" />
                      </div>
                  </div>
              </div>
              <div class="btn-more-wrap">
                <button class="btn-more" @click="status='coper-upload'">다음<Icon type="arr-more" /></button>
              </div>
            </div>
          </template>
          <!-- 법인회원 upload -->
          <template v-if="status === 'coper-upload'">
            <div class="left">
              <div class="login-txt">
                법인회원 인증을 위한
                <br />자료를 업로드해주세요.
              </div>
            </div>
            <div class="right">
              <div class="form-box">
                  <div class="row">
                      <div class="input">
                          <Input type="text" v-model="form.name" placeholder="사업자명" />
                      </div>
                  </div>
                  <div class="row">
                      <div class="input auto">
                          <Input type="text" v-model="form.password" placeholder="사업자등록증" />
                      </div>
											<div class="right">
												<button class="btn">등록하기</button>
											</div>
                  </div>
              </div>
              <div class="btn-more-wrap">
                <button class="btn-more" @click="status='coper-payment'">다음<Icon type="arr-more" /></button>
              </div>
            </div>
          </template>
          <!-- 법인회원 payment -->
          <template v-if="status === 'coper-payment'">
            <div class="left">
              <div class="login-txt">
								충전요금결제를 위한
								<br />결제정보를 등록해주세요.
								<br />
								<br />차량등록 후 법인카드로
								<br />일괄 결제하거나,
								<br />개인카드로 별도 결제하도록
								<br />할 수 있습니다.
              </div>
            </div>
            <div class="right">
              <div class="form-box">
                  <div class="row">
                      <div class="input">
                          <Input type="number" v-model="form.cardnum" placeholder="카드번호" />
                      </div>
                  </div>
                  <div class="row">
                      <div class="input">
                          <Input type="text" v-model="form.date" placeholder="유효기간" />
                      </div>
                  </div>
                  <div class="row">
                      <div class="input">
                          <Input type="text" v-model="form.password2" maxlength="2" placeholder="비밀번호 앞2자리" />
                      </div>
                  </div>
              </div>
              <div class="btn-more-wrap">
                <button class="btn-more" @click="status='coper-complete'">다음<Icon type="arr-more" /></button>
              </div>
            </div>
          </template>
          <!-- 법인회원 complete -->
          <template v-if="status === 'coper-complete'">
            <div class="left">
              <div class="login-txt">
								회원가입이 완료되었습니다.
								<br />차량을 등록해주세요.
              </div>
            </div>
            <div class="right">
              <div class="login-menu">
                <ul>
                  <li><button>법인차량 등록하기</button></li>
                </ul>
              </div>
              <div class="btn-more-wrap">
                <button class="btn-more">나중에 등록<Icon type="arr-more" /></button>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="line-bar"></div>
  </div>
</template>

<script>

export default {
  components: {

  },

  data(){
    return{
      prevStatus: '',
      status: 'login',
      form:{

      },
      memType: 'normal',

      ruleChecked: new Array(5).fill(false),
      ruleList: [
        {
          tit: '서비스 이용약관 [필수]',
          link: '/'
        },
        {
          tit: '개인정보처리방침 [필수]',
          link: '/'
        },
        {
          tit: '위치기반서비스 이용약관 [필수]',
          link: '/'
        },
        {
          tit: '휴대폰본인확인서비스 [필수]',
          link: '/'
        },
        {
          tit: '마케팅 이용 동의 [선택]',
          link: '/'
        },
      ],      
    }
  },
  watch:{
    status(val, prevVal){
      this.prevStatus = prevVal
    }
  },
  methods: {
    setAllCheck(){
      let num = this.ruleChecked.length - 1;
      let check = !this.ruleChecked.includes(false) ? false : true
      for(let i=0;i<=num;i++){
        this.$set(this.ruleChecked, i, check);
      }
    },
  }
}
</script>
