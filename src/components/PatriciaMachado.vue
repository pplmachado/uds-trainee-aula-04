<template>
  <div class="InformacoesPessoais">
    <div class="Nome">
      <p>Patricia Machado 27 anos</p>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      msg: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .InformacoesPessoais {
    background-color: red !important;
    font-size: 200%;
    color: orange;
    text-align: center;
  }
  .Nome {
    height: 1000px;
    background-image: url("https://nosbastidores.com.br/wp-content/uploads/2017/04/ghost.jpg");
  }
</style>
