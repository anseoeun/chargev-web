<template>
    <component :is="layout" >
        <slot />
    </component>
</template>

<script>
import Default from './Default';

export default {
    components: {
        Default,
    },
    props: {
        layout:{
            type: String,
            default: 'Default',
        },
    },
}
</script>