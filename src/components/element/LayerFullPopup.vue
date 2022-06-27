<template>
    <div 
      class="layer-full-popup"
      v-if="visible"
     >
      <button class="close" @click="$emit('close')">
        <Icon type="layer-page-close" class="pc-ver" />
        <Icon type="layer-page-close-m" class="mo-ver" />
      </button>
      <div class="inner-wrapper">
         <slot ref="content" name="content" />
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
}
</script>
