<template>
  <div class="contents" style="padding:2rem">
    <h2 class="guide-tit">인풋 스타일</h2>
    <Input type="text" v-model="form.form1" placeholder="text 인풋" />
    <Input type="number" v-model="form.form1" placeholder="number 인풋" maxlength="6" />

    <h2 class="guide-tit">form-box 내부 인풋</h2>    
    <div class="form-box-wrap">
        <div class="form-box">
          <div class="row">
              <div class="input auto">
                  <Input type="text" v-model="form.form1" placeholder="text 인풋" />
              </div>
              <div class="right">
                <button class="btn">버튼</button>
              </div>
          </div>
          <div class="row">
              <div class="input auto">
                  <Input type="text" v-model="form.form1" placeholder="text 인풋" />
              </div>
              <div class="right">
                <button class="btn white">white 버튼</button>
                <button class="btn gray">gray 버튼</button>
              </div>
          </div>
          <div class="row">
              <div class="input">
                  <Input type="number" v-model="form.form1" placeholder="number 인풋" maxlength="6" />
              </div>
          </div>
        </div>   
        <div class="btn-wrap">
            <button class="btn-type1 st2">확인</button>
        </div>
    </div>    

    <h2 class="guide-tit">첨부파일 인풋</h2>    
    <div class="inp-row inp-file">
        <input type="file" @change="handleFileChange($event, 'file')" />
        <div class="input auto">
            <Input type="text" v-model="form.file" placeholder="사업자등록증" />
        </div>
        <div class="right">
          <button class="btn">등록하기</button>
        </div>
    </div>  

    <h2 class="guide-tit">체크버튼 단독</h2>    
      <label class="inp-check">
        <input type="checkbox" v-model="form.checkbox">
        <span class="ic"></span>
        <span class="t">자동차등록증</span>
      </label>

    <h2 class="guide-tit">라디오버튼 단독</h2>    
      <label class="inp-radio">
        <input type="radio" name="payment" value="coper" v-model="form.payment">
        <span class="ic"></span>
        <span class="t">법인카드 결제</span>
      </label>
      &nbsp;&nbsp;&nbsp;
      <label class="inp-radio">
        <input type="radio" name="payment" value="person" v-model="form.payment">
        <span class="ic"></span>
        <span class="t">개인카드 결제</span>
      </label>


    <h2 class="guide-tit">체크 리스트</h2>    
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
        </div>
      </div>

  </div>
</template>
<script>
export default {
    components:{

    },  
    data(){
      return{
        form: {
          file: '',
          checkbox: false,
          payment: []
        },
        ruleChecked: new Array(5).fill(false),
        ruleList: [
          {
            tit: '서비스 이용약관 [필수]',
          },
          {
            tit: '개인정보처리방침 [필수]',
          },
          {
            tit: '위치기반서비스 이용약관 [필수]',
          },
          {
            tit: '휴대폰본인확인서비스 [필수]',
          },
          {
            tit: '마케팅 이용 동의 [선택]',
          },
        ],    

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
      handleFileChange(e, val){
        this['form'][val] = e.target.value
      }      
    }
};
</script>
<style scoped>
.guide-line{border-top:1px dotted #fff;margin:3rem 0;}
.guide-tit{font-weight: bold; border: 1px solid #fff;padding:0.252rem;margin-bottom:1rem;background: #f9f9f9;color: #000;}
.guide-tit ~ .guide-tit{margin-top:3rem;}
</style>


