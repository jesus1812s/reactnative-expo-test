import { View, TouchableOpacity, Animated } from 'react-native';

interface ProgressBarProps {
  totalSlides: number;
  currentSlide: number;
  onSlidePress: (index: number) => void;
  progress: Animated.Value;
}

export const ProgressBar = ({ totalSlides, currentSlide, onSlidePress, progress }: ProgressBarProps) => {
  return (
    <View className={styles.container}>
      {Array.from({ length: totalSlides }).map((_, index) => (
        <View key={index} className={styles.progressBarContainer}>
          <View className={styles.progressBarBackground} />
          {index === currentSlide && (
            <Animated.View
              className={styles.progressBarFill}
              style={{
                width: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0%', '100%'],
                }),
              }}
            />
          )}
          {index < currentSlide && (
            <View className={styles.progressBarComplete} />
          )}
          <TouchableOpacity
            className={styles.progressBarTouchable}
            onPress={() => onSlidePress(index)}
          />
        </View>
      ))}
    </View>
  );
};

const styles = {
  container: `flex-row justify-center items-center mb-8 px-8`,
  progressBarContainer: `flex-1 h-1 mx-1 relative max-w-20`,
  progressBarBackground: `absolute w-full h-full bg-gray-400 rounded-full opacity-30`,
  progressBarFill: `absolute h-full bg-buttons-primary rounded-full`,
  progressBarComplete: `absolute w-full h-full bg-buttons-primary rounded-full`,
  progressBarTouchable: `absolute w-full h-6 -top-2.5`,
};