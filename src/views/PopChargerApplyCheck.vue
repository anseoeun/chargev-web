<template>
    <LayerPopup :visible="visible" @close="$emit('close');" class="layer-full-popup pop-charger-apply" >
      <template slot="content">
          <!-- 신청시 입력한 정보를 입력 -->
          <template v-if="status === 'apply-check'">
            <h2 class="layer-title">충전기 설치신청 확인</h2>
            <div class="layer-title-sub">신청시 입력한 정보를 입력해주세요.</div>
            <div class="form-box-wrap">
              <div class="form-box">
                  <div class="row">
                      <div class="input">
                          <Input type="text" v-model="form.name" placeholder="신청자명" />
                      </div>
                  </div>
                  <div class="row">
                      <div class="input">
                          <Input type="number" v-model="form.phone" placeholder="휴대전화" />
                      </div>
                  </div>
                  <div class="row">
                      <div class="input">
                          <Input type="number" v-model="form.pw" maxlength="4" placeholder="진행상황 확인용 비밀번호(4자리 입력)" />
                      </div>
                  </div>
              </div>
              <div class="btn-wrap">
                <button class="btn-type1" @click="type === 'home' ? status = 'home-complete' : status='public-complete' ">신청내역 확인</button>
              </div>
            </div>
          </template>

          <!-- 신청완료(홈) -->
          <template v-if="status === 'home-complete'">
            <h2 class="layer-title">충전기 설치신청</h2>
            <ApplyComplete :type="type" />
          </template>

          <!-- 신청완료(공용) -->
          <template v-if="status === 'public-complete'">
            <h2 class="layer-title">충전기 설치신청</h2>
            <ApplyComplete :type="type" />
          </template>
      </template>
    </LayerPopup>
</template>

<script>
import ApplyComplete from '@/views/common/ApplyComplete'
export default {
  components: {
    ApplyComplete,
  },  
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
    type: {
      type: String,
      default: ''
    },
  }, 
  data(){
    return{
      status: 'apply-check',
      form:{},
      placeSlideOpt: {
        perPage: 3,
        perMove:1,
        pagination:false,
        gap: 39,
      },
            
      homeChargerList: [
        {
          menu: '벤츠'
        },
        {
          menu: '폴스타'
        },
        {
          menu: '볼보'
        },
        {
          menu: 'BMW'
        },
        {
          menu: '별도 프로모션 없음'
        },
      ],
      publicChargerList: [
        {
          menu: '상업시설, 관공서'
        },
        {
          menu: '공동주택'
        },
        {
          menu: '기타'
        }
      ],
      placeList: [
        {
          title: '모델A',
          price: '1,500,000',
          item: '설치비, VAT포함',
          src: require('@/assets/images/temp-place.jpg'),
        },
        {
          title: '모델B',
          price: '1,500,000',
          item: '설치비, VAT포함',          
          src: require('@/assets/images/temp-place.jpg'),
        },
        {
          title: '모델C',
          price: '1,500,000',
          item: '설치비, VAT포함',          
          src: require('@/assets/images/temp-place.jpg'),
        },
        {
          title: '모델C',
          price: '1,500,000',
          item: '설치비, VAT포함',          
          src: require('@/assets/images/temp-place.jpg'),
        },
      ],      
    }
  },
}
</script>