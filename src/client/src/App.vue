<template>
  <div id="app">
    <Navbar/>
    <Content>
      <router-view/>
    </Content>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/app/Navbar.vue';
import Content from '@/components/app/Content.vue';

export default Vue.extend({
  components: {
    Navbar,
    Content
  }
});
</script>

<style lang="scss">
@import '~styles/_global';
@import '~styles/main';
</style>
