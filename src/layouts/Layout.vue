<template>
    <component :is="layout" >
        <slot />
    </component>
</template>

<script>
import Default from './Default';
import Main from './Main';
export default {
    components: {
        Default,
        Main
    },
    props: {
        layout:{
            type: String,
            default: 'Default',
        },
    },
}
</script>