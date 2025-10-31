import { StackScreenProps } from '@react-navigation/stack';
import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthRoute } from '../components/AuthRoute';

type Props = StackScreenProps<AuthRoute,'Home'>

const Home: FC<Props> = ({route}) => {
    const {email,name} = route.params.profile;
  return <View style={styles.container}>
    <Text>Home</Text>
    <Text>Welcome {name}!</Text>
    <Text>Your email is {email}</Text>
  </View>;
};

const styles = StyleSheet.create({
  container: {},
});

export default Home;