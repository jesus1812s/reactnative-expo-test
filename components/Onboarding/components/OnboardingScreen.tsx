import { Text, View, Image, ImageSourcePropType } from 'react-native';

interface OnboardingScreenProps {
  path: string;
  title: string;
  description: string;
  imageSource: ImageSourcePropType;
}

export const OnboardingScreen = ({ path, title, description, imageSource }: OnboardingScreenProps) => {
  return (
    <View>
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
  imageContainer: `items-center mb-8`,
  image: `w-72 h-72`,
  codeHighlightContainer: `rounded-md px-1`,
  getStartedContainer: `items-center mx-8 mt-4`,
  getStartedText: `font-inter text-2xl font-semibold text-text-primary leading-8 text-center mb-4`,
  getStartedTextDescription: `font-inter text-base text-text-secondary leading-6 text-center px-4`,
  helpContainer: `items-center mx-5 mt-4`,
  helpLink: `py-4`,
  helpLinkText: `text-center`,
  homeScreenFilename: `my-2`,
};