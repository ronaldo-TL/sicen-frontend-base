<template>
  <!-- <v-img :src="logo" width="180" height="auto" class="marco-logo"></v-img><br> -->
  <v-img :src="logo1" width="180" height="auto" class="marco-logo"></v-img><br>
  <v-img :src="logo2" width="180" height="auto" class="marco-logo"></v-img><br>
  <v-img :src="logo3" width="180" height="auto" class="marco-logo"></v-img><br>
  <v-img :src="logo4" width="180" height="auto" class="marco-logo"></v-img><br>
  <v-img :src="logo5" width="180" height="auto" class="marco-logo"></v-img><br>
</template>
<script setup lang="ts">

import logo from "@/assets/images/logos/logoMjti.png";
import logo1 from "@/assets/images/logos/logo_rpa.jpg";
import logo2 from "@/assets/images/logos/logo_sepdavi.jpg";
import logo3 from "@/assets/images/logos/logo_sijplu.jpg";
import logo4 from "@/assets/images/logos/logo_tde.png";
import logo5 from "@/assets/images/logos/logo_bicentenario.jpg";
</script>

<style lang="scss" scoped>
.marco-logo {
  border-radius: 4%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.040);

}</style>