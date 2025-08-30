import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { OnboardingScreen1, OnboardingScreen2, OnboardingScreen3 } from './components';

export const InfoSlider = ({ path }: { path: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const components = [
    <OnboardingScreen1 path={path} key="screen1" />,
    <OnboardingScreen2 path={path} key="screen2" />,
    <OnboardingScreen3 path={path} key="screen3" />
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === components.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [components.length]);

  return (
    <View className={styles.container}>
      <View className={styles.slideContainer}>
        {components[currentIndex]}
      </View>
      
      <View className={styles.dotsContainer}>
        {components.map((_, index) => (
          <View
            key={index}
            className={`${
              index === currentIndex 
                ? styles.activeDot 
                : styles.inactiveDot
            }`}
          />
        ))}
      </View>
    </View>
  );
};

const styles = {
  container: `w-full`,
  slideContainer: `min-h-[120px] justify-center`,
  dotsContainer: `flex-row justify-center items-center mt-4 space-x-2`,
  activeDot: `w-3 h-3 rounded-full bg-buttons-primary`,
  inactiveDot: `w-2 h-2 rounded-full bg-gray-300`,
};