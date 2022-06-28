<template>
    <div class="wrap">
        <HeaderMain />
        <slot />
        <Footer />
        <button class="btn-scroll" @click="scrollBtm"><span>SCROLL</span></button>
    </div>
</template>

<script>
import HeaderMain from '@/components/layout/HeaderMain';
import Footer from '@/components/layout/Footer';
export default {
    components: {
        HeaderMain,
        Footer
    },
}
</script>