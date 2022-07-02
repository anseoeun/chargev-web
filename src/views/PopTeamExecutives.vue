<template>
    <LayerPopup :visible="visible" @close="$emit('close');" class="layer-full-popup pop-team" >
      <template slot="content">
          <h2 class="layer-title">EXECUTIVES</h2>
          <TeamExcutives />
      </template>
    </LayerPopup>
</template>

<script>
import TeamExcutives from '@/views/common/TeamExcutives'
export default {
  components:{
    TeamExcutives
  },
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
  }, 
}
</script>