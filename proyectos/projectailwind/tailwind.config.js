/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Aquí indicamos que busque en todos los archivos dentro de src que tengan estas extensiones.
    './public/index.html',        // Aquí indicamos que busque en el archivo index.html en la carpeta public.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
