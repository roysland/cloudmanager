<template>
    <svg class="feather">
        <use :xlink:href="`/feather-sprite.svg#${icon}`"/>
    </svg>
</template>
<script>
export default {
    props: ['icon']
}
</script>