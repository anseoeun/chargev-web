<template>
  <div class="contents">
    
  </div>
</template>

<script>
export default {
  components:{

  },
  data(){
    return{
      // 충전차량
      carSliderOpt: {
        autoWidth: true,
        perMove:1,
        pagination:false,
      },      
      carList: [
          {
              company: 'bmw',
              carInfo: ['BMW', '530e', '02보6596'],
              num: '9999-9999-9999-9999',
              selected: true,
          },
          {
              company: 'benz',
              carInfo: ['BMW', '530e', '02보6596'],
              num: '1010-0101-1234-1234',
              selected: false,
          },
      ],

      notiOpt: {
        autoWidth: true,
        perMove:1,
        pagination:false,
      },
      notiList: [
        {
          src: require('@/assets/images/temp-noti.jpg'),
          cate: '신규 서비스 안내',
          tit: '기프티쇼 쿠폰 출시 안내',
          date: '2022-02-25'
        },
        {
          src: require('@/assets/images/temp-noti.jpg'),
          cate: '신규 서비스 안내',
          tit: '기프티쇼 쿠폰 출시 안내',
          date: '2022-02-25'
        },
        {
          src: require('@/assets/images/temp-noti.jpg'),
          cate: '신규 서비스 안내',
          tit: '기프티쇼 쿠폰 출시 안내',
          date: '2022-02-25'
        },
      ],

      options: {
        perPage: 1,
        perMove: 1,
      },
      currentPage: 0,
      paging: new Array(3),
      btmLayer:{
        popPaymentDetail: false,
        popNoticeDetail: false,
      },
    }
  },
  methods: {
    agencySelect(val){
      val ? this.agency = val : ''
      this.btmLayer.agency = false
    },
  }
}
</script>
