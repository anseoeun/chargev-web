<template>
    <LayerFullPopup :visible="visible" @close="$emit('close');" class="pop-team" >
      <template slot="content">
          <h2 class="layer-title">CnE BUSINESS DEP.</h2>
          <TeamCneBusiness />
      </template>
    </LayerFullPopup>
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