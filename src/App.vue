<template>
  <div id="app">
    <Header/>
    <Home msg="AORUS Sales APP"/>
  </div>
</template>

<script>
import Header from './components/commit/Header.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Header,
    Home
  }
}
</script>

<style>
body{
  margin: 0 auto;
}
#app {

}
</style>
