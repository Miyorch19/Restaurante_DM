export interface MenuItem {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  imagenes: string[]; 
  imagenMenu?: string;
}

export interface GalleryImage {
  id: string;
  url: string; 
  alt: string;
  categoria: string;
}

export interface RestaurantInfo {
  nombrePrincipal: string;
  nombreSecundario: string;
  horarios: string;
  direccion: string;
  telefono: string;
  email?: string;
  whatsapp?: string;
  redesSociales: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface Testimonio {
  id: string;
  nombre: string;
  detalle: string;
  comentario: string;
  calificacion: number;
}
