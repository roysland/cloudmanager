<template>
  <div class="app">
  <side-bar></side-bar>
  <main>
    <router-view/>
  </main>

  </div>
</template>
<script>
import SideBar from '@/components/SideBar.vue'

export default {
  components: { SideBar }
}
</script>