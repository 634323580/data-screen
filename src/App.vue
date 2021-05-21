<template>
  <div id="nav">
    <test-component></test-component>
    <div>
      <svg width="100" height="100" style="color: red">
        <use href="#more"></use>
      </svg>
    </div>
    <div>
      <svg width="100" height="100" style="color: red">
        <use href="#filledArrowRight"></use>
      </svg>
    </div>
    <div>
      <svg width="100" height="100" style="color: red">
        <use href="#arrowRight"></use>
      </svg>
    </div>
    <Icon name="filledArrowRight" style="color: red; width: 50px; height: 50px;"></Icon>
    <Icon name="filledArrowRight" style="color: red; width: 50px; height: 50px;"></Icon>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
