import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AxiosError } from 'axios';
import { FC, useState } from 'react';
import client from '../api/client';
import { AuthRoute } from '../components/AuthRoute';
import ErrorMessage from '../components/ErrorMessage';
import FormContainer from '../components/FormContainer';
import FormInput from '../components/FormInput';

interface Props {}

const Signin: FC<Props> = () => {
  const [signinInfo,setSigninInfo] = useState<{email:string,password:string}>({
    email:'',
    password:''
  });
  const [errors,setErrors] = useState<{[key:string]:string[]}>({});
  const [error,setError] = useState<string>('');


  const navigation = useNavigation<NavigationProp<AuthRoute>>();

 const onSubmit = async () => {
    setError('');
    setErrors({});
    try{
      console.log("Button Sign In Pressed",signinInfo)
      const {data} = await client.post(`/auth/sign-in`, signinInfo )
      console.log("api response",data)
      navigation.navigate("Home",{profile:data.profile})

    }catch(err){
      console.log("Signin error",err)
      if (err instanceof AxiosError){
        const responseData = err.response?.data;
        if (responseData.errors){
          setErrors(responseData.errors);
        }
        if (responseData.error){
          setError(responseData.error);
        }
    }
  }
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
    {error ? <ErrorMessage message={error} /> : null}
    <FormInput label="Email" 
              placeholder="Enter your email" 
              onChangeText={(email)=> setSigninInfo({...signinInfo,email})}
              errors={errors.email} />
    <FormInput label="Password" 
              placeholder="Enter your password" 
              secureTextEntry
              autoCapitalize='none'
              onChangeText={(password)=> setSigninInfo({...signinInfo,password})}
              errors={errors.password} />
  </FormContainer>);
};

export default Signin;