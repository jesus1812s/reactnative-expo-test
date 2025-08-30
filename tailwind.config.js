/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'buttons-primary': '#adff2f',
        'buttons-secondary': '#ffffff',
        'text-primary': '#ffffff',
        'text-secondary': '#99a190',
        'text-buttons': '#000000',
        'bg-primary': '#182900',
        'bg-spinner': '#455332',
      },
      fontFamily: {
        //Como la sans siempre es la por defecto le obligo a que sea inter igual
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
