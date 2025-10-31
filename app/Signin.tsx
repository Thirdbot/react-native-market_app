import { NavigationProp, useNavigation } from '@react-navigation/native';
import { FC, useState } from 'react';
import FormContainer from './components/FormContainer';
import FormInput from './components/FormInput';
import { NavigationPages } from './components/navigator';

interface Props {}

const Signin: FC<Props> = () => {
  const [signinInfo,setSigninInfo] = useState<{email:string,password:string}>({
    email:'',
    password:''
  });

  

  const navigation = useNavigation<NavigationProp<NavigationPages>>();
  
  function onSubmit() {
    console.log("Button Login Pressed")
  }

  function onLinkPress() {
    navigation.navigate('Signup');
    console.log("Navigate to Signup Screen")
  }

  return (<FormContainer 
    btnTitle="Sign In" 
    navLinkTitle=" Don't have an account? Sign up "
    onSubmit={onSubmit}
    onLinkPress={onLinkPress}>
    <FormInput label="Email" 
              placeholder="Enter your email" 
              onChangeText={(email)=> setSigninInfo({...signinInfo,email})} />
    <FormInput label="Password" 
              placeholder="Enter your password" 
              secureTextEntry
              autoCapitalize='none'
              onChangeText={(password)=> setSigninInfo({...signinInfo,password})} />
  </FormContainer>);
};

export default Signin;