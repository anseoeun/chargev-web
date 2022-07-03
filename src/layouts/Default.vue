<template>
    <div class="wrap">
        <Header />
        <slot />
        <Footer />
        <button v-if="scrollBtmShow" class="btn-scroll" @click="scrollBtm"><span>SCROLL</span></button>
    </div>
</template>

<script>
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
export default {
    components: {
        Header,
        Footer
    },

}
</script>