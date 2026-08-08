/**
 * ============================================================
 *  GALERÍA — "Nuestros recuerdos"
 * ============================================================
 * Agregá tantas fotos como quieras, el orden es el que se muestra.
 * Las imágenes van en /public/images/memories/
 *
 * image        -> ruta de la foto (ej: "/images/memories/foto-1.jpg")
 * date         -> texto libre (ej: "Marzo 2025")
 * title        -> título corto del recuerdo
 * description  -> una frase sobre ese momento
 */
export type Memory = {
  image: string;
  date: string;
  title: string;
  description: string;
};

export const memories: Memory[] = [
  {
    image: "/images/memories/foto-1.jpg",
    date: "Marzo 2025",
    title: "Esa tarde",
    description: "El día que todo se sintió distinto, en el buen sentido.",
  },
  {
    image: "/images/memories/foto-2.jpg",
    date: "Abril 2025",
    title: "Riéndonos de nada",
    description: "De esas fotos que salen mal pero son mis favoritas.",
  },
  {
    image: "/images/memories/foto-3.jpg",
    date: "Mayo 2025",
    title: "El comienzo oficial",
    description: "Ahí empezó, de verdad, todo esto.",
  },
  {
    image: "/images/memories/foto-4.jpg",
    date: "Julio 2025",
    title: "Ese viaje",
    description: "Nuevos lugares, la misma persona con la que siempre quiero estar.",
  },
  {
    image: "/images/memories/foto-5.jpg",
    date: "Septiembre 2025",
    title: "Una noche cualquiera",
    description: "Las noches comunes contigo dejaron de ser comunes.",
  },
  {
    image: "/images/memories/foto-6.jpg",
    date: "Hoy",
    title: "Nosotros",
    description: "Seguimos sumando fotos a esta galería. Y pienso seguir sumando muchas más.",
  },
];
