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
      <li>
        <a @click="expand('sub')">
          <f-icon icon="grid" />
          <span>Deploy</span>
          <f-icon icon="chevron-down" />
        </a>
        <ul class="menu" v-show="menus.sub">
            <li><router-link to="/"><span>More</span></router-link></li>
        </ul>
      </li>
      <li>
        <router-link to="/service/1">
          <f-icon icon="grid" />
          <span>Service</span>
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
            }
        }
    },
    methods: {
        expand (name) {
            this.menus[name] = !this.menus[name]
        }
    }
}
</script>