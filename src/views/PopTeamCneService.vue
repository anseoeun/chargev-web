<template>
    <LayerPopup :visible="visible" @close="$emit('close');" class="layer-full-popup pop-team" >
      <template slot="content">
          <h2 class="layer-title">CnE SERVICE DEP.</h2>
          <TeamCneService />
      </template>
    </LayerPopup>
</template>

<script>
import TeamCneService from '@/views/common/TeamCneService'
export default {
  components:{
    TeamCneService
  },
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
  }, 
}
</script>