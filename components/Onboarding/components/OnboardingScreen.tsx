import { Text, View, Image, ImageSourcePropType } from 'react-native';

interface OnboardingScreenProps {
  path: string;
  title: string;
  description: string;
  imageSource: ImageSourcePropType;
}

export const OnboardingScreen = ({ path, title, description, imageSource }: OnboardingScreenProps) => {
  return (
    <View className={styles.container}>
      <View className={styles.imageContainer}>
        <Image 
          source={imageSource}
          className={styles.image}
          resizeMode="contain"
        />
      </View>
      <View className={styles.getStartedContainer}>
        <Text className={styles.getStartedText}>{title}</Text>
        <Text className={styles.getStartedTextDescription}>{description}</Text>
      </View>
    </View>
  );
};

const styles = {
  container: `max-w-4/5`,
  imageContainer: `items-center mb-4`,
  image: `w-auto h-auto`,
  getStartedContainer: `items-center mx-8 mt-4 max-w-4/5`,
  getStartedText: `font-inter text-4xl font-extrabold text-text-primary leading-12 text-center mb-4 max-w-80 tracking-wider`,
  getStartedTextDescription: `font-inter text-lg font-medium text-text-secondary leading-12 text-center px-4`,
};