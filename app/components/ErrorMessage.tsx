import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    message?:string
}

const ErrorMessage: FC<Props> = ({message}) => {
  return <View style={styles.container}>
    <Text style={styles.error}>{message}</Text>
  </View>;
};

const styles = StyleSheet.create({
  container: {},
  error:{
    color:'red',
    fontSize:12
  }
});

export default ErrorMessage;