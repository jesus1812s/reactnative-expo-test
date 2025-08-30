import { Text, View, Image } from 'react-native';

export const OnboardingScreen1 = ({ path }: { path: string }) => {
  const title = 'Compra ahora y paga después';
  const description =
    'Compra tus productos favoritos, pagando en cuotas flexibles.';

  return (
    <View>
      <View className={styles.imageContainer}>
        <Image 
          source={require('../../../assets/onboarding/onboarding-1/onboarding-1.png')}
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
  imageContainer: `items-center mb-6`,
  image: `w-64 h-48`,
  codeHighlightContainer: `rounded-md px-1`,
  getStartedContainer: `items-center mx-12 `,
  getStartedText: `font-inter text-lg text-text-primary leading-6 text-center`,
  getStartedTextDescription: `font-inter text-base text-text-secondary leading-6 text-center`,
  helpContainer: `items-center mx-5 mt-4`,
  helpLink: `py-4`,
  helpLinkText: `text-center`,
  homeScreenFilename: `my-2`,
};