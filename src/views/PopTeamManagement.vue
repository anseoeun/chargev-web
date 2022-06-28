<template>
    <LayerFullPopup :visible="visible" @close="$emit('close');" class="pop-team" >
      <template slot="content">
          <h2 class="layer-title">MANAGEMENT SUPPORT DEP.</h2>
          <TeamManagement />
      </template>
    </LayerFullPopup>
</template>

<script>
import TeamManagement from '@/views/common/TeamManagement'
export default {
  components:{
    TeamManagement
  },
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
  }, 
}
</script>