<template>
    <LayerPopup :visible="visible" @close="$emit('close');" class="layer-popup pop-rules" >
      <template slot="content">
          <Terms v-if="ruleType === 'terms'" />
          <Privicy v-else-if="ruleType === 'privicy'" />
      </template>
    </LayerPopup>
</template>

<script>
import Terms from '@/views/common/Terms'
import Privicy from '@/views/common/Privicy'
export default {
  components: {
    Terms,
    Privicy,
  },    
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
    ruleType: {
      type: String,
      default: ''
    }
  }, 
}
</script>