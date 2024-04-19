import { defineStore } from "pinia";
import config from '@/config'

const usePersonalizarStore = defineStore({
  id: 'personalizador',
  state: () => ({
    cajaBarraLateral: config.cajaBarraLateral,
    cajaPersonalizada: config.cajaPersonalizada,
    minimizarBarraLateral: config.minimizarBarraLateral,
    setDisenioHorizontal: config.setDisenioHorizontal,
    accionDelTema: config.accionDelTema,
    enCaja: config.enCaja,
    setBordeDeLaTarjeta: config.setBordeDeLaTarjeta
  }),
  getters: {

  },
  actions: {
    SET_CAJA_BARRA_LATERAL() {
      this.cajaBarraLateral = !this.cajaBarraLateral;
    },
    SET_MINIMIZAR_BARRA_LATERAL(payload: any) {
      this.minimizarBarraLateral = payload;
    },
    SET_CAJA_PERSONALIZADA(payload: any) {
      this.cajaPersonalizada = payload;
    },

    SET_DISENIO(payload: any) {
      this.setDisenioHorizontal = payload;
    },
    SET_TEMA(payload: any) {
      this.accionDelTema = payload;
    },
    SET_BORDE_TARJETA(payload: any){
      this.setBordeDeLaTarjeta = payload
    }

  }
})

export {
  usePersonalizarStore
}