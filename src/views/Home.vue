<template>
  <div class="home">

      <div v-if="!$store.state.user" class="flex align-center justify-center">
      <a :href="githubUrl" class="panel loginGit">
        <f-icon icon="github" />
        <span>Login using Github</span>
      </a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data () {
    return {
      activeTab: 'dns',
      githubUrl: 'https://github.schibsted.io/login/oauth/authorize?scope=user:email&client_id=Iv1.57fd278a206364eb' 
    }
  }
}
</script>
