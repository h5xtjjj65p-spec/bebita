# Para vos 💛

Una página web personalizada y romántica, construida con Next.js 14 + React + TypeScript + Tailwind CSS.

## Cómo ejecutarla

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

Para generar la versión de producción:

```bash
npm run build
npm run start
```

## Cómo personalizarla (sin tocar componentes)

Todo lo que probablemente quieras cambiar está en `src/data/`:

| Qué querés cambiar | Archivo |
|---|---|
| Nombre de tu novia, tu nombre y la fecha de inicio | `src/data/relationship.ts` |
| La línea de tiempo de "Nuestra historia" | `src/data/loveStory.ts` |
| Las fotos de la galería "Nuestros recuerdos" | `src/data/memories.ts` |
| El texto de la carta | `src/data/letter.ts` |
| Las razones por las que la elegirías otra vez | `src/data/reasons.ts` |

Cada archivo tiene comentarios explicando qué hace cada campo.

## Dónde poner las fotos

- Fotos de la línea de tiempo → `public/images/story/` (referenciadas en `loveStory.ts`)
- Fotos de la galería de recuerdos → `public/images/memories/` (referenciadas en `memories.ts`)

Si una foto todavía no existe, la página no se rompe: muestra un marco con un corazón en su lugar hasta que agregues el archivo real.

## Dónde poner la canción

Colocá tu canción en:

```
public/music/our-song.mp3
```

El reproductor flotante (abajo a la derecha) la detecta automáticamente. No suena sola: la persona que abre la página tiene que tocar play. Si el archivo no existe todavía, el botón se muestra deshabilitado sin romper nada.

## Estructura del proyecto

```
src/
├── app/
│   ├── page.tsx          # arma todas las secciones en orden
│   ├── layout.tsx        # tipografías y metadata
│   └── globals.css
│
├── components/
│   ├── HeroLove.tsx              # portada
│   ├── LoveStory.tsx             # línea de tiempo
│   ├── Memories.tsx              # galería con lightbox
│   ├── LoveLetter.tsx            # carta con animación de apertura
│   ├── RelationshipCounter.tsx   # contador en tiempo real
│   ├── Reasons.tsx                # tarjetas de razones
│   ├── FutureReveal.tsx          # sección "botón especial"
│   ├── FinalMessage.tsx          # cierre + firma
│   ├── MusicPlayer.tsx           # reproductor flotante
│   ├── PhotoFrame.tsx            # imagen con fallback si falta el archivo
│   ├── Fireflies.tsx             # partículas ambientales
│   └── Reveal.tsx                # animación al hacer scroll
│
└── data/
    ├── relationship.ts   # nombres y fecha
    ├── loveStory.ts
    ├── memories.ts
    ├── letter.ts
    └── reasons.ts
```

## Qué se modificó respecto al proyecto original

El proyecto original era una tienda de ropa deportiva ("lil Peter"). Se eliminaron por completo las partes de e-commerce (productos, carrito, checkout, filtros, categorías, newsletter, header/footer de tienda) y se reemplazó la home por una experiencia romántica de una sola página, reutilizando la misma base técnica (Next.js 14 App Router, TypeScript, Tailwind).

Se mantuvo `next.config.js`, `tsconfig.json`, `postcss.config.js` y la configuración base de Tailwind, actualizando la paleta de colores y tipografías para la nueva identidad visual.
