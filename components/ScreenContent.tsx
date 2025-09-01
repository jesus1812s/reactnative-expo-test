import { View } from 'react-native';

import Button from './ui/Button';
import { InfoSlider } from './Onboarding';

type ScreenContentProps = {
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ path, children }: ScreenContentProps) => {
  const handleLogin = () => {
    console.log('Navegando a Login...');
  };

  const handleRegister = () => {
    console.log('Navegando a Register...');
  };

  return (
    <View className={styles.container}>
      <InfoSlider path={path} />
      <View className={styles.buttonContainer}>
        <Button
          variant="primary"
          size="lg"
          onPress={handleLogin}
          className={styles.button}
          textClassName="font-inter font-bold color-bg-primary text-lg tracking-wide">
          Ingresar
        </Button>

        <Button
          variant="secondary"
          size="lg"
          onPress={handleRegister}
          className={styles.button}
          textClassName="font-inter font-bold color-bg-primary text-lg tracking-wide">
          Registrarme
        </Button>
      </View>

      {children}
    </View>
  );
};
const styles = {
  container: `items-center flex-1 justify-center bg-bg-primary`,
  buttonContainer: `w-4/5 my-12 space-y-4`,
  button: `w-full rounded-full my-2 py-4`,
};
