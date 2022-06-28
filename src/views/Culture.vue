<template>
  <div class="contents">
    <!-- section -->
    <div class="section">
      <div class="culture-wrap">
        <h2 class="title-type1">CULTURE</h2>
        
        <div class="culture-top-txt">
          <span>
            기업과 나,
            <br />성장할 수 있도록
          </span>
        </div>
        <ul class="culture-visual-list">
          <li>
            <div class="box">
              <img :src="require('@/assets/images/culture-1.jpg')"/>
              <div class="desc">
                <strong>모두가 프로</strong>
                <p>
                  각자가 맡은 업무에서는 항상 프로답게 임하고 있습니다.
                  <br />그렇기에 자신의 업무에 관해서는
                  <br />어느 누구든 이길 준비가 되어 있습니다.
                </p>
              </div>
              <Icon type="plus" class="plus mo-ver" />
            </div>
          </li>
          <li>
            <div class="box">
              <img :src="require('@/assets/images/culture-2.jpg')"/>
              <div class="desc">
                <strong>팀이 곧 기업</strong>
                <p>
                  팀의 목표가 모여 기업의 목표가 만들어 집니다.
                  <br />차지비는 팀을 중심으로 움직이는 팀의 집합체 입니다.
                </p>
              </div>
              <Icon type="plus" class="plus mo-ver" />
            </div>
          </li>
          <li>
            <div class="box">
              <img :src="require('@/assets/images/culture-3.jpg')"/>
              <div class="desc">
                <strong>형식보다는 효율을</strong>
                <p>
                  틀은 깨라고 있는 것 아닌가요?
                  <br />지금의 형식이 복잡하고 불편하다면
                  <br />깨부수고 새롭게 효율적이게 만듭니다.
                </p>
              </div>
              <Icon type="plus" class="plus mo-ver" />
            </div>
          </li>
          <li>
            <div class="box">
              <img :src="require('@/assets/images/culture-4.jpg')"/>
              <div class="desc">
                <strong>퀀텀 점프</strong>
                <p>
                  기업과 구성원 모두가 기존의 틀을 깨는 혁신을 통해
                  <br />비약적으로 성장 및 발전하는 것을 목표로합니다.
                </p>
              </div>
              <Icon type="plus" class="plus mo-ver" />
            </div>
          </li>
        </ul>
        <div class="culture-bottom-txt">
          <span>
            업무에 집중을,
            <br />몰두할 수 있도록
          </span>
        </div>
        <ul class="culture-list">
          <li>
            <strong>보상</strong>
            <ul>
              <li>성과급 지급</li>
              <li>종합검진비 지원</li>
            </ul>
          </li>
          <li>
            <strong>자율적 근무</strong>
            <ul>
              <li>탄력 출퇴근제</li>
            </ul>
          </li>
          <li>
            <strong>기타 비용 지원</strong>
            <ul>
              <li>자녀학자금 지원</li>
              <li>종합검진비 지원</li>
              <li>경조사비 지원</li>
              <li>자기계발비 지원</li>
              <li>명절 상여금 지급</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- // section -->
    <!-- section -->
    <div class="section">
      <div class="team-wrap">
        <h2 class="title-type1">팀 안내</h2>
        <h3 class="title-type2">차지비와 함께 성장할 인재를 찾고있습니다.</h3>
        
        <ul class="team-list pc-ver">
          <li><button @click="teamTab = 'executives';" :class="{on: teamTab === 'executives'}">EXECUTIVES</button></li>
          <li><button @click="teamTab = 'management';" :class="{on: teamTab === 'management'}">MANAGEMENT<br />SUPPORT DEP.</button></li>
          <li><button @click="teamTab = 'cne-business';" :class="{on: teamTab === 'cne-business'}">CnE BUSINESS<br />DEP.</button></li>
          <li><button @click="teamTab = 'cne-service';" :class="{on: teamTab === 'cne-service'}">CnE SERVICE<br />DEP.</button></li>
          <li><button @click="teamTab = 'platform';" :class="{on: teamTab === 'platform'}">PLATFORM<br />CENTOR</button></li>
        </ul>
        <ul class="team-list mo-ver">
          <li><button @click="layerPop.PopTeamExecutives = true">EXECUTIVES</button></li>
          <li><button @click="layerPop.PopTeamManagement = true">MANAGEMENT<br />SUPPORT DEP.</button></li>
          <li><button @click="layerPop.PopTeamCneBusiness = true">CnE BUSINESS<br />DEP.</button></li>
          <li><button @click="layerPop.PopTeamCneService = true">CnE SERVICE<br />DEP.</button></li>
          <li><button @click="layerPop.PopTeamPlatform = true">PLATFORM<br />CENTOR</button></li>
        </ul>
        <div v-if="teamTab === 'executives'" class="team-detail">
          <h3 class="title-type2 line-t semi-bold">EXECUTIVES</h3>
          <TeamExcutives />
        </div>
        <div v-if="teamTab === 'management'" class="team-detail">
          <h3 class="title-type2 line-t semi-bold">MANAGEMENT SUPPORT DEP.</h3>
          <TeamManagement />
        </div>
        <div v-if="teamTab === 'cne-business'" class="team-detail">
          <h3 class="title-type2 line-t semi-bold">CnE BUSINESS DEP.</h3>
         <TeamCneBusiness />
        </div>
        <div v-if="teamTab === 'cne-service'" class="team-detail">
          <h3 class="title-type2 line-t semi-bold">CnE SERVICE DEP.</h3>
          <div class="text-type1">
            (부서설명내용이 필요합니다.)CHARGEV 의 충전매출을 담당하는 부서로서 상품의 기획, 운영을 담당하고 있습니다.
          </div>
          <TeamCneService />
        </div>
        <div v-if="teamTab === 'platform'" class="team-detail">
          <h3 class="title-type2 line-t semi-bold">CnE SERVICE DEP.</h3>
          <div class="text-type1">
            (부서설명내용이 필요합니다.)CHARGEV 의 충전매출을 담당하는 부서로서 상품의 기획, 운영을 담당하고 있습니다.
          </div>
          <TeamPlatform />
        </div>
      </div>
    </div>
    <!-- // section -->
    <!-- section -->
    <div class="section ">
      <div class="process-wrap">
        <h2 class="title-type1">채용프로세스</h2>
        <ul class="process-list">
          <li>
            <strong>지원서 확인</strong>
            <p>
              지원서를 보내주시면 영업일 기준
              <br />3일 내로 검토 후 답장을 드립니다.
              <br />- 지원: recruit@chargev.co.kr
            </p>
          </li>
          <li>
            <strong>인터뷰</strong>
            <p>
              인터뷰는 부서 및 직무에 따라
              <br />1~3회 진행될 수 있습니다.
            </p>
          </li>
          <li>
            <strong>입사협의</strong>
            <p>
              입사 조건 협의 후 입사를 확정합니다.
            </p>
          </li>
        </ul>
      </div>
    </div>
    <!-- // section -->

    <PopTeamExecutives :visible="layerPop.PopTeamExecutives" @close="layerPop.PopTeamExecutives = false" />
    <PopTeamManagement :visible="layerPop.PopTeamManagement" @close="layerPop.PopTeamManagement = false" />
    <PopTeamCneBusiness :visible="layerPop.PopTeamCneBusiness" @close="layerPop.PopTeamCneBusiness = false" />
    <PopTeamCneService :visible="layerPop.PopTeamCneService" @close="layerPop.PopTeamCneService = false" />
    <PopTeamPlatform :visible="layerPop.PopTeamPlatform" @close="layerPop.PopTeamPlatform = false" />
  </div>
