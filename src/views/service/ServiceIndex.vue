<template>
    <section class="servicePage">
        <portal to="sidebar">
            <service-navigation :service="$route.params.service"></service-navigation>
        </portal>
        <router-view :key="$route.fullPath" />
    </section>
</template>
<script>
import ServiceNavigation from './ServiceNavigation.vue'
export default {
    components: { ServiceNavigation },
    mounted () {
        this.$http.get(`/services/${this.$route.params.service}`)
        .then((response) => {
          this.$store.commit('SET_SERVICE', response.data.service)
        })
        .catch((e) => {
          console.log(e)
        })
    }
}
</script>