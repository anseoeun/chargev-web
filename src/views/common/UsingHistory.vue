<template>
    <div class="using-history">
        <div class="title">이용내역</div>
        <div class="calendar">
          <!-- year -->
          <Carousel :data ="year" :options="yearOpt" :key="yearOpt.perPage" class="year-slide">
            <template slot-scope="props">
              <button :class="{on:props.item == selectedCal.year}" @click="setYear(props.item);monthKey += 1">{{ props.item }}년</button>
            </template>
          </Carousel>
          <!-- month -->
          <Carousel :data ="month" :options="monthOpt" :key="monthKey" class="month-slide">
            <!--  -->
            <template slot-scope="props">
              <button :class="{on:props.item == selectedCal.month}" @click="setMonth(props.item)">
                <div class="month">{{ props.item }}월</div>
                  <div class="account">
                    {{ monthData[selectedCal.month - 1][props.item -1] }}
                  </div>
              </button>
            </template>
          </Carousel>
        </div>
        <!-- // calendar -->

        <div class="total-wrap">
          <Carousel :content="true" :options="totalOpt">
              <template slot="content">
                  <splide-slide>
                      <div class="label">전체</div>
                  </splide-slide>                
                  <splide-slide v-for="(item, index) in total" :key="index">
                      <div class="num">{{ item }}</div>
                  </splide-slide>
              </template>
          </Carousel>
        </div>

        <div class="list-info">
          <div class="info">
            <div class="label"><span class="space">총</span>5건</div>
            <div class="kwh">300kWh<span class="space">사용</span></div>
          </div>
          <div class="right">
            <button class="btn-type1 black type2">다운로드</button>
          </div>
        </div>
  
        <div class="history-list-wrap">
          <ul class="history-list">
            <li v-for="(item, index) in historyList" :key="index">
              <button class="box">
                <Icon type="arr-right2" />
                <div class="t-wrap">
                  <div class="row">
                    <div class="cell tit"><b>차지비</b>
                      <div v-if="item.status === 'error-type1'" class="c-green">잔액부족<br />미결제</div>
                      <div v-if="item.status === 'normal'">정상이용</div>
                    </div>
                    <div class="cell">
                      <p>{{ item.addr }}</p>
                      <p><b class="price">{{ item.price }}원</b> {{ item.method }} 결제</p>
                      <p class="date">{{ item.date }}</p>
                    </div>
                  </div>
                </div>
              </button>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>

export default {
  props: {
    checkType: {
      type: Boolean,
      default: false,
    }
  },
  data(){
    return{
      monthKey: 11,
      year: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
      month: [],
      monthData: [
        ['', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960'],
        ['','13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '55,010', ],
        ['', '3,960', '55,010', '13,450', '', '6,000', '', '', '55,010', '13,450', '', '3,960'],
        ['', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960'],
        ['', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960'],
        ['', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960'],
        ['', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960'],
        ['', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960'],
        ['', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960'],
      ],
      fixedCal: {
        year: 0,
        month: 0,
        date: 0
      },
      selectedCal: {
        year: 0,
        month: 0,
        date: 0
      },
      yearOpt: {
        pagination: false,
        // perPage: 5,
        autoWidth: true,
        trimSpace: true,
        start: 7
      },
      monthOpt: {
        pagination: false,
        // perPage: 4,
        autoWidth: true,
        trimSpace: true,
      },


      total: ['10가1234', '99호9292', '00나0001', '00나0001', '00나0001'],
      totalOpt:{
        pagination: false,
        autoWidth: true,
        trimSpace: true,
      },

      listChecked: [],
      historyList: [
        {
          addr:'서울시 송파구',
          status: 'normal',
          price:'9,010',
          method:'충전포인트',
          date:'2021-11-03 02:55:23',
          checked: true,
        },
        {
          addr:'서울시 송파구 롯데타워지하4층 완속#1',
          status: 'error-type1',
          price:'13,450',
          method:'신용카드',
          date:'2021-11-02 15:05:02',
          checked: false,
        },
        {
          addr:'서울시 송파구 롯데타워지하4층 완속#1',
          status: 'normal',
          price:'9,010',
          method:'충전포인트',
          date:'2021-11-03 02:55:23',
          checked: false,
        },
        {
          addr:'서울시 송파구 롯데타워지하4층 완속#1',
          status: 'error-type1',
          price:'13,450',
          method:'신용카드',
          date:'2021-11-02 15:05:02',
          checked: false,
        },
        {
          addr:'서울시 송파구 롯데타워지하4층 완속#1',
          status: 'error-type1',
          price:'13,450',
          method:'신용카드',
          date:'2021-11-02 15:05:02',
          checked: false,
        },
      ],
    }
  },
  created(){
    this.setToday();
    this.showYear(this.selectedCal.year)
  },  
  methods: {
    setToday(){
      let today = new Date(); 

      this.selectedCal.year = today.getFullYear();
      this.selectedCal.month = today.getMonth() + 1;

      this.fixedCal.year = today.getFullYear();
      this.fixedCal.month = today.getMonth() + 1;
    },
    showYear(y) {
      let month = [];


      var d1, d2 = y+(y-1-(y-1)%4)/4-(y-1-(y-1)%100)/100+(y-1-(y-1)%400)/400;
      for (let m = 1; m < 13; m++) {
          d1 = d2%7;
          d2 = d1+(m*9-m*9%8)/8%2+(m==2?y%4||y%100==0&&y%400?28:29:30);
          month.push(m)
      }
      this.month = month;

      this.monthOpt.start = this.selectedCal.month -4;
    },
    setYear(year){
      this.selectedCal.year= year;
      this.showYear(this.selectedCal.year)
    },
    setMonth(month){
      this.selectedCal.month = month;
    },
    setDate(date){
      this.selectedCal.date = date;
      this.fixedCal.year = this.selectedCal.year;
      this.fixedCal.month = this.selectedCal.month;
      this.fixedCal.date = date;
    }
  }
}
</script>
