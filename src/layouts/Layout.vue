<template>
    <component :is="layout" >
        <slot />
    </component>
</template>

<script>
import Default from './Default';
import Main from './Main';
import None from './None';
export default {
    components: {
        Default,
        Main,
        None
    },
    props: {
        layout:{
            type: String,
            default: 'Default',
        },
    },
}
</script>