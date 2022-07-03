<template>
    <LayerPopup :visible="visible" @close="$emit('close');" class="layer-full-popup pop-platform" >
      <template slot="content">
          <h2 class="layer-title">PLATFORM</h2>
          <div class="text-type3">
           차지비의 Know-how를 바탕으로 플랫폼 사업을 지향합니다
          </div>

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

          <div class="text-type3 layer-btm">충전소 위탁운영을 원하실 경우 아래의 버튼을 통해 문의바랍니다.</div>
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
          tit: '충전사업 플랫폼',
          cont: '충전기는 가지고 있으나 운영 시스템이 없는 소규모 사업자 대상'
        },
        {
          src: '',
          tit: 'SaaS',
          cont: '자본 비용(CAPEX) 투자가 아닌 운영 비용(OPEX)을 통해 비용 관리를 간소화하고자 하는 사업자에게 제공되는 서비스'
        },
        {
          src: '',
          tit: 'SI사업',
          cont: '건설사 연계사업'
        },
        {
          src: '',
          tit: 'API 정보제공',
          cont: '충전소 및 충전 DATA 제공'
        }
      ],
      
    }
  }
}
</script>