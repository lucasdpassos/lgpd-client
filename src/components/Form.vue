<template>  
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    style="margin-left: 10%;"
    class="form1"
  >
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="500"
    >  
       
     
      <v-card>
        <v-card-title class="headline">
          Lei de Proteção aos Dados
        </v-card-title>
        <v-card-text>TERMO DE AUTORIZAÇÃO DE USO, TRATAMENTO E COMPARTILHAMENTO DE DADOS


Este documento visa registrar a manifestação livre, informada e inequívoca pela qual o Titular concorda com o uso, tratamento e compartilhamento de seus dados pessoais para finalidade específica, em conformidade com a Lei nº 13.709 – Lei Geral de Proteção de Dados Pessoais (LGPD).
Ao manifestar sua aceitação para com o presente termo, o Titular consente e concorda que e Fácil Consultoria Imobiliária Ltda.., sob o nome fantasia I.Nova Consultoria Imobiliária, sociedade empresária, inscrita no CNPJ sob o n.º 11.914.366/0001-92, com sede à Rua Otávio Tarquino, n.º 410, Grupo 616, Cento, Nova Iguaçu, Rio de Janeiro, Cep.:26210-172, representada neste ato nos termos de seu contrato social, use  seus dados em todos os âmbitos de ferramentas e  sistemas, podendo tratá-los e compartilhá-los, para os fins específicos previstos nesta autorização.

Dados Pessoais
A Fácil Consultoria Imobiliária LTDA fica autorizada a tomar decisões referentes ao uso,  tratamento e compartilhamento  dos seguintes dados pessoais do Titular, e quando viável do seu conjuge:
•	Nome completo;
•	Nome empresarial;
•	Data de nascimento;
•	Número e imagem da Carteira de Identidade (RG);
•	Número e imagem do Cadastro de Pessoas Físicas (CPF);
•	Número e imagem da Carteira Nacional de Habilitação (CNH);
•	Número do Cadastro Nacional de Pessoas Jurídicas (CNPJ);
•	Fotografia 3x4;
•	Estado civil;
•	Nível de instrução ou escolaridade;
•	Endereço completo;
•	Números de telefone, WhatsApp e endereços de e-mail;
•	Banco, agência e número de contas bancárias;
•	Bandeira, número, validade e código de cartões de crédito;
•	Nome de usuário e senha específicos para uso dos serviços do Controlador;
•	Comunicação, verbal e escrita, mantida entre o Titular e o Controlador.
Lê-se Controlador , Fácil Consultoria Imobiliária LTDA

Finalidade do uso, tratamento e compartilhamento dos dados
O Controlador fica autorizado a compartilhar os dados pessoais do Titular com outros agentes de tratamento de dados, caso seja necessário para as finalidades listadas neste termo, observados os princípios e as garantias estabelecidas pela Lei nº 13.709.
O tratamento dos dados pessoais listados neste termo tem as seguintes finalidades:
• Possibilitar que o Controlador identifique e entre em contato com o Titular para fins de relacionamento comercial.
• Possibilitar que o Controlador analise e obtenha o crédito imobiliário junto a Caixa Econômica Federal, elabore contratos comerciais e emita cobranças contra o Titular, mediante entrega de cópia de seus documentos pessoais, comprante de residencia e informações acerca de sua remuneração para validação do processo de financiamento 
• Possibilitar que o Controlador verifique pendências financeiras, que o impacte na obtenção do crédito imobiliário e auxilie o cliente em sanar essa pendência


Segurança dos dados
O Controlador  responsabiliza-se pela  manutenção de medidas de segurança, técnicas e administrativas aptas a proteger os dados pessoais e a realizar o tratamento dos seguintes dados inseridos pelo Titular, com a intenção de obter a prestação dos serviços ofertados pela mesma, como por exemplo: o crédito imobiliário através do aplicativo que viabiliza a análise de crédito e aprovação junto a CEF, o crédito imobiliário através de um corretor credenciado à Fácil Consultoria Imobiliária, escolha do imóvel



Término do Tratamento dos Dados
O Controlador poderá manter e tratar os dados pessoais do Titular durante todo o período em que os mesmos forem pertinentes ao alcance das finalidades listadas neste termo. Dados pessoais anonimizados, sem possibilidade de associação ao indivíduo, poderão ser mantidos por período indefinido.
O Titular poderá solicitar via e-mail ou correspondência ao Controlador, a qualquer momento, que sejam eliminados os dados pessoais não anonimizados do Titular. O Titular fica ciente de que poderá ser inviável ao Controlador continuar o fornecimento de produtos ou serviços ao Titular a partir da eliminação dos dados pessoais.
Direitos do Titular
O Titular tem direito a obter do Controlador, em relação aos dados por ele tratados, a qualquer momento e mediante requisição: I - confirmação da existência de tratamento; II - acesso aos dados; III - correção de dados incompletos, inexatos ou desatualizados; IV - anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto na Lei nº 13.709; V - portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa, de acordo com a regulamentação da autoridade nacional, observados os segredos comercial e industrial; VI - eliminação dos dados pessoais tratados com o consentimento do titular, exceto nas hipóteses previstas no art. 16 da Lei nº 13.709; VII - informação das entidades públicas e privadas com as quais o controlador realizou uso compartilhado de dados; VIII - informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa; IX - revogação do consentimento, nos termos do § 5º do art. 8º da Lei nº 13.709.
Direito de Revogação do Consentimento
Este consentimento poderá ser revogado pelo Titular, a qualquer momento, mediante solicitação via e-mail ou correspondência ao Controlador.

Tendo o presente Termo sido apresentado ao cliente, assinam o presente termo em duas vias de igual forma e teor e/ou
tendo o acesso a esse Termo de forma online, em um dos nossos sistemas, aplicativos e/ou publicações em redes sociais, compete o cliente, clicar no aceite do Termo, para validar os procedimentos apresentados acima.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"            
          >
            Fechar
          </v-btn>         
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
    <v-text-field
      v-model="name"
      :counter="40"
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
    <v-text-field
      v-model="telefone"
      :rules="phoneRules"
      label="Telefone Celular"
      required
      style="max-width: 250px;"
      v-mask="'(##)####-#####'"

    ></v-text-field>  

    
     <v-container fluid>
    <v-checkbox v-model="checkbox">
      <template v-slot:label>
        <div>
          Eu concordo com os
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <a
                target="_blank"
                @click="dialog = true"
                @click.stop
                v-on="on"
              >
                Termos e condições
              </a>
            </template>
            Abrir janela
          </v-tooltip>
          
        </div>
      </template>
    </v-checkbox>
  </v-container> 
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

import { db } from '../services/firebase';

  export default {
    data: () => ({
      user: [],      
      termos: '',
      userId: '',
      dialog: false,
      valid: true,
      checkbox: false,
      name: '',
      telefone: '',
      nameRules: [
        v => !!v || 'Nome é um campo obrigatório',       
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail é um campo obrigatório',
        v => /.+@.+\..+/.test(v) || 'Precisa ser um email válido',
      ],
      select: null,
      phoneRules: [
        v => !!v || 'Telefone é um campo obrigatório',    
        
      ],
    }),

    methods: {
      validate () {
        this.$refs.form.validate()

        return db.collection('users').add({
          name: this.name,
          telefone: this.telefone,
          email: this.email

          
        }),
       this.$refs.form.reset()
                
        
        .then(function(docRef) {
          console.log("Usuário cadastrado com o ID: ", docRef.id)
          
        })       
       
        
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

