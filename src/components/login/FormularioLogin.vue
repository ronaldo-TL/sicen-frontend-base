<template>
  <Form @submit="validate" v-slot="{ errors, isSubmitting }" class="mt-5">
      <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">Cedula de Identidad</v-label>
      <VTextField
          v-model="usuario"
          class="mb-8"
          placeholder="Cedula de Identidad"
          required
          hide-details="auto"
      ></VTextField>
      <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">Contraseña</v-label>
      <VTextField
          v-model="contrasena"
          :rules="passwordRules"
          required
          hide-details="auto"
          placeholder="Contraseña"
          type="password"
          class="pwdInput"
      ></VTextField>
      <div class="d-flex flex-wrap align-center my-3 ml-n2">
          <div class="text-subtitle-1 mb-6">¿Aún no eres ciudadano digital?
            <span class="text-primary">Registrate Aqui</span></div>
      </div>
      <v-btn 
        size="large" 
        :loading="isSubmitting" 
        color="primary" 
        :disabled="valid" 
        block 
        type="submit" 
        flat>Continuar</v-btn>

      <div v-if="errors.apiError" class="mt-2">
          <v-alert color="error">{{ errors.apiError }}</v-alert>
      </div>
  </Form>
</template>
  
<script setup lang="ts">
  import { ref } from 'vue';
  import { useAuthStore } from '@/stores/auth';
  import { Form } from 'vee-validate';

  const checkbox = ref(false);
  const valid = ref(false);
  const show1 = ref(false);
  const contrasena = ref('');
  const usuario = ref('');
  const passwordRules = ref([
      (v: string) => !!v || 'La Contraseña es requerida',
      (v: string) => (v && v.length >= 6) || 'La contraseña debe tener mas de 6 caracteres'
  ]);
  const emailRules = ref([(v: string) => !!v || 'El correo electronico es requerido', (v: string) => /.+@.+\..+/.test(v) || 'El correo electronico debe ser valido']);

  function validate(values: any, { setErrors }: any) {
      const authStore = useAuthStore();
      return authStore.login(contrasena.value, usuario.value).catch((error) => setErrors({ apiError: error }));
  }
</script>