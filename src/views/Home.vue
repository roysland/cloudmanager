<template>
  <div class="home">
    <h1>Simple deployment</h1>
    <a :href="githubUrl">Auth github</a>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data () {
    return {
      activeTab: 'dns',
      githubUrl: 'https://github.com/login/oauth/authorize?scope=user:email&client_id=Iv1.a4b1e2d734263dae' 
    }
  }
}
</script>
