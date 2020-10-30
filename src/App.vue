<template>
  <v-app>
    <v-app-bar
      app
      color="cyan lighten-1"
      dark
    >
     <img src="./assets/aprovalogo.png" alt=""
     style="max-width:200px;"
     >
    </v-app-bar>
  
    <v-main>
      <Form />
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
