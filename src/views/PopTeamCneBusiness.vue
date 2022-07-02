<template>
    <LayerPopup :visible="visible" @close="$emit('close');" class="layer-full-popup pop-team">
      <template slot="content">
          <h2 class="layer-title">CnE BUSINESS DEP.</h2>
          <TeamCneBusiness />
      </template>
    </LayerPopup>
</template>

<script>
import TeamCneBusiness from '@/views/common/TeamCneBusiness'
export default {
  components:{
    TeamCneBusiness
  },
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
  }, 
}
</script>