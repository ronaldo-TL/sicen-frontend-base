type datoTabla = {
    nombre:             string;
    correo_electronico: string;
    proyecto:           string;
    stado:              string;
    presupuesto:        string;
};

type seleccionarFilaDatosTabla = {
    nombre:             string;
    correo_electronico: string;
    proyecto:           string;
    stado:              string;
    presupuesto:        string;
    seleccionarTabla:   boolean
};

type filtrable = {
    nombre:             string;
    image:              string,
    precio:             number,
    clasificacion:      number,
    stock:              boolean,
};


export type { datoTabla, seleccionarFilaDatosTabla, filtrable };