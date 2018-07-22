<template>
  <nav class="nav">
    <div class="container">
      <div class="nav-left">
        <router-link to="/" class="logo">
          <img src="@/assets/logo-b.svg" alt="Home" />
        </router-link>
      </div>
      <div class="nav-right">
        
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "~styles/_global";

@function nav-blur() {
  @return blur(#{v(nav-blur)});
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: v(nav-height);
  background-color: color(nav-base);
  -webkit-backdrop-filter: nav-blur();
  backdrop-filter: nav-blur();
}

@supports not ((backdrop-filter: nav-blur()) or (-webkit-backdrop-filter: nav-blur())) {
  .nav {
    background: {
      color: color(nav-no-blur);
    }
  }
}

.logo {
  @include v(nav-logo-padding, 5px);
  padding: v(nav-logo-padding);
  height: 100%;
}

.logo img {
  --tmp-size: calc(#{v(nav-height)} - (#{v(nav-logo-padding)} * 2));
  min-width: var(--tmp-size);
  min-height: var(--tmp-size);
}
</style>
