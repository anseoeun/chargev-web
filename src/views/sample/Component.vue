<template>
  <div class="contents" style="padding:2rem">
    <h2 class="guide-tit">버튼 스타일</h2>
    <button class="btn-type1">버튼 btn-type1</button> <br />
    <button class="btn-type1 black">버튼 btn-type1 black</button> <br />
    <button class="btn-type1 type2">버튼 btn-type1 type2</button> <br />
        <button class="btn-more">버튼 btn-more<Icon type="arr-more" /></button>

    
    <h2 class="guide-tit">타이틀 스타일</h2>
    <h2 class="title-type1">타이틀 타입 1</h2>
    <h3 class="title-type2">타이틀 타입 2</h3>
    <h3 class="title-type3">타이틀 타입 3</h3>

    <h2 class="guide-tit">팝업</h2>    
    <button class="btn-type1 st2" @click="layerPop.PopPartners = true">페이지 팝업열기</button> &nbsp;&nbsp;
    <button class="btn-type1 st2" @click="layerPop.PopRules = true">작은 팝업열기</button>


    <!-- 페이지 팝업열기 -->
    <PopPartners :visible="layerPop.PopPartners" @close="layerPop.PopPartners = false" />
    <!-- 작은 팝업열기 -->
    <PopRules :visible="layerPop.PopRules" ruleType="terms" @close="layerPop.PopRules = false" />
  </div>
</template>
<script>
import PopPartners from '@/views/PopPartners'
import PopRules from '@/views/PopRules'
export default {
    components:{
      PopPartners,
      PopRules,
    },  
    data(){
      return{
        layerPop:{
          PopPartners: false,
          PopRules: false,
        }
      }
    }
};
</script>
<style scoped>
.guide-line{border-top:1px dotted #fff;margin:3rem 0;}
.guide-tit{font-weight: bold; border: 1px solid #fff;padding:0.252rem;margin-bottom:1rem;background: #f9f9f9;color: #000;}
.guide-tit ~ .guide-tit{margin-top:3rem;}
</style>


