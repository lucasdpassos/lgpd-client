<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    style="margin-left: 40%;"
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Nome"
      required
      style="max-width: 250px;"
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
      style="max-width: 250px;"

    ></v-text-field>  

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'Você deve concordar para prosseguir!']"
      label="Você concorda?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validar
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reiniciar
    </v-btn>

   
  </v-form>
</template>


<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Nome é um campo obrigatório',       
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail é um campo obrigatório',
        v => /.+@.+\..+/.test(v) || 'Precisa ser um email válido',
      ],
      select: null,
      
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>
