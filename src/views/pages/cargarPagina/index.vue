

<template>
    <div class="lp-wraper">
        <!--Header-->
        <Header />

        <PancartaPrincipal />



    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import PancartaPrincipal from '@/components/cargarPagina/PancartaPrincipal.vue';
import Header from '@/components/cargarPagina/Header.vue';

import 'aos/dist/aos.css';
import AOS from 'aos';
onMounted(() => {
    AOS.init();
});
</script>