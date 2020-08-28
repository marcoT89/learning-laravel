<template>
    <component :is="`${name}-icon`" v-bind="$props"></component>
</template>

<script>
export default {
    props: {
        name: { required: true, type: String },
    },
};
</script>
