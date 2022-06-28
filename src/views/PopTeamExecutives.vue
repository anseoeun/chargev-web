<template>
    <LayerFullPopup :visible="visible" @close="$emit('close');" class="pop-team" >
      <template slot="content">
          <h2 class="layer-title">EXECUTIVES</h2>
          <TeamExcutives />
      </template>
    </LayerFullPopup>
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