<template>
  <div class="contents">
    <div class="section">
      <div class="charger-apply-wrap">
        <h2 class="title-type1">충전기 설치신청</h2>
        <h3 class="title-type2">충전기 ONE STOP 프로세스</h3>
        <div class="text-type1">
            <em>CHARGEV</em>는 설치신청에서 충전기 사용까지
            <br class="pc-ver" />전 과정에 대해 <em>밀착 관리 및 서비스</em>를 지원합니다.    
        </div>
        <div class="process-step">
          <ol>
            <li v-for="(item, index) in processStepList" :key="index">
              <Icon v-if="index != 0" type="arr-right" />
              <div class="cont">
                <strong class="bold" v-html="item.order"></strong>
                <p v-html="item.cont"></p>
              </div>
            </li>
          </ol>
        </div>
        <div class="text-type3">
            충전기 설치신청은 모바일 앱을 통해 간편회원가입 후 진행 가능합니다.
            <br />앱을 다운로드 하지 않고 설치를 원할 경우 설치신청 버튼을 통해 접수해주세요.  
        </div>
        <div class="btn-more-wrap">
          <button class="btn-more">모바일 앱 다운로드<Icon type="arr-more" /></button>
          <button class="btn-more" @click="layerPop.PopChargerApply=true;">설치신청<Icon type="arr-more" /></button>
        </div>
        <div class="text-type3">
            ※ 자세한 설치 진행상황은 <br class="mo-ver">앱을 통해서 접수한 경우에만 확인 가능합니다.
        </div>
        <div class="text-type3">
            기존 신청 이력은 아래의 버튼을 눌러 <br class="mo-ver">확인 가능합니다.
        </div>
        <div class="btn-more-wrap">
          <button class="btn-more" @click="layerPop.PopChargerApplyCheck=true;">신청내역 확인<Icon type="arr-more" /></button>
        </div>        
      </div>
    </div>
    
    <PopChargerApply :visible="layerPop.PopChargerApply" :status="status" @close="layerPop.PopChargerApply = false" />
    <PopChargerApplyCheck :visible="layerPop.PopChargerApplyCheck" :status="status" @close="layerPop.PopChargerApplyCheck = false" />
  </div>
</template>

<script>
import PopChargerApply from '@/views/PopChargerApply'
import PopChargerApplyCheck from '@/views/PopChargerApplyCheck'
export default {
  components: {
    PopChargerApply,
    PopChargerApplyCheck
  },  
  data(){
    return {
      status: '',
      processStepList: [
        {
          order: '신청접수',
          cont: 'WEB 또는 APP을 <br class="mo-ver" />통해 홈충전기 신청 접수'
        },
        {
          order: '현장실사',
          cont: '해피콜 진행 후 <br class="mo-ver" />현장실사 요건 분석'
        },
        {
          order: '계약진행<br />서류접수',
          cont: '견적 전달 및 <br class="mo-ver" />설치 금액 결제'
        },
        {
          order: '공사 시작',
          cont: '충전기 설치 및 <br class="mo-ver" />한전 계량기 설치공사 진행'
        },
        {
          order: '사용전<br />검사/점검',
          cont: '전기안전검사 진행'
        },
        {
          order: '충전기 사용',
          cont: '충전기 사용'
        },
      ],
      layerPop: {
        PopChargerApply: false,
        PopChargerApplyCheck: false,
      }      
    }
  }
}
</script>