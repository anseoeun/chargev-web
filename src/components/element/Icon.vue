<template>
   <i v-if="type === 'chargev'" :class="cls"><svg width="160" height="16" viewBox="0 0 160 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 8.04407V8.0004C0 3.60249 3.29763 9.53674e-07 8.0238 9.53674e-07C10.9251 9.53674e-07 12.662 0.97234 14.091 2.38662L11.9365 4.88417C10.7498 3.8009 9.54032 3.13823 8.0016 3.13823C5.40802 3.13823 3.5394 5.30412 3.5394 7.95593V8.0004C3.5394 10.6521 5.36378 12.8618 8.0016 12.8618C9.76052 12.8618 10.8374 12.1545 12.0462 11.0497L14.2009 13.2379C12.6179 14.9395 10.8595 16 7.89174 16C3.36326 16 0 12.4863 0 8.04407Z" fill="white"/> <path d="M24.3759 0.265093H27.7613V6.3868H34.0046V0.265093H37.3899V15.7349H34.0046V9.52503H27.7613V15.7349H24.3759V0.265093Z" fill="white"/> <path d="M80.207 7.77899C81.8556 7.77899 82.8006 6.89543 82.8006 5.59143V5.54712C82.8006 4.08837 81.7893 3.33741 80.1408 3.33741H76.7775V7.77899H80.207ZM73.3922 0.26516H80.4266C82.3831 0.26516 83.8997 0.817548 84.911 1.83419C85.7684 2.69608 86.2303 3.91195 86.2303 5.37022V5.41452C86.2303 7.91159 84.8888 9.48062 82.9325 10.2101L86.692 15.7349H82.735L79.4374 10.7846H79.3931H76.7775V15.7349H73.3922V0.26516Z" fill="white"/> <path d="M96.0753 8.04407V8.0004C96.0753 3.60249 99.4828 9.53674e-07 104.143 9.53674e-07C106.913 9.53674e-07 108.584 0.751609 110.188 2.12142L108.056 4.70726C106.869 3.71293 105.814 3.13823 104.033 3.13823C101.571 3.13823 99.6147 5.32627 99.6147 7.95593V8.0004C99.6147 10.829 101.55 12.9061 104.275 12.9061C105.506 12.9061 106.606 12.5966 107.463 11.9782V9.76785H104.056V6.82884H110.738V13.5468C109.156 14.8952 106.979 16 104.165 16C99.3729 16 96.0753 12.6189 96.0753 8.04407Z" fill="white"/> <path d="M160 0.265062H157.776H154.127H154.127L150.104 11.1602L146.081 0.265062H142.344L148.565 15.8453H151.555L156.591 3.232H160V0.265062Z" fill="white"/> <path d="M56.8415 0.265062H53.8518L48.8157 12.8782H45.4062V15.8453H47.631H51.2794H51.2801L55.3027 4.95033L59.3259 15.8453H63.0627L56.8415 0.265062Z" fill="white"/> <path d="M124.827 6.43117V3.29294H133.07V0.264994H121.463V15.7349H133.18V12.707H124.827V9.45847H129.712V6.43117H124.827Z" fill="white"/> </svg> </i>
   <i v-else-if="type === 'arr-more'" :class="cls"><svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.5 11H19.5M19.5 11L11.5 1M19.5 11L11.5 21" stroke="#8FFF44" stroke-width="2"/> </svg> </i>
   <i v-else-if="type === 'arr-right'" :class="cls"><svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.5 11H19.5M19.5 11L11.5 1M19.5 11L11.5 21" stroke="#8FFF44" stroke-width="2"/> </svg> </i>
   <i v-else-if="type === 'arr-noti'" :class="cls"><svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 24.5V0.5L20.5714 12.5L0 24.5Z" fill="#C4C4C4"/> </svg> </i>
   <i v-else-if="type === 'arr-back'" :class="cls"><svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20.5 11L1.5 11M1.5 11L9.5 21M1.5 11L9.5 1" stroke="#8FFF44" stroke-width="2"/> </svg> </i>
   <i v-else-if="type === 'layer-page-close'" :class="cls"><svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M35 3L3 35M3 3L35 35" stroke="white" stroke-width="6"/> </svg> </i>
   <i v-else-if="type === 'layer-page-close-m'" :class="cls"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M24.9995 0.999512L0.999512 24.9995M0.999512 0.999512L24.9995 24.9995" stroke="white" stroke-width="2"/> </svg> </i>
   <i v-else-if="type === 'plus'" :class="cls"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16 8H8M0 8H8M8 8V0M8 8V16" stroke="white" stroke-width="4"/> </svg> </i>
  
</template>
<script>
export default {
  props: {
      type:{
          type: String,
          default: null,
      },
      icoClass:{
          type: String,
          default: null,
      },
      src: {
          type: String,
          default: ''
      }
  },
  data(){
    return {
        cls: 'i-'+ this.type + (this.icoClass ? ' ' + this.icoClass : '')
    }
  },
   mounted(){
    this.setSvgPrevent();
    // this.setStyle();
  },
   methods: {
       setSvgPrevent(){
           if(this.$el.querySelector('.svg-prevent')) return;
           let svgprevent = document.createElement('span')
           svgprevent.classList.add('svg-prevent')
           this.$el.prepend(svgprevent)
       },
   }  
}
</script>
