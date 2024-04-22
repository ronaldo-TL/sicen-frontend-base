import { computed } from 'vue';

import * as temaColores from '@/theme/LightTheme'
import * as temaColoresOscuros from '@/theme/DarkTheme'
import { usePersonalizarStore } from "@/stores/personalizador";     

const personalizador = usePersonalizarStore()

const getPrimary = computed(() => {
  
  if(personalizador.accionDelTema === 'CYAN_THEME'){
    return temaColores.CYAN_THEME.colors.primary
  }else if(personalizador.accionDelTema === 'DARK_BLUE_THEME'){
    return temaColoresOscuros.DARK_BLUE_THEME.colors.primary
  }else if(personalizador.accionDelTema === 'DARK_CYAN_THEME'){
    return temaColoresOscuros.DARK_CYAN_THEME.colors.primary
  }else{
    return temaColores.BLUE_THEME.colors.primary
  }
})

const getLightPrimary = computed(() => {
  if(personalizador.accionDelTema === 'CYAN_THEME'){
    return temaColores.CYAN_THEME.colors.lightprimary
  }
  if(personalizador.accionDelTema === 'DARK_BLUE_THEME'){
    return temaColoresOscuros.DARK_BLUE_THEME.colors.lightprimary
  }else if(personalizador.accionDelTema === 'DARK_CYAN_THEME'){
    return temaColoresOscuros.DARK_CYAN_THEME.colors.lightprimary
  }else{
    return temaColores.BLUE_THEME.colors.lightprimary
  } 
})

const getSecondary = computed(() => {
  if(personalizador.accionDelTema === 'CYAN_THEME'){
    return temaColores.CYAN_THEME.colors.secondary
  }else if(personalizador.accionDelTema === 'DARK_BLUE_THEME'){
    return temaColoresOscuros.DARK_BLUE_THEME.colors.secondary
  }else if(personalizador.accionDelTema === 'DARK_CYAN_THEME'){
    return temaColoresOscuros.DARK_CYAN_THEME.colors.secondary
  }else{
    return temaColores.BLUE_THEME.colors.secondary
  }
})

const getLightSecondary = computed(() => {
  if(personalizador.accionDelTema === 'CYAN_THEME'){
    return temaColores.CYAN_THEME.colors.lightsecondary
  }else if(personalizador.accionDelTema === 'DARK_BLUE_THEME'){
    return temaColoresOscuros.DARK_BLUE_THEME.colors.lightsecondary
  }else if(personalizador.accionDelTema === 'DARK_CYAN_THEME'){
    return temaColoresOscuros.DARK_CYAN_THEME.colors.lightsecondary
  }else{
    return temaColores.BLUE_THEME.colors.lightsecondary
  }
})

const getLight100 = computed(() => {
  if(personalizador.accionDelTema === 'CYAN_THEME'){
    return temaColores.CYAN_THEME.colors.grey100 
  }else if(personalizador.accionDelTema === 'DARK_BLUE_THEME' || personalizador.accionDelTema === 'DARK_CYAN_THEME'){
    return temaColoresOscuros.DARK_BLUE_THEME.colors.grey100 
  }else{
    return temaColores.BLUE_THEME.colors.grey100
  }
})

export {
  getPrimary,
  getLightPrimary,
  getSecondary,
  getLightSecondary,
  getLight100
}