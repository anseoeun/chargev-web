<template>
  <div class="main-contents">
    <!-- main-visual -->
    <div class="main-visual" id="chargev">
      <div class="inner-wrapper">
        <div class="visual"><p class="main-txt">FUTURE OF<br/>CHARGING</p></div>
        <div class="desc">
          <p class="sub-txt">
            지금 이 순간에도<br/>
            <Icon type="chargev"></Icon>를 통해<br/>
            충전중입니다
          </p>
          <div class="filling-amount">
            <strong>누적 충전량</strong>
            <div class="kwh"><span class="num">100,000,000,000</span><span class="unit">kWh</span></div>
          </div>
        </div>
      </div>
    </div>
    <!-- // main-visual -->
    <!-- section -->
    <div class="section">
      <h2 class="title-type1">차지비</h2>
      <h3 class="title-type2">전기차 충전서비스의 현재와 미래</h3>
      <div class="text-type1">
          국내 최초의 민간 전기차 충전서비스 CHARGEV는 (주)차지비에서 운영하는 전기차 충전서비스 사업의 브랜드입니다. 
          <br />전기차 운전자의 생활에 가장 밀착된 충전 인프라 네트워크를 통해 여러분의 새로운 경험화 함께 합니다.
          <br />
          <br />차지비는 아래의 파트너사와 함께합니다.        
      </div>

      <div class="partners-wrap">
        <h3 class="title-type2">PARTNERS</h3>
        <ul class="partener-logos">
            <li class="logo-bmw"><img :src="require('@/assets/images/logos/logo-bmw.svg')" alt="bmw"/></li>
            <li class="logo-coupe"><img :src="require('@/assets/images/logos/logo-coupe.svg')" alt="coupe"/></li>
            <li class="logo-benz"><img :src="require('@/assets/images/logos/logo-benz.svg')" alt="benz"/></li>
            <li class="logo-polestar"><img :src="require('@/assets/images/logos/logo-polestar.svg')" alt="polestar"/></li>
            <li class="logo-volvo"><img :src="require('@/assets/images/logos/logo-volvo.svg')" alt="volvo"/></li>
            <li class="logo-jaguar"><img :src="require('@/assets/images/logos/logo-jaguar.svg')" alt="jaguar"/></li>
            <li class="logo-land-rover"><img :src="require('@/assets/images/logos/logo-land-rover.svg')" alt="land-rover"/></li>
        </ul>
        <div class="btn-more-wrap">
          <button class="btn-more" @click="layerPop.PopPartners = true">파트너십에 대해 알아보기<Icon type="arr-more" /></button>
        </div>
      </div>

      <h2 class="title-type1">미션과 비전</h2>
      <h3 class="title-type2">더 푸른세상을 위한 연결</h3>   
      <div class="text-type1">
        차지비는 충전소와 전기차 사용자간의 편리한 연결을 통해 변화하는 모빌리티 환경이 세상에 안착하도록 하고,
        <br />궁극적으로 녹색을 띈 세상을 위해 노력합니다.
      </div>   
    </div>
    <!-- // section -->
    <!-- section -->
    <div class="section" id="business">
      <h2 class="title-type1">사업</h2>
      <h3 class="title-type2">B2B 솔루션과 B2C 홈충전기 설치 및 <br class="mo-ver" />충전소 운영</h3>
      <div class="text-type1">
          ChargEV는 기업 및 단체를 대상으로 한 B2B 충전 솔루션과
          <br />개인 고객을 대상으로 B2C 홈충전기 설치 사업을 진행하고 있습니다.
          <br />또한 충전기 설치가 필요한 곳에 맞춤형 최적의 솔루션을 제안합니다.        
      </div>

      <ul class="business-list">
        <li>
          <div class="box">
            <div class="left">
              <div class="img"><img :src="require('@/assets/images/busines-1.jpg')" alt=""/></div>
            </div>
            <div class="right">
              <div class="desc">
                <div class="top">
                  <strong class="tit">B2B SOLUTION</strong>
                  <p class="exp">OEM</p>
                </div>
                <div class="bottom">
                    <button class="btn-more" @click="layerPop.PopB2bSolution = true">MORE<Icon type="arr-more" /></button>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="box">
            <div class="left">
              <div class="desc">
                <div class="top">
                  <strong class="tit">FLEET SOLUTION</strong>
                  <p class="exp">FLEET</p>
                </div>
                <div class="bottom">
                    <router-link to="/" class="btn-more">MORE<Icon type="arr-more" /></router-link>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="img"><img :src="require('@/assets/images/busines-2.jpg')" alt=""/></div>              
            </div>
          </div>
        </li>
        <li>
          <div class="box">
            <div class="left">
              <div class="img"></div>
            </div>
            <div class="right">
              <div class="desc">
                <div class="top">
                  <strong class="tit">STATION OPERATION</strong>
                  <p class="exp">충전소 운영</p>
                </div>
                <div class="bottom">
                    <button class="btn-more" @click="layerPop.PopStationOperation = true">MORE<Icon type="arr-more" /></button>
                </div>
              </div>
            </div>
          </div>
        </li>      
        <li>
          <div class="box">
            <div class="left">
              <div class="desc">
                <div class="top">
                  <strong class="tit">CHARGING SERVICE</strong>
                  <p class="exp">충전 서비스 & 부가 서비스</p>
                </div>
                <div class="bottom">
                    <router-link to="/" class="btn-more">MORE<Icon type="arr-more" /></router-link>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="img"></div>              
            </div>
          </div>
        </li>   
        <li>
          <div class="box">
            <div class="left">
              <div class="img"></div>
            </div>
            <div class="right">
              <div class="desc">
                <div class="top">
                  <strong class="tit">PLATFORM</strong>
                  <p class="exp">플랫폼 서비스</p>
                </div>
                <div class="bottom">
                    <button @click="layerPop.PopPlatform = true" class="btn-more">MORE<Icon type="arr-more" /></button>
                </div>
              </div>
            </div>
          </div>
        </li>                  
      </ul>

      <div class="text-type2">자세한 내용은 회사소개서를 통해  <br class="mo-ver" />확인 가능합니다.</div>
      <div class="btn-more-wrap">
        <a href="/" class="btn-more">회사 소개서 다운로드<Icon type="arr-more" /></a>
      </div>      
    </div>
    <!-- // section -->
    <!-- section -->
    <div class="section" id="notice">
      <h2 class="title-type1">공지</h2>
      <div class="noti-list">
        <Carousel :data ="notiList" :options="notiOpt">
          <template slot-scope="props">
            <button class="noti">
              <div class="img" :style="`background-image:url(${props.item.src})`"></div>
              <div class="tit">{{ props.item.tit }}</div>
              <div class="sub-head">{{ props.item.subhead }}</div>
              <div class="cont">{{ props.item.content }}</div>
            </button>
          </template>
        </Carousel>
      </div>
    </div>
    <!-- // section -->
    <!-- section -->
    <div class="section" id="request">
      <h2 class="title-type1">문의</h2>
      <div class="contract-wrap">
        <div class="img">
          <img :src="require('@/assets/images/bg-contract.jpg')" alt="" class="pc-ver" />
          <img :src="require('@/assets/images/bg-contract-mo.jpg')" alt="" class="mo-ver" />
        </div>
        <div class="cont">
           <div class="form-box">
                <div class="row">
                    <div class="input">
                        <Input type="text" v-model="form.businessnum" placeholder="NAME OF BUSINESS" />
                    </div>
                </div>
                <div class="row">
                    <div class="input">
                        <Input type="text" v-model="form.email" placeholder="EMAIL" />
                    </div>
                </div>
                <div class="row">
                    <div class="input">
                        <Input type="text" v-model="form.phone" placeholder="PHONE" />
                    </div>
                </div>
                <div class="row">
                    <div class="input">
                        <Input type="text" v-model="form.message" placeholder="MESSAGE" />
                    </div>
                </div>
            </div>
            <div class="bottom">
              <router-link to="/" class="btn-more">CONTACT<Icon type="arr-more" /></router-link>
            </div>
        </div>
      </div>
    </div>
    <!-- // section -->

    <PopPartners :visible="layerPop.PopPartners" @close="layerPop.PopPartners = false" />
    <PopB2bSolution :visible="layerPop.PopB2bSolution" @close="layerPop.PopB2bSolution = false" />
    <PopStationOperation :visible="layerPop.PopStationOperation" @close="layerPop.PopStationOperation = false" />
    <PopPlatform :visible="layerPop.PopPlatform" @close="layerPop.PopPlatform = false" />
  </div>
</template>

<script>
import PopPartners from '@/views/PopPartners'
import PopB2bSolution from '@/views/PopB2bSolution'
import PopStationOperation from '@/views/PopStationOperation'
import PopPlatform from '@/views/PopPlatform'
export default {
  components: {
    PopPartners,
    PopB2bSolution,
    PopStationOperation,
    PopPlatform
  },
  mounted(){
    if(this.$route.query.pos){
      setTimeout(()=>{
        document.querySelector('.gnb-'+this.$route.query.pos).click();
      }, 300)
    }
  },
  data(){
    return{
      notiOpt: {
        autoWidth: true,
        perMove:1,
        pagination:false,
      },
      notiList: [
        {
          src: require('@/assets/images/temp-noti.jpg'),
          tit: 'TITLE',
          subhead: 'SUB HEAD',
          content: 'BODY'
        },
        {
          src:'',
          tit: 'TITLE',
          subhead: 'SUB HEAD',
          content: 'BODY'
        },
        {
          src:'',
          tit: 'TITLE',
          subhead: 'SUB HEAD',
          content: 'BODY'
        },
        {
          src:'',
          tit: 'TITLE',
          subhead: 'SUB HEAD',
          content: 'BODY'
        },
        {
          src:'',
          tit: 'TITLE',
          subhead: 'SUB HEAD',
          content: 'BODY'
        },
      ],

      form: {
        businessnum: '',
        email: '',
        phone: '',
        message: '',
      },
      layerPop: {
        PopPartners: false,
        PopB2bSolution: false,
        PopStationOperation: false,
        PopPlatform: false
      }
    }
  },
}
</script>
