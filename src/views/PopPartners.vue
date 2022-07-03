<template>
    <LayerPopup :visible="visible" @close="$emit('close');" class="layer-full-popup pop-partners" >
      <template slot="content">
          <h2 class="layer-title">PARTNERS</h2>
          <div class="layer-title-sub"><em>9개 완성차 브랜드</em>와의 계약 기반  <br class="mo-ver" />파트너십 및 지속성 기반의 <br class="mo-ver" /><em>장기 파트너십</em> 보유</div>
          <div class="text-type3">
            차지비는 국내 전기차 충전 서비스 <br class="mo-ver">분야의 개척자로서,
            <br />완성차 제작사·정부·지자체 등과 <br class="mo-ver">다양한 프로젝트를 수행해왔습니다.
          </div>
          <div class="partners-history">
            <ol>
              <li>
                <div class="history">
                  <div class="partner-logo"><Icon type="logo-bmw" /></div>
                  <div class="desc">
                    <strong>2013</strong>
                    <div class="info">
                      <div class="name">BMW KOREA</div>
                      <div class="txt">충전 파트너십</div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="history">
                  <div class="partner-logo"><Icon type="logo-bmw" /></div>
                  <div class="desc">
                    <strong>2014</strong>
                    <div class="info">
                      <div class="name">BMW X E-mart</div>
                      <div class="txt">충전기 설치 협력 <br class="pc-ver" />MOU</div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="history">
                  <div class="partner-logo"><Icon type="logo-hyundai" /></div>
                  <div class="desc">
                    <strong>2015</strong>
                    <div class="info">
                      <div class="name">BMW X E-mart</div>
                      <div class="txt">충전기 <br class="pc-ver" />설치 협력 MOU</div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="history">
                  <div class="partner-logo"><Icon type="logo-gm" /></div>
                  <div class="desc">
                    <strong>2016</strong>
                    <div class="info">
                      <div class="name">GM KOREA</div>
                      <div class="txt">충전 파트너십</div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="history">
                  <div class="partner-logo"><Icon type="logo-jaguar-landrover" /></div>
                  <div class="desc">
                    <strong>2017</strong>
                    <div class="info">
                      <div class="name">JAGUAR <br class="pc-ver" />LANDROVER</div>
                      <div class="txt">충전 파트너십</div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="history">
                  <div class="partner-logo"><Icon type="logo-benz" /></div>
                  <div class="desc">
                    <strong>2018</strong>
                    <div class="info">
                      <div class="name">MERCEDES<br />BENZ KOREA</div>
                      <div class="txt">충전 파트너십</div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="history">
                  <div class="partner-logo"><Icon type="logo-nissan" /></div>
                  <div class="desc">
                    <strong>2019</strong>
                    <div class="info">
                      <div class="name">NISSAN</div>
                      <div class="txt">충전 파트너십</div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="history">
                  <div class="partner-logo"><Icon type="logo-bmw" /></div>
                  <div class="desc">
                    <strong>2020</strong>
                    <div class="info">
                      <div class="name">BMW KOREA</div>
                      <div class="txt">신규 충전 파트너십</div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="history">
                  <div class="partner-logo"><Icon type="logo-volvo-polester" /></div>
                  <div class="desc">
                    <strong>2021</strong>
                    <div class="info">
                      <div class="name">VOLVO, <br class="pc-ver" />POLESTAR</div>
                      <div class="txt">충전 파트너십</div>
                    </div>
                  </div>
                </div>
              </li>
            </ol>
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
}
</script>