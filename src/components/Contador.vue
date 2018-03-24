<template lang="html">
  <div class="calc">
    <p>Valor: {{valor}}</p>
    <input type="number" v-model="entrada">
    <button type="button" @click="agregarValor()">Somar</button>
    <button type="button" @click="subtrairValor()">Subtrair</button>
    <p>{{parOuImpar}}</p>
    <p>{{numeroPrimo}}</p>
    <p>{{negativoOuPositivo}}</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    valor: 0,
    entrada: 0,
  }),
  computed: {
    parOuImpar() {
      if (this.valor % 2 === 0) {
        return 'PAR';
      }
      return 'IMPAR';
    },
    numeroPrimo() {
      for (const i = 2; i < this.value; i + 1) {
        if (this.value % i === 0) {
          return 'NAO PRIMO';
        }
      }
      return this.value > 1;
    },
    negativoOuPositivo() {
      if (this.valor > 0) {
        return 'POSITIVO';
      }
      return 'NEGATIVO';
    },
  },
  methods: {
    agregarValor() {
      this.valor += parseInt(this.entrada, 10);
    },
    subtrairValor() {
      this.valor -= parseInt(this.entrada, 10);
    },
  },
};
</script>

<style lang="css">
</style>
