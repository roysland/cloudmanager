<template>
  <nav role="navigation" class="sidebar">
    <ul class="menu">
      <li>
        <router-link to="/">
          <f-icon icon="grid" />
          <span>Dashboard</span>
        </router-link>
      </li>
    </ul>
    <hr />
    
    <portal-target name="sidebar">
    <ul class="menu">
      <li v-for="service in $store.state.services" :key="service.id">
        <router-link :to="`/service/${service.id}`">
          <f-icon icon="folder" />
          <span>{{service.repo}}</span>
        </router-link>
      </li>
    </ul>
    
    </portal-target>
    <div style="margin-top: auto;" class="mb-4">
        <hr />
    <router-link to="/wizard" class="btn blue block">Create</router-link>
    </div>
  </nav>
</template>
<script>
export default {
    data () {
        return {
            menus: {
                sub: false
            },
            services: []
        }
    },
    methods: {
        expand (name) {
            this.menus[name] = !this.menus[name]
        },
        async getServices () {
          let response = await fetch('http://localhost:8000/services', {
                method: 'GET',
                headers: new Headers({
                    'Authorization': 'Bearer ' + this.$store.state.user.api_token,
                    'Content-type': 'application/json'
                })
            })

            let json = await response.json()
            this.$store.commit('SET_SERVICES', json.services)
        }
    },
    watch: {
      '$store.state.user' () {
        this.getServices()
      }
    },
    mounted () {
      if (this.$store.state.user) {
        this.getServices()
      }

    }
}
</script>