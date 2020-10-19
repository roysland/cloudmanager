<template>
  <ul class="menu">
    <li>
      <router-link :to="url + '/build'">
        <f-icon icon="anchor" />
        <span>Build</span>
      </router-link>
    </li>
    <li>
      <router-link  :to="url + '/env'">
        <f-icon icon="box" />
        <span>Environment</span>
      </router-link>
    </li>
    <li>
      <router-link  :to="url + '/headers'">
        <f-icon icon="layout" />
        <span>Headers</span>
      </router-link>
    </li>
    <li>
      <router-link  :to="url + '/redirects'">
        <f-icon icon="skip-forward" />
        <span>Redirects</span>
      </router-link>
    </li>
    <hr />
    <li>
      <router-link  :to="url + '/domains'">
        <f-icon icon="globe" />
        <span>Domains</span>
      </router-link>
    </li>
    <li>
      <router-link  :to="url + '/network'">
        <f-icon icon="git-merge" />
        <span>Network</span>
      </router-link>
    </li>
    <li>
      <router-link  :to="url + '/logs'">
        <f-icon icon="activity" />
        <span>Logs</span>
      </router-link>
    </li>

  </ul>
</template>
<script>
export default {
  props: {
    service: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      url: `/service/${this.service}`
    }
  }
}
</script>