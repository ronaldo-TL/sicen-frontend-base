
<template>
  
  <LogoLight v-if="dark" />
  <LogoDark v-else />
</template>

<script setup>
import { computed } from "vue";
import LogoLight from "./LogoLight.vue";
import LogoDark from "./LogoDark.vue";

import { usePersonalizarStore } from "@/stores/personalizador";

const personalizar = usePersonalizarStore();

//const dark = ref(false);
const dark = computed(() => {
  if (
    personalizar.accionDelTema === "DARK_BLUE_THEME" ||
    personalizar.accionDelTema === "DARK_CYAN_THEME"
  ) {
    return true;
  } else {
    return false;
  }
});


</script>