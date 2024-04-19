export type configurarPropiedades = {
  cajaBarraLateral:         any;
  cajaPersonalizada:        boolean;
  minimizarBarraLateral:    boolean;
  setDisenioHorizontal:     boolean;
  accionDelTema:            string;
  enCaja:                   boolean;
  setBordeDeLaTarjeta:      boolean;
}
const config: configurarPropiedades = {
    cajaBarraLateral: null,
    cajaPersonalizada: false,
    minimizarBarraLateral: true,
    setDisenioHorizontal: false, // disposicion horizontal
    accionDelTema: 'BLUE_THEME',
    enCaja: true,
    setBordeDeLaTarjeta: false
};

export default config;


