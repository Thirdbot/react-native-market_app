import { createStackNavigator } from '@react-navigation/stack';
import { FC } from 'react';
import Signin from './Signin';
import Signup from './Signup';

interface Props {}

export type NavigationPages = {
  Signin: undefined;
  Signup: undefined;
};


const Stack = createStackNavigator<NavigationPages>(
  {
    screens: {
      Signin: Signin,
      Signup: Signup,
    },
    screenOptions: { headerShown: false },
  }
);

const index: FC<Props> = () => {

  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
  );
};

export default index;