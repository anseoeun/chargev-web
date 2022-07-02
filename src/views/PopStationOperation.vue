<template>
    <LayerPopup :visible="visible" @close="$emit('close');" class="layer-full-popup pop-station-operation" >
      <template slot="content">
          <h2 class="layer-title">STATION OPERATION</h2>
          <div class="text-type3">
            충전기 설치부터 운영, 민원대응까지.
            <br />복잡한 충전소 운영을 차지비가 해드립니다.
          </div>

          <h2 class="layer-title">WHY CHARGEV?</h2>
          <ul class="img-list">
            <li v-for="(item, index) in stationList" :key="index">
              <div class="box">
                <div class="left">
                  <div class="img"><img v-if="item.src" :src="item.src" alt=""/></div>
                </div>
                <div class="right">
                  <div class="desc">
                    <strong class="tit">{{ item.tit }}</strong>
                    <p class="exp" v-html="item.cont"></p>
                  </div>
                </div>
              </div>
            </li>            
          </ul>        

          <h2 class="layer-title">충전소 위탁운영 프로세스</h2>  
          <div class="operation-process-content">
            내용
          </div>
          <div class="process-step">
            <ol>
              <li v-for="(item, index) in processStepList" :key="index">
                <Icon v-if="index != 0" type="arr-right" />
                <div class="cont">
                  <strong>{{ item.order }}</strong>
                  <p>{{ item.cont }}</p>
                </div>
              </li>
            </ol>
          </div>

          <div class="text-type3 layer-btm">B2B 솔루션 담당자에게 연락을 원하실 경우 아래의 버튼을 눌러 진행해주세요.</div>
          <div class="btn-more-wrap">
            <router-link to="/" class="btn-more">CONTACT<Icon type="arr-more" /></router-link>
          </div>          
      </template>
    </LayerPopup>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
  }, 
  data(){
    return {
      stationList: [
        {
          src: '',
          tit: '타사대비 최장기간 업력',
          cont: '최다 회원을 보유하고 있습니다.<br />내용'
        },
        {
          src: '',
          tit: '위탁운영 관제 시스템',
          cont: '내용'
        },
        {
          src: '',
          tit: '24시간 콜센터 운영',
          cont: '내용'
        },
        {
          src: '',
          tit: 'AS 전문 부서 운영',
          cont: '내용'
        },
        {
          src: '',
          tit: '화재 및 도난 보험 가입완료',
          cont: '내용'
        },
      ],
      processStepList: [
        {
          order: '순서',
          cont: '내용 내용'
        },
        {
          order: '순서',
          cont: '내용 내용내용 내용내용 내용내용 내용내용 내용'
        },
        {
          order: '순서',
          cont: '내용 내용'
        },
        {
          order: '순서',
          cont: '내용 내용'
        },
        {
          order: '순서',
          cont: '내용 내용'
        },
        {
          order: '순서',
          cont: '내용 내용'
        },
      ]
    }
  }
}
</script>