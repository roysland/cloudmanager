<template>
    <section class="servicePage">
        <portal to="sidebar">
            <service-navigation :service="$route.params.service"></service-navigation>
        </portal>
        <router-view />
    </section>
</template>
<script>
import ServiceNavigation from './ServiceNavigation.vue'
export default {
    components: { ServiceNavigation }
}
</script>