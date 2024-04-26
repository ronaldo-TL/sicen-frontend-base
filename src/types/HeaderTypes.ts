

type notificacionType = {
  avatar:       string
  titulo:       string
  subtitulo:    string
}

type perfilType = {
  avatar:     string
  titulo:     string
  subtitulo:  string
  href:       string
}

type lenguajeType = {
  avatar:     string
  titulo:     string
  subtexto:   string
  valor:      string
}

type buscarType = {
  titulo: string;
  href: string;
};

export type {
  notificacionType,
  perfilType,
  lenguajeType,
  buscarType
}