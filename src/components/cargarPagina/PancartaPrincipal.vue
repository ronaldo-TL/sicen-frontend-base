<template>
  <div class="py-16 overflow-hidden">
    <v-container>
      <v-row>
        <v-col 
          cols="12" 
          lg="6"
          md="12"
          class="d-flex aling-center">
            <div class="mt-8 mt-lg-0">
              <span
                class="text-h6 d-flex align-center gap-2"
                data-aos="fade-up"
                data-aos-duration="400">
                <RocketIcon 
                  size="18"
                  class="text-secondary"/>
                  Sistema Centralizador de Sistemas
              </span>
              <h1
                class="bannerTitle pt-5 font-weight-bold"
                data-aos="fade-up"
                data-aos-duration="500">
                
              </h1>
            </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup lang="ts">
import { RocketIcon } from 'vue-tabler-icons';
</script>
<style lang="scss" scoped>
.v-container {
    max-width: 1200px !important;
}
</style>
