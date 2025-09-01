/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'buttons-primary': '#ADFF2F',
        'buttons-secondary': '#ffffff',
        'text-primary': '#ffffff',
        'text-secondary': '#AEB4A6',
        'text-buttons': '#000000',
        'bg-primary': '#182900',
        'bg-spinner': '#465433',
      },
      fontFamily: {
        //Como la sans siempre es la por defecto le obligo a que sea inter igual
        'sans': ['Inter_400Regular', 'system-ui', 'sans-serif'],
        'inter': ['Inter_400Regular', 'system-ui', 'sans-serif'],
        'inter-semibold': ['Inter_600SemiBold', 'system-ui', 'sans-serif'],
        'inter-bold': ['Inter_700Bold', 'system-ui', 'sans-serif'],
        'inter-extrabold': ['Inter_800ExtraBold', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
