/**
 * ============================================================
 *  LÍNEA DE TIEMPO — "Nuestra historia"
 * ============================================================
 * Agregá, borrá o reordená los momentos que quieras.
 * Cada uno necesita: date, title, description.
 * "image" es opcional: si lo dejás vacío ("") no se muestra ninguna foto.
 *
 * Las imágenes van en /public/images/story/ (ej: "/images/story/conocimos.jpg")
 */
export type LoveStoryMoment = {
  date: string;
  title: string;
  description: string;
  image?: string;
};

export const loveStory: LoveStoryMoment[] = [
  {
    date: "El comienzo",
    title: "El día que nos conocimos",
    description:
      "No lo sabía todavía, pero ese día empezó algo que iba a cambiarme la vida por completo.",
    image: "/images/story/momento-1.jpg",
  },
  {
    date: "Poco después",
    title: "Nuestro primer momento especial",
    description:
      "Hubo algo en esa charla, en esa risa, que me hizo querer que hubiera una próxima vez. Y otra. Y otra más.",
    image: "/images/story/momento-2.jpg",
  },
  {
    date: "En el camino",
    title: "El momento en que empecé a darme cuenta de lo importante que eras",
    description:
      "No fue un solo instante, fueron muchos pequeños que un día, sin darme cuenta, ya pesaban todos juntos.",
    image: "/images/story/momento-3.jpg",
  },
  {
    date: "Todos los días",
    title: "Todos esos pequeños momentos que terminamos convirtiendo en recuerdos",
    description:
      "Las tonterías que nos hacen reír, las charlas hasta tarde, los silencios cómodos. De eso también está hecho esto.",
    image: "/images/story/momento-4.jpg",
  },
  {
    date: "Hoy",
    title: "Hoy",
    description:
      "Y acá estamos. Eligiéndonos, todavía. Con ganas de que esta historia siga teniendo muchas páginas más.",
    image: "/images/story/momento-5.jpg",
  },
];
