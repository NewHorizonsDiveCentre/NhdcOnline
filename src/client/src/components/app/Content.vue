<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import '~styles/_global';

.container {
  margin-top: v(nav-height);
}
</style>
