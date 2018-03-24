<template>
  <div id="app">
    <router-link to="/">home
    </router-link>
    <router-link to="sobre">sobre
    </router-link>
    <router-link to="contato">contato
    </router-link>
    <router-link to="contador">contador
    </router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  background-color: turquoise;
}
</style>
