<template>
    <div class="box-wrap">
      <div class="box">
        <strong class="box-tit">김김김</strong>
      </div>
      <!--  -->
      <div class="box">
        <strong class="box-tit">회원정보</strong>
        <div class="form-box">
          <div class="row-label">E-MAIL</div>
          <div class="row">
            <div class="txt auto">
              CORPORATION@CORP.CO.KR
            </div>
          </div>
          <div class="row-label">주소</div>
          <div class="row">
            <div class="txt auto">
              서울시 송파구 올림픽로 300
            </div>
          </div>
          <div class="row-label">전화번호</div>
          <div class="row">
            <div class="txt auto">
              010-0202-4101
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
        <strong class="box-tit">결제정보</strong>
        <div class="form-box">

          <div class="row-label">결제정보</div>
          <div class="row"> 
            <div class="txt auto">
              [삼성]1234-****-****-1234
            </div>
            <div class="right">
              <button class="btn">삭제</button>
            </div>
          </div>

          <template v-if="paymentAdd">
            <div class="row-label">결제정보추가</div>
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
          </template>
            <div :class="[{'btn-wrap': ver === 'pc'}, {'btn-more-wrap': ver === 'mo'}]">
              <button v-if="!paymentAdd" :class="[{'btn': ver === 'pc'}, {'btn-more': ver === 'mo'}]" @click="paymentAdd=true">추가<Icon v-if="ver === 'mo'" type="arr-more" /></button>
              <button v-else :class="[{'btn': ver === 'pc'}, {'btn-more': ver === 'mo'}]" @click="paymentAdd=false">확인<Icon v-if="ver === 'mo'" type="arr-more" /></button>
            </div>
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
          <div class="row">
            <div class="txt auto">
              {{ item.number2 }}
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
     paymentAdd: false,

     form: { 
      registration: [],
      payment: []
     },

     carList: [
      {
        number: '10가1234',
        number2: '1010-0101-1234-1234'
      },
      {
        number: '99호9292',
        number2: '1010-0101-1234-1234'
      },
      {
        number: '00나0001',
         number2: '1010-0101-1234-1234'
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
