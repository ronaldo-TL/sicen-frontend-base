<template>
  
  <div class="pa-3">
    <v-row class="h-100vh mh-100 auth">
      <v-col 
        cols="12" 
        lg="7" 
        xl="8" 
        class="d-flex align-center justify-center authentication position-relative">
        <div class="text-center">
          <img 
            large-image
            src="@/assets/images/logos/logoMjti.png" 
            class="mb-5"
            alt="login-background"
            />
          <h1 class="bannerTitle pt-5 font-weight-bold text-dark">SICEN</h1>
          <h1 
            class="bannerTitle pt-5 font-weight-bold text-dark"
            data-aos="fade-up"
            data-aos-duration="500">Sistema Centralizador de Sistemas</h1>
        </div>
      </v-col>



      <v-col cols="12" lg="5" xl="4" class="d-flex align-center justify-center">
        <div class="mt-xl-0 mt-5 mw-100">
          <h2 class="text-h3 font-weight-bold mb-2">Iniciar Sesión</h2>
          <div class="text-subtitle-1 mb-6">Ingresar al 
            <span class="text-primary">LOCAL-SICEN-TEST</span></div>
          <FormularioLogin />
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script setup lang="ts">
  import FormularioLogin from "@/components/login/FormularioLogin.vue";
</script>