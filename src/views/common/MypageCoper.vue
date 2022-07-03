<template>
    <div class="box-wrap">
      <div class="box">
        <strong class="box-tit">주식회사 가가가</strong>
      </div>
      <!--  -->
      <div class="box">
        <strong v-if="paymentStatus === 'complate'" class="box-tit">법인회원정보</strong>
        <strong v-if="paymentStatus === 'modify'" class="box-tit">정보</strong>
        <div class="form-box">
          <div class="row-label">E-MAIL</div>
          <div class="row">
            <div class="txt auto">
              CORPORATION@CORP.CO.KR
            </div>
          </div>
          <div class="row-label">전화번호</div>
          <div class="row">
            <div class="input auto">
              <Input type="text" placeholder="담당자 전화번호 입력" />
            </div>
            <div class="right">
              <button class="btn">저장</button>
            </div>
          </div>

          <template v-if="paymentStatus === 'complate'">
            <div class="row-label">결제정보</div>
            <div class="row">
              <div class="txt auto">
                [삼성]1234-****-****-1234
              </div>
              <div class="right">
                <button class="btn" @click="paymentStatus='modify'">변경</button>
              </div>
            </div>
          </template>

          <template v-if="paymentStatus === 'modify'">
            <div class="row-label">결제정보변경</div>
            <div class="row">
              <div class="input auto">
                <Input type="number" placeholder="카드번호" />
              </div>
            </div>
            <div class="row">
              <div class="input auto">
                <Input type="number" placeholder="유효기간" />
              </div>
            </div>
            <div class="row">
              <div class="input auto">
                <Input type="number" maxlength="2" placeholder="비밀번호 앞2자리" />
              </div>
            </div>
            <div :class="[{'btn-wrap': ver === 'pc'}, {'btn-more-wrap': ver === 'mo'}]">
              <button :class="[{'btn': ver === 'pc'}, {'btn-more': ver === 'mo'}]" @click="paymentStatus='complate'">변경<Icon v-if="ver === 'mo'" type="arr-more" /></button>
            </div>
          </template>

        </div>
      </div>
      <!--  -->
      <div class="box">
        <strong class="box-tit">차량관리</strong>
        <div v-for="(item, index) in carList" :key="index" class="form-box">
          <div class="row">
            <div class="txt auto">
              {{ item.number }}
            </div>
            <div class="right">
              <button class="btn">삭제</button>
            </div>
          </div>
          <div v-if="item.user" class="row">
            <div class="txt auto">
              등록자: {{ item.user }}
            </div>
            <div class="righ">
              <button class="btn">등록해제</button>
            </div>
          </div>
          <div v-if="item.shareKey" class="row">
            <div class="txt auto">
              공유키: {{ item.shareKey }}
            </div>
            <div class="righ">
              <button class="btn gray">미등록</button>
            </div>
          </div>
          <div class="row">
            <div class="auto">
              <div class="pad">
                <label class="inp-check">
                  <input type="checkbox" v-model="form.registration[index]">
                  <span class="ic"></span>
                  <span class="t">자동차등록증</span>
                </label>
              </div>
            </div>
            <div class="right">
              <button class="btn white">인증완료</button>
              <button class="btn">업로드</button>
            </div>
          </div>
          <div class="row">
            <div class="auto">
              <div class="pad">
                <label class="inp-radio">
                  <input type="radio" :name="`${'payment'+index}`" value="coper" v-model="form.payment[index]">
                  <span class="ic"></span>
                  <span class="t">법인카드 결제</span>
                </label>
                <label class="inp-radio">
                  <input type="radio" :name="`${'payment'+index}`" value="person" v-model="form.payment[index]">
                  <span class="ic"></span>
                  <span class="t">개인카드 결제</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="form-box">
          <div class="row">
            <div class="input auto">
              <Input type="text" placeholder="차량번호" />
            </div>
            <div class="right">
              <button class="btn">차량추가</button>
            </div>
          </div>
          <div class="row">
            <div class="auto">
              <div class="pad">
                <label class="inp-radio">
                  <input type="radio"  :name="`${'payment'+carList.length}`" value="coper" v-model="form.payment[carList.length]">
                  <span class="ic"></span>
                  <span class="t">법인카드 결제</span>
                </label>
                <label class="inp-radio">
                  <input type="radio" :name="`${'payment'+carList.length}`" value="person" v-model="form.payment[carList.length]">
                  <span class="ic"></span>
                  <span class="t">개인카드 결제</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="btn-more-wrap">
          <button class="btn-more">적용<Icon type="arr-more" /></button>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  data(){
    return{
     ver: '',      
     paymentStatus: 'complate',

     form: { 
      registration: [],
      payment: []
     },

     carList: [
      {
        number: '10가1234',
        user: '김김김'
      },
      {
        number: '99호9292',
        user: '김김김'
      },
      {
        number: '99호9292',
        shareKey: 'Q672-ZZB4'
      }
     ]

    }
  },
  mounted(){
    this.sizeCheck();
    window.addEventListener('resize', function(){
      this.sizeCheck();
   }.bind(this)); 
  },
}
</script>
