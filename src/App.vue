<template>
  <div class="app">
  <side-bar v-if="$store.state.user"></side-bar>
  <main>
    <router-view/>
  </main>

  </div>
</template>
<script>
import SideBar from '@/components/SideBar.vue'

export default {
  components: { SideBar },
  data () {
    return {
      githubUrl: 'https://github.schibsted.io/login/oauth/authorize?scope=user:email&client_id=Iv1.57fd278a206364eb' 
    }
  }
}
</script>
<style lang="scss">
.loginGit {
  display: flex;
  flex-direction: column;
  align-items: center;
  .feather {
    width: 64px;
    height: 64px;
    color: #000;
    margin-bottom: 1rem;
  }
  span {
    font-weight: 500;
    font-size: 13px;
    color: #000;
  }
}
</style>