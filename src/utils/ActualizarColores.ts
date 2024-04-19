import { computed } from 'vue';

import * as temaColores from '@/theme/LightTheme'
import * as temaColoresOscuros from '@/theme/DarkTheme'
import { usePersonalizarStore } from "@/stores/personalizador";     

const personalizador = usePersonalizarStore()

const getPrimary = computed(() => {
  if(personalizador.accionDelTema === 'DARK_CYAN_THEME'){
    return temaColoresOscuros.DARK_CYAN_THEME.colores.primary
  }else{
    return temaColores.CYAN_THEME.colores.primary
  }
})

const getLightPrimary = computed(() => {
  if(personalizador.accionDelTema === 'CYAN_THEME'){
    return temaColores.CYAN_THEME.colores.lightprimary
  }
  if(personalizador.accionDelTema === 'DARK_CYAN_THEME'){
    return temaColoresOscuros.DARK_CYAN_THEME.colores.lightprimary
  }else{
    return temaColores.CYAN_THEME.colores.lightprimary
  }
})

const getSecondary = computed(() => {
  if(personalizador.accionDelTema === 'DARK_CYAN_THEME'){
    return temaColoresOscuros.DARK_CYAN_THEME.colores.secondary
  }else{
    return temaColores.CYAN_THEME.colores.secondary
  }
})

const getLightSecondary = computed(() => {
  if(personalizador.accionDelTema === 'DARK_CYAN_THEME'){
    return temaColoresOscuros.DARK_CYAN_THEME.colores.lightsecondary
  }else{
    return temaColores.CYAN_THEME.colores.lightsecondary
  }
})

const getLight100 = computed(() => {
  if(personalizador.accionDelTema === 'DARK_CYAN_THEME'){
    return temaColoresOscuros.DARK_CYAN_THEME.colores.grey100 
  }else{
    return temaColores.CYAN_THEME.colores.grey100
  }
})

export {
  getPrimary,
  getLightPrimary,
  getSecondary,
  getLightSecondary,
  getLight100
}