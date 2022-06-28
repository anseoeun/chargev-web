<template>
    <LayerFullPopup :visible="visible" @close="$emit('close');" class="pop-team" >
      <template slot="content">
          <h2 class="layer-title">PLATFORM CENTOR</h2>
          <TeamPlatform />
      </template>
    </LayerFullPopup>
</template>

<script>
import TeamPlatform from '@/views/common/TeamPlatform'
export default {
  components:{
    TeamPlatform
  },
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
  }, 
}
</script>