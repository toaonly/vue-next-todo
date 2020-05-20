<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Vue2 TODO List</router-link>
      <router-link to="/Vue3">Vue3 TODO List</router-link>
    </div>
    
    <div id="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
html, body {
  margin: 0;
  font-size: 16px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1rem;
  color: #2c3e50;
}

#nav {
  display: flex;
  box-shadow: inset 0px -1px 0px 0px #42b983;

  a {
    display: block;
    flex: 1;
    line-height: 3.75rem;
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      background-color: #42b983;
      color: #fff;
    }
  }
}

#container {
  padding: 2rem;
}
</style>

<style lang="scss">
.todo-wrapper {
  margin: 0 auto;
  width: 100%;
  max-width: 480px;

  .todo-input {
    display: flex;

    input {
      flex: 1;
      padding: 0 1rem;
      border: 0;
      box-shadow: inset 0 0 0 1px #42b983;
      font-size: 1rem;

      &:focus {
        outline: none;
      }
    }

    button {
      padding: 0;
      width: 6rem;
      height: 3rem;
      border: 0;
      background-color: #42b983;
      font-size: 1rem;
      font-weight: 500;
      color: #fff;
    }
  }

  .todo-list {
    margin: 2rem 0;

    .todo-item {
      display: flex;
      margin: 1rem 1.25rem;
      align-items: center;
      font-size: 1rem;

      .todo {
        flex: 2;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .reg-date { flex: 1; }
      button {
        padding: 0;
        width: 4.75rem;
        height: 2rem;
        border: 0;
        background-color: #42b983;
        font-size: .875rem;
        font-weight: 500;
        color: #fff;
      }
    }
  }
}
</style>