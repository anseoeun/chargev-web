<template>
    <LayerPopup :visible="visible" @close="$emit('close');" class="layer-full-popup pop-b2b-solution" >
      <template slot="content">
          <h2 class="layer-title">B2B SOLUTION</h2>
          <div class="layer-title-sub"><em>고객 서비스 연계</em>와 <em>충전기 운영관리</em>를 <br class="mo-ver" />위해 <em>충전기 구축과 운영이 <br class="mo-ver" />반드시 함께 고려</em>되어야합니다.</div>
          <div class="text-type3">
            차지비는 수많은 파트너십을 통해 독자적인 설치 유형별 충전기 운영 관리 방안을 구축하여
            <br />충전기 도입에 필요한 요건들을 사전 검토하고 최적화된 카운셀링을 통하여
            <br />그에 맞는 최고의 <em>‘Total Charging Solution’</em>을 제공하여 고객 만족을 실현하고 있습니다.
          </div>
          <Carousel :data="b2bList" :options="sliderOpt" class="b2b-list">
            <template slot-scope="props">
              <div class="img" :style="`background-image:url(${props.item.src})`"></div>
              <div class="caption">{{ props.item.caption }}</div>
            </template>
          </Carousel>

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
    return{
      sliderOpt: {
        autoWidth: true,
        perMove:1,
        pagination:false,
      },
      b2bList: [
        {
          src: require('@/assets/images/b2b-1.jpg'),
          caption: 'Mercedes Benz'
         },
        {
          src: require('@/assets/images/b2b-1.jpg'),
          caption: 'Mercedes Benz'
         },
        {
          src: require('@/assets/images/b2b-1.jpg'),
          caption: 'Mercedes Benz'
         },
        {
          src: require('@/assets/images/b2b-1.jpg'),
          caption: 'Mercedes Benz'
         },
      ],      
    }
  }
}
</script>