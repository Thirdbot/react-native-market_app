import { createStackNavigator } from '@react-navigation/stack';
import { FC } from 'react';
import Home from '../Views/Home';
import Signin from '../Views/Signin';
import Signup from '../Views/Signup';

export type NavigationPages = {
  Signin: undefined;
  Signup: undefined;
  Home: {profile:{name:string;email:string}};
};


const Stack = createStackNavigator<NavigationPages>(
  {
    screens: {
      Signin: Signin,
      Signup: Signup,
      Home: Home
    },
    screenOptions: { headerShown: false },
  }
);

interface Props {}

const AuthRoute: FC<Props> = () => {
  return <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
};


export default AuthRoute;