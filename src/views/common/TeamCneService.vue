<template>
  <div class="team-detail-wrap">
      <div class="text-detail">
        (부서설명내용이 필요합니다.)CHARGEV 의 충전매출을 담당하는 부서로서 상품의 기획, 운영을 담당하고 있습니다.
      </div>
      <h2 class="title-type1">NOW RECRUITING</h2>
      <ul class="noti-slide-list">
        <li v-for="(item, index) in notiList" :key="index">
          <button @click="toggleSlide($event, `#slide-noti-${index}`)"><Icon type="arr-noti" /><span class="tit">{{ item.tit }}</span></button>
          <div class="detail" :id="`slide-noti-${index}`">
            <pre>
              >주요업무
    
              \ 1차지비 상품(서비스) 기획
              : 업무1
              : 업무 2
    
              -다른 팀원들과 함께 서비스를 기획하는 작업에 참여하게 됩니다.
    
              >자격요건
    
              \ 1경력: 5년 이상
              \ 학력 : 대졸이상
              \ 해외여행에 결격사유가 없는자
    
              >우대사항
    
              \ 1유관 업계 경험자
              \ 해당 직무 근무자
              \ 1영어능통자
              \ 엑셀 고급능력자
            </pre>
          </div>
        </li>
        <li>
          <button><Icon type="arr-noti" />상품(서비스)기획 및 운영 경력자[경력 5년 이상]</button>
          <div class="detail">
            <pre>
              >주요업무
    
              \ 1차지비 상품(서비스) 기획
              : 업무1
              : 업무 2
    
              -다른 팀원들과 함께 서비스를 기획하는 작업에 참여하게 됩니다.
    
              >자격요건
    
              \ 1경력: 5년 이상
              \ 학력 : 대졸이상
              \ 해외여행에 결격사유가 없는자
    
              >우대사항
    
              \ 1유관 업계 경험자
              \ 해당 직무 근무자
              \ 1영어능통자
              \ 엑셀 고급능력자
            </pre>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
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
      ]
    }
  },
}
</script>
