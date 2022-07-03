<template>
  <div class="contents">
    <!-- section -->
    <div class="section">
      <div class="mypage-wrap">
        <h2 class="title-type1">MY PAGE</h2>
        
        <div class="mypage-box">
          <div class="left">
            <MypageCoper v-if="user === 'coper'" />
            <MypagePerson v-if="user === 'person'" />
          </div>
          <div class="right">
             <UsingHistory />
          </div>
        </div>
        
      </div>
    </div>
    <!-- // section -->

  </div>
</template>

<script>
import MypageCoper from '@/views/common/MypageCoper'
import MypagePerson from '@/views/common/MypagePerson'
import UsingHistory from '@/views/common/UsingHistory'
export default {
  components: {
    MypageCoper,
    MypagePerson,
    UsingHistory
  },  
  data(){
    return{
     form: { 
      registration: [],
      payment: []
     },

     carList: [
      {
        number: '10가1234',
        user: '김김김'
      },
      {
        number: '99호9292',
        user: '김김김'
      },
      {
        number: '00나0001',
        shareKey: 'Q672-ZZB4'
      }
     ]
     

    }
  },
  computed: {
    user(){
      return this.$root.$route.meta.user
    }
  }  
}
</script>
