<template>
    <LayerPopup :visible="visible" @close="$emit('close');" class="layer-full-popup pop-charger-apply" >
      <template slot="content">
          <h2 class="layer-title">충전기 설치신청</h2>
          
          <template v-if="status === 'apply'">
            <div class="layer-title-sub">설치 유형을 확인해주세요. <br />개인적으로 사용하실 계획이라면 <br class="mo-ver" />홈충전기, 공용으로 설치를 원하시면  <br class="mo-ver" />공용충전기를 선택해주세요.</div>
            <div class="menu-list">
              <ul>
                <li><button @click="status='home-charger';type='home'">홈 충전기</button></li>
                <li><button @click="status='public-charger';type='public'">공용 충전기</button></li>
              </ul>
            </div>
          </template>
          <!-- 홈 충전기 -->
          <template v-if="status === 'home-charger'">
            <div class="layer-title-sub">충전기 설치 프로모션을 제공받으셨나요?<br />별도 프로모션이 없을 경우 없음 버튼을 눌러 진행해주세요.</div>
            <div class="menu-list">
              <ul>
                  <li v-for="(item, index) in homeChargerList" :key="index">
                    <button v-if="item.menu ==='별도 프로모션 없음'" @click="status='home-charger-place'">{{ item.menu }}</button>
                    <button v-else @click="status='qr'">{{ item.menu }}</button>
                  </li>
              </ul>
            </div>
          </template>
          <!-- 홈 충전기 설치장소 -->
          <template v-if="status === 'home-charger-place'">
            <div class="layer-title-sub">설치 장소를 선택해주세요.</div>
            <div class="menu-list">
              <ul>
                <li v-for="(item, index) in homeChargerPlaceList" :key="index"><button @click="status='apply-form'">{{ item.menu }}</button></li>
              </ul>
            </div>
          </template>
          <!-- 공용 충전기 설치장소 -->
          <template v-if="status === 'public-charger'">
            <div class="layer-title-sub">설치 장소를 선택해주세요.</div>
            <div class="menu-list">
              <ul>
                <li v-for="(item, index) in publicChargerList" :key="index"><button @click="status='apply-form'">{{ item.menu }}</button></li>
              </ul>
            </div>
          </template>

          <!-- qr -->
          <template v-if="status === 'qr'">
            <div class="layer-title-sub">프로모션 차량의 경우 회원가입을 통해 프로모션 혜택을 받을 수 있습니다.<br />모바일 앱을 통해 간단한 회원가입 후 APPLY 탭에서 충전기 설치신청을 진행해주세요.</div>
            <div class="qr-wrap pc-ver">
              <div class="qr"></div>
            </div>
             <div class="menu-list mo-ver">
              <ul>
                <li><button>모바일 앱 다운로드</button></li>
              </ul>
            </div>
          </template>

          <!-- 신청자정보입력 -->
          <template v-if="status === 'apply-form'">
            <div class="layer-title-sub">신청자 정보를 입력합니다.</div>
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
                          <Input type="number" v-model="form.tel" placeholder="유선전화" />
                      </div>
                  </div>
                  <div class="row">
                      <div class="input">
                          <Input type="number" v-model="form.email" placeholder="이메일" />
                      </div>
                  </div>
                  <div class="row">
                      <div class="input">
                          <Input type="number" v-model="form.pw" maxlength="4" placeholder="진행상황 확인용 비밀번호(4자리 입력)" />
                      </div>
                  </div>
              </div>
              <div class="btn-wrap">
                <button v-if="type==='home'" class="btn-type1" @click="status='apply-info-form-home'">다음</button>
                <button v-else class="btn-type1" @click="status='apply-info-form-public'">다음</button>
              </div>
            </div>
          </template>

          <!-- 설치정보입력(공용) -->
          <template v-if="status === 'apply-info-form-public'">
            <div class="layer-title-sub">설치 정보를 입력합니다.</div>
            <div class="form-box-wrap">
              <div class="form-box">
                  <div class="row inp-addr">
                      <div class="input addr">
                          <Input type="text" v-model="form.addr" placeholder="주소" />
                      </div>
                      <div class="input addr-code">
                          <Input type="number" v-model="form.addrCode" placeholder="우편번호" />
                      </div>
											<div class="right">
												<button class="btn">우편번호</button>
											</div>
                  </div>
                  <div class="row">
                      <div class="input">
                          <Input type="text" v-model="form.addrDetail" placeholder="상세주소" />
                      </div>
                  </div>
                  <div class="row inp-parking">
                      <div class="input auto">
                          <Input type="number" v-model="form.park" placeholder="주차면" />
                      </div>
                      <button class="btn"><span class="pc-ver">최소필요댓수 </span>계산</button>
                      <div class="input auto">
                          <Input type="number" v-model="form.minCar" placeholder="최소필요댓수" />
                      </div>
                  </div>
                  <div class="row inp-apply-num">
                      <div class="input">
                          <Input type="number" v-model="form.existingNum" placeholder="기존 설치수량" />
                      </div>
                      <div class="input">
                          <Input type="number" v-model="form.hopeNum" placeholder="설치 희망수량" />
                      </div>
                  </div>
                  <div class="row">
                      <div class="input">
                          <Input type="number" v-model="form.pw" maxlength="4" placeholder="진행상황 확인용 비밀번호(4자리 입력)" />
                      </div>
                  </div>
              </div>
              <div class="noti-box">
                <p>입주자 대표회의가 구성되어 있지 않거나 주차면 100면 미만은 신청이 제외될 수 있습니다.</p>
                <p>자세한 문의 접수는 고객센터를 통하여 연락 부탁드립니다.</p>
              </div>
              <div class="btn-wrap">
                <button class="btn-type1" @click="status='privacy-rule'">다음</button>
              </div>
            </div>
          </template>

          <!-- 설치정보입력(홈별도) -->
          <template v-if="status === 'apply-info-form-home'">
            <div class="layer-title-sub">설치 정보를 입력합니다.</div>
            <div class="form-box-wrap">
              <div class="form-box">
                  <div class="row inp-addr">
                      <div class="input addr">
                          <Input type="text" v-model="form.addr" placeholder="주소" />
                      </div>
                      <div class="input addr-code">
                          <Input type="number" v-model="form.addrCode" placeholder="우편번호" />
                      </div>
											<div class="right">
												<button class="btn">우편번호</button>
											</div>
                  </div>
                  <div class="row">
                      <div class="input">
                          <Input type="text" v-model="form.addrDetail" placeholder="상세주소" />
                      </div>
                  </div>
                  <div class="row">
                      <div class="input">
                          <Input type="text" v-model="form.hopeNum" placeholder="설치희망수량" />
                      </div>
                  </div>
                  <div class="row">
                      <div class="input">
                          <Input type="text" v-model="form.requirements" placeholder="요구사항" />
                      </div>
                  </div>
              </div>
              <div class="btn-wrap">
                <button class="btn-type1" @click="status='model-select'">다음</button>
              </div>
            </div>
          </template>

          <!-- 모델선택 -->
          <template v-if="status === 'model-select'">
            <div class="layer-title-sub">충전기 설치 모델을 선택합니다.</div>
            <div class="model-wrap">
              <div class="place-list">
                  <Carousel :data ="placeList" :options="placeSlideOpt" :key="placeSlideOpt.perPage">
                      <template slot-scope="props">
                          <button class="place-card" @click="status='privacy-rule'">
                              <div class="img" :style="`background-image:url(${props.item.src})`"></div>
                              <div class="desc">
                                  <div class="tit">{{ props.item.title }}</div>
                                  <div class="price">{{ props.item.price }}</div>
                                  <div class="item">{{ props.item.item }}</div>
                              </div>
                          </button>
                      </template>
                  </Carousel>
              </div>
              <div class="noti-box">
                <p class="dash">표준공사 30m기준<br />(초과시 m당 초과 비용 발생)</p>
                <p class="dash">스탠드형 설치시 20만원 추가 부담금 발생</p>
                <p class="dash">한국전력 표준 시설부담금 별도(발생 시)</p>
                <p class="dash">완속충전기 취득세(지방세) 발생 가능</p>
              </div>
            </div>
          </template>

          <!-- 개인정보취급방침 -->
          <template v-if="status === 'privacy-rule'">
            <div class="layer-title-sub">개인정보 취급방침에 대해 동의 후 <br class="mo-ver" />신청하실 수 있습니다.</div>
            <div class="text-grid-list">
              <div class="row">
                <strong>수집 주체</strong>
                <div>(주)차지비</div>
              </div>
              <div class="row">
                <strong>수집 항목</strong>
                <div>신청자명, 주소, 유선 전화번호, 휴대 전화번호, 이메일주소, 비밀번호</div>
              </div>
              <div class="row">
                <strong>수집 목적</strong>
                <div>충전기 설치신청접수, 결과 회신 및 사후관리(고장신고접수 등)</div>
              </div>
              <div class="row">
                <strong>이용 기간</strong>
                <div>
                  원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다.
                  <br />단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 아래와 같이 관계법령에서 정한 일정 기간동안 개인정보를 보관할 수 있습니다.
                  <br />소비자의 불만 또는 분쟁처리에 관한 기록 : 3년
                  <br />(전자상거래등에서의 소비자보호에 관한 법률)
                  <br />위의 개인정보 소집 및 이용에 동의합니다
                  <br />(동의 후 문의가 가능합니다.)
                </div>
              </div>
            </div>
            <div class="btn-wrap">
              <button class="btn-type1" @click="agree">동의 후 진행</button>
            </div>
          </template>

          <!-- 신청완료(홈) -->
          <template v-if="status === 'home-complete'">
            <div class="layer-title-sub">설치 신청이 완료되었습니다.</div>
            <ApplyComplete :type="type" @close="$emit('close');$emit('type', 'home')" />
          </template>

          <!-- 신청완료(공용) -->
          <template v-if="status === 'public-complete'">
            <div class="layer-title-sub">설치 신청이 완료되었습니다.</div>
            <ApplyComplete :type="type" @close="$emit('close');$emit('type', 'public')" />
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
  }, 
  data(){
    return{
      type: '',
      status: 'apply',
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
      homeChargerPlaceList: [
        {
          menu: '단독주택'
        },
        {
          menu: '공동주택, 빌라'
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
  mounted(){
    this.setSliderOpt();
    window.addEventListener('resize', function(){
      this.setSliderOpt();
   }.bind(this)); 
  },
  methods:{
    setSliderOpt(){
      if(document.body.clientWidth <= 960){
        this.placeSlideOpt.perPage= 1
        this.placeSlideOpt.autoWidth = true
        this.placeSlideOpt.gap= 0
      }else{
        this.placeSlideOpt.perPage= 3
        this.placeSlideOpt.autoWidth = false
        this.placeSlideOpt.gap= 39
      }
    },
    agree(){
      if(this.type === 'home'){
        this.status = 'home-complete'
      }else{
        this.status = 'public-complete'
      }
    }
  }
}
</script>