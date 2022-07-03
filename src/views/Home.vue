<template>
  <div class="index">
    <h2>Publishing work sheet</h2>
    <table>
    <colgroup>
      <col style="width:60px" />
      <col style="width:35%" />
      <col style="width:35%" />
      <col style="width:auto" />
    </colgroup>

    <thead>
      <tr>
        <th></th>
        <th>페이지</th>
        <th>FileName/Link</th>
        <th>memo</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, name, index) in list" :key="value">
        <td v-if="name.includes('title-')" colspan="4" class="title">{{ value }}</td>
        <template v-else>
          <td>{{ index + titleNum }}</td>
          <td>{{ value }}</td>
          <td><router-link :to="'/'+name">{{ '/'+name }}</router-link></td>
          <td></td>
        </template>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {

  },
  data(){
    return {
      titleNum: 0,
      list: {
          'title-sample': '-샘플',       
          //샘플
          'sample/component': '샘플/컴포넌트',
          'sample/form': '샘플/폼요소',
          
          'title-page': '-페이지',
          // 로그인
          'login': '로그인',
          // 메인
          'main': '메인',
          // 채용
          'culture': '채용',
          // 이용약관
          'terms': '이용약관',
          // 개인정보
          'privicy': '개인정보',
          // 공고
          'disclosure': '공고',
          // 충전기 설치신청
          'charger-apply': '충전기 설치신청',
          // 마이페이지
          'mypage': '마이페이지(개인)',
          'mypage-coper': '마이페이지(법인)',
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  h2{font-size:20px;color: #000;}
  .index{padding:20px;font-size:12px;background:#fff;color: #000;min-height:100vh;}
  .index table {width:100%; border-collapse:collapse; border:0px solid #666;margin-top:10px;}
  .index caption {text-align:left; font-size:200%; color:#999;}
  .index th {padding:6px; border:1px solid #fff; color:#fff; font-size:110%; background-color:#000;}
  .index td {height:16px; padding:4px; padding-left:10px; border:1px solid #666;}
  .index a,
  .index a:link, #mwork a:visited {color:#009; text-decoration:none;}
  .index a:hover, #mwork a:active {color:#00f; text-decoration:underline;}
  .index tr:hover td {background-color:#eee !important;}
  .index .title {background-color:#eee !important;}
</style>
