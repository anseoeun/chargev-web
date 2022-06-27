<template>
    <LayerFullPopup :visible="visible" @close="$emit('close');" class="pop-partners" >
      <template slot="content">
          <h2 class="layer-title">PARTNERS</h2>
          <div class="layer-title-sub"><em>9개 완성차 브랜드</em>와의 계약 기반 파트너십 및 지속성 기반의 <em>장기 파트너십</em> 보유</div>
          <div class="text-type3">
            차지비는 국내 전기차 충전 서비스 분야의 개척자로서,
            <br />완성차 제작사·정부·지자체 등과 다양한 프로젝트를 수행해왔습니다.
          </div>
      </template>
    </LayerFullPopup>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
  }, 
}
</script>