// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Verifica que Tailwind CSS esté instalado
// npm install -D tailwindcss postcss autoprefixer

// Verifica que el archivo tailwind.config.js esté presente en la raíz de tu proyecto
// npx tailwindcss init

// Verifica que el archivo postcss.config.js esté presente en la raíz de tu proyecto
// Crea un archivo postcss.config.js con el siguiente contenido:
// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});