<template>
    <div class="wrap">
        <Header />
        <slot />
        <Footer />
        <button class="btn-scroll"><span>SCROLL</span></button>
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