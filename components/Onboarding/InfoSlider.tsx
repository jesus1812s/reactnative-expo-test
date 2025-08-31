import { useState, useEffect, useRef, useCallback } from 'react';
import { View, Animated } from 'react-native';
import { OnboardingScreen, ProgressBar } from './components';

export const InfoSlider = ({ path }: { path: string }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const progressAnim = useRef(new Animated.Value(0)).current;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slidesData = [
    {
      title: 'Compra ahora y paga después',
      description: 'Compra tus productos favoritos, pagando en cuotas flexibles.',
      imageSource: require('../../assets/onboarding/onboarding-1/onboarding-1.png'),
    },
    {
      title: 'Gestiona tus compras y cuotas',
      description: 'Gestiona tus compras y realiza tus pagos sin complicaciónes.',
      imageSource: require('../../assets/onboarding/onboarding-2/onboarding-2.png'),
    },
    {
      title: 'Un nuevo mundo de compras',
      description: 'Únete al futuro, y descubre la comonidad y flexibilidad de comprar con Finity.',
      imageSource: require('../../assets/onboarding/onboarding-3/onboarding-3.png'),
    },
  ];

  const totalSlides = slidesData.length;

  const startProgressAnimation = useCallback(() => {
    progressAnim.setValue(0);
    Animated.timing(progressAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: false,
    }).start();
  }, [progressAnim]);

  useEffect(() => {
    startProgressAnimation();
    
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % totalSlides;
        return nextSlide;
      });
    }, 10000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startProgressAnimation, totalSlides]);

  useEffect(() => {
    startProgressAnimation();
  }, [currentSlide, startProgressAnimation]);

  const currentSlideData = slidesData[currentSlide];

  const handleIndicatorPress = (index: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    setCurrentSlide(index);
    
    // Restart the interval after manual selection
    setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 10000);
    }, 100);
  };

  return (
    <View className={styles.container}>
      <ProgressBar
        totalSlides={totalSlides}
        currentSlide={currentSlide}
        onSlidePress={handleIndicatorPress}
        progress={progressAnim}
      />

      <View className={styles.slideContainer}>
        <OnboardingScreen
          path={path}
          title={currentSlideData.title}
          description={currentSlideData.description}
          imageSource={currentSlideData.imageSource}
        />
      </View>
    </View>
  );
};

const styles = {
  container: `w-full flex-1 justify-center`,
  slideContainer: `flex-1 justify-center`,
};
