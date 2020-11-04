<template>
  <v-app
  xs6
  md3
  >
    <v-app-bar
      app
      color="cyan lighten-1"
      dark
    >
     <img src="./assets/aprovalogo.png" alt=""
     style="max-width:200px;"
     class="logo1"
     >
    <p class="p1" >Formulário de LGPD (Lei Geral de Proteção de Dados) </p>
    </v-app-bar>
  
    <v-main>
      <div style="display:flex;">        
      <v-img src="./assets/doc1.svg" style="max-width: 200px; margin-left:10%;margin-top:10%;" class="doc1" />
      <Form />
      <v-img src="./assets/doc2.svg" style="max-width: 500px; margin-left:7%;" class="doc2" />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Form from './components/Form'


export default {
  name: 'App',

  components: {
    Form
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>

@media screen and (max-width: 400px) {
  .doc1 {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 80%;
    left: 25%;
  }
  .doc2 {
    display: none;
  }
  .p1 {
    display: none;
  }
  .logo1 {
    margin-left: 15%;
  }
}


</style>