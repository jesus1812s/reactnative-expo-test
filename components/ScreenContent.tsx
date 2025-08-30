import { View } from 'react-native';

import Button from './ui/Button';
import { InfoSlider } from './Onboarding';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
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
        <Button variant="primary" size="lg" onPress={handleLogin} className={styles.button}>
          Ingresar
        </Button>

        <Button variant="secondary" size="lg" onPress={handleRegister} className={styles.button}>
          Registrarme
        </Button>
      </View>

      {children}
    </View>
  );
};
const styles = {
  container: `items-center flex-1 justify-center bg-bg-primary`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `font-inter text-text-primary text-xl font-bold`,
  buttonContainer: `w-4/5 mt-8 space-y-4`,
  button: `w-full rounded-full my-2`,
};
