import { useState, useEffect, useRef, useCallback } from 'react';
import { View, Animated } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';
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

  const startSlideTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    startProgressAnimation();
    
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 10000);
  }, [startProgressAnimation, totalSlides]);

  useEffect(() => {
    startSlideTimer();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startSlideTimer]);

  useEffect(() => {
    startProgressAnimation();
  }, [currentSlide, startProgressAnimation]);

  const currentSlideData = slidesData[currentSlide];

  const handleIndicatorPress = (index: number) => {
    setCurrentSlide(index);
    
    // Restart the timer after manual selection
    setTimeout(() => {
      startSlideTimer();
    }, 100);
  };

  const handleSwipe = useCallback((direction: 'left' | 'right') => {
    if (direction === 'right') {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    } else {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }
    
    setTimeout(() => {
      startSlideTimer();
    }, 100);
  }, [totalSlides, startSlideTimer]);

  const panGesture = Gesture.Pan()
    .onEnd((event) => {
      const { translationX } = event;
      const swipeThreshold = 50;
      
      if (Math.abs(translationX) > swipeThreshold) {
        const direction = translationX > 0 ? 'right' : 'left';
        runOnJS(handleSwipe)(direction);
      }
    });

  return (
    <View className={styles.container}>
      <ProgressBar
        totalSlides={totalSlides}
        currentSlide={currentSlide}
        onSlidePress={handleIndicatorPress}
        progress={progressAnim}
      />

      <GestureDetector gesture={panGesture}>
        <View className={styles.slideContainer}>
          <OnboardingScreen
            path={path}
            title={currentSlideData.title}
            description={currentSlideData.description}
            imageSource={currentSlideData.imageSource}
          />
        </View>
      </GestureDetector>
    </View>
  );
};

const styles = {
  container: `w-full flex-1 justify-center`,
  slideContainer: `flex-1 justify-center`,
};