</template>

<script>
import TeamExcutives from '@/views/common/TeamExcutives'
import TeamManagement from '@/views/common/TeamManagement'
import TeamCneBusiness from '@/views/common/TeamCneBusiness'
import TeamCneService from '@/views/common/TeamCneService'
import TeamPlatform from '@/views/common/TeamPlatform'
import PopTeamExecutives from '@/views/PopTeamExecutives'
import PopTeamManagement from '@/views/PopTeamManagement'
import PopTeamCneBusiness from '@/views/PopTeamCneBusiness'
import PopTeamCneService from '@/views/PopTeamCneService'
import PopTeamPlatform from '@/views/PopTeamPlatform'
export default {
  components: {
    TeamExcutives,
    TeamManagement,
    TeamCneBusiness,
    TeamCneService,
    TeamPlatform,
    PopTeamExecutives,
    PopTeamManagement,
    PopTeamCneBusiness,
    PopTeamCneService,
    PopTeamPlatform,
  },  
  mounted(){
    window.scrollTo(0, 0);
  },
  data(){
    return{
      teamTab: '',

      notiList: [
        {
          tit: '상품(서비스)기획 및 운영 경력자[경력 5년 이상]',
        },
        {
          tit: '상품(서비스)기획 및 운영 경력자[경력 5년 이상]',
        },
        {
          tit: '상품(서비스)기획 및 운영 경력자[경력 5년 이상]',
        },
      ],

      layerPop: {
        PopTeamExecutives: false,
        PopTeamManagement: false,
        PopTeamCneBusiness: false,
        PopTeamCneService: false,
        PopTeamPlatform: false,
      }
    }
  },
}
</script>
