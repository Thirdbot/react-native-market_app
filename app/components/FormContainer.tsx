import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from './PrimaryButton';

interface Props {
    children: React.ReactNode;
    btnTitle:string
    navLinkTitle:string
    onLinkPress?:()=>void
    onSubmit?:()=>void
}

const FormContainer: FC<Props> = ({children, btnTitle, navLinkTitle,onLinkPress, onSubmit}) => {
  return <SafeAreaView style={styles.container}>
    <View style={styles.titlecontainer}>
      <Text style={styles.title}>Welcome to RNative</Text>
      <Text style={styles.subtitle}>your own online store</Text>
    </View>
    
    {children}

    <PrimaryButton title={btnTitle} OnPress={onSubmit} />
    <View style={styles.navLinkContainer}>
      <Text style={styles.navLinkText} onPress={onLinkPress}> {navLinkTitle} </Text>
    </View>
  </SafeAreaView>;

};

const styles = StyleSheet.create({
  container: {flex:1,padding:10,gap:20},
  titlecontainer:{
    gap:10,
    padding:20
  },
  title:{
    fontSize:25,
    fontWeight:'700',
    textAlign:'center',
  },
  subtitle:{
    fontSize:16,
    textAlign:'center',
  },
  navLinkContainer:{
    marginTop:'auto',
    paddingVertical:10,
    justifyContent:'flex-end',
    alignItems:'center',
  },
  navLinkText:{
    fontWeight:'bold',
    textDecorationStyle:'solid',
    textDecorationLine:'underline',
  }
});

export default FormContainer;