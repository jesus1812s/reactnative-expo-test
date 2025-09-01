# Finity - OnBoarding screens

Esta es una aplicación del onBoarding como parte de un test para un puesto laboral en Finity. Consta en tratar de hacer pixel perfect la pantalla que pasaron de diseño mediante correo electrónico.

## 🔧 Instalación

Este proyecto fue desarrollado con React Native y Expo a partir de el comando de [NativeWind](https://www.nativewind.dev/docs/getting-started/installation):

```bash
npx rn-new@latest --nativewind
```

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm
- Expo CLI
- Android Studio (para Android) o Xcode (para iOS)

### Pasos de Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/jesus1812s/reactnative-expo-test.git
   cd reactnative-expo-test
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Ejecutar en dispositivo/emulador**

   ```bash

   # Solo iniciar expo, después tienes las opciones de ejecutar en emulador o en dispositivo
   npm start

   # Si quieres ejecutar en emulador de Android
   npm run android

   # Si quieres ejecutar en emulador de iOS
   npm run ios

   ```

## Dispositivos utilizados

- Emulador de Android Studio. Android Emulator - Medium_Phone_API_36.0:5554
- Ipad Air M2 (Escanié el código QR proporcionado por expo)	
- Tecno Camon 17pro (Escanié el código QR proporcionado por expo)

## 🚀 Scripts Disponibles

- `npm start` - Inicia expo
- `npm run android` - Ejecuta en Android
- `npm run ios` - Ejecuta en iOS
- `npm run web` - Ejecuta en navegador web
- `npm run lint` - Ejecuta linting y verificación de formato
- `npm run format` - Formatea el código automáticamente
- `npm run prebuild` - Genera código nativo

## 🚀 Características

- **Onboarding Interactivo**: Slider con animaciones y gestos de swipe
- **Interfaz Moderna**: Diseño limpio y responsive con NativeWind (Tailwind CSS)
- **Gestos Intuitivos**: Soporte completo para gestos de swipe y navegación táctil
- **Botones responsivos**: Botones que se adaptan a diferentes tamaños de pantalla

## 🛠️ Tecnologías Utilizadas

- **React Native** (0.79.5) - Framework principal
- **Expo** (53.0.22) - Plataforma de desarrollo
- **TypeScript** - Tipado estático
- **NativeWind** - Styling con Tailwind CSS
- **React Native Reanimated** - Animaciones de alto rendimiento
- **React Native Gesture Handler** - Manejo de gestos
- **Expo Router** - Navegación basada en archivos

## Troubleshooting
### Problemas comunes

- **Error apenas corre el emulador por primera vez(Android)**: Tienes que cerrar la aplicación que genero expo en tu emulador de android y tienes que volver a darle para abrir el emulador desde la terminal de expo (darle click a la 'a' con el teclado). 
- **Error de compilación**: Asegúrate de tener todas las dependencias instaladas (`npm install`).
- **Problemas con el emulador**: Verifica que el emulador esté funcionando y que la conexión con Expo esté correcta.
- **Problemas con el dispositivo**: Asegúrate de que el dispositivo esté conectado y configurado correctamente.

- **Si sigues teniendo problemas**: Puedes revisar la documentación de Expo y React Native para más ayuda. [Expo](https://docs.expo.dev/get-started/set-up-your-environment/?platform=android&device=simulated)

### Onboarding

- Slider interactivo con 3 pantallas
- Animaciones de swipe suaves
- Indicadores de progreso
- Navegación automática y manual

## 📁 Estructura del Proyecto

```
reactnative-expo-test/
├── assets/                 # Recursos estáticos
│   ├── onboarding/        # Imágenes del onboarding
│   │   ├── onboarding-1/  # Imágenes en múltiples resoluciones
│   │   ├── onboarding-2/
│   │   └── onboarding-3/
│   └── ...
├── components/            # Componentes reutilizables
│   ├── Onboarding/       # Componentes del onboarding
│   │   ├── InfoSlider.tsx # Slider principal con animaciones
│   │   └── components/   # Subcomponentes
│   ├── ui/               # Componentes de UI
│   └── ...
├── App.tsx               # Componente principal
├── package.json          # Dependencias y scripts
└── ...
```

## 🎯 Componentes Principales

### InfoSlider

Componente principal del onboarding que incluye:

- Slider horizontal con animaciones
- Soporte para gestos de swipe
- Progresión automática cada 10 segundos
- Indicadores de progreso interactivos

### Características Técnicas

- **Animaciones**: Usa `Animated.Value` y `useNativeDriver` para rendimiento óptimo
- **Gestos**: Implementa `Gesture.Pan()` para detección de swipes
- **Responsive**: Adapta imágenes según la densidad de pantalla del dispositivo
- **TypeScript**: Completamente tipado para mejor desarrollo

## 🔄 Flujo de Onboarding

1. **Pantalla 1**: "Compra ahora y paga después" 
2. **Pantalla 2**: "Gestiona tus compras y cuotas" 
3. **Pantalla 3**: "Un nuevo mundo de compras" 

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request
