<template>
  <div class="pt-6 lp-mobile-sidebar">
    <div class="ml-6 mb-3">
      <div>
        <!-- <Logo /> -->
        <v-img :src="logo" width="200" height="auto"></v-img>
      </div>
    </div>

    <v-list class="py-0 px-2">
      <v-list-item rounded="md">
        <v-btn 
          variant="text" 
          class="custom-hover-primary px-0 text-left" 
          flat
          href="#">
          <h5 class="text-subtitle-1">___</h5>
        </v-btn>
      </v-list-item>
      <v-list-item rounded="md">
        <v-btn 
          variant="text" 
          class="custom-hover-primary px-0 text-left" 
          flat
          href="#">
          <h5 class="text-subtitle-1">___</h5>
        </v-btn>
      </v-list-item>

      <v-list-item class="mt-2" rounded="md">
        <v-btn 
          class="custom-hover-primary bg-success" 
          block flat href="/auth/login">
          Ingresar
        </v-btn>
      </v-list-item>
    </v-list>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { AppsIcon, CalendarIcon, MailIcon, MessagesIcon } from 'vue-tabler-icons';
import { usePersonalizarStore } from '@/stores/personalizador';
import logo from "@/assets/images/logos/mini_logo_mjti.png";
// import Logo from '@/layouts/full/logo/Logo.vue';
// import RtlLogo from '@/layouts/full/logo/RtlLogo.vue';
const personalizador = usePersonalizarStore();
</script>