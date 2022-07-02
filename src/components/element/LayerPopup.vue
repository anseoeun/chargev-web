<template>
    <div v-if="visible" class="layerpop-wrap">
      <div class="dim"></div>
      <div class="popup">
        <div class="inner-wrapper">
          <button class="close" @click="$emit('close')">
            <Icon type="layer-page-close" class="pc-ver" />
            <Icon type="layer-page-close-m" class="mo-ver" />
          </button>
           <slot ref="content" name="content" />
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
  },
    watch: {
      visible(newVisible) {
        if (newVisible) {
          document.body.style.overflow = 'hidden'
        }else{
          document.body.style.overflow = ''
        }
      }
    },  
}
</script>
