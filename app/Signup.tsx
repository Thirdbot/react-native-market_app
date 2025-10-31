import { NavigationProp, useNavigation } from '@react-navigation/native';
import axios, { AxiosError } from 'axios';
import { FC, useState } from 'react';
import ErrorMessage from './components/ErrorMessage';
import FormContainer from './components/FormContainer';
import FormInput from './components/FormInput';
import { NavigationPages } from './index';

interface Props {}

const Signup: FC<Props> = () => {
  const [signupInfo,setSignupInfo] = useState<{name:string,email:string,password:string}>({
    name:'',
    email:'',
    password:''
  });

  const [errors,setErrors] = useState<{[key:string]:string[]}>({});
  const [error,setError] = useState<string>('');

  const navigation = useNavigation<NavigationProp<NavigationPages>>();
  const url = 'http://10.0.22.186:5555'

  const onSubmit = async () => {
    setError('');
    setErrors({});
    try{
      console.log("Button Sign Up Pressed",signupInfo)
      await axios.post(`${url}/auth/sign-up`, signupInfo) 

    }catch(err){
      console.log("Signup error",err)
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
    navigation.navigate("Signin");
    console.log("Navigate to Signin Screen");
  }
  return (<FormContainer 
    btnTitle="Sign Up" 
    navLinkTitle=" Already have an account? Sign in "
    onSubmit={onSubmit}
    onLinkPress={onLinkPress}>
    {errors ? <ErrorMessage message={error} /> : null}
    <FormInput label="Name" 
              placeholder="Enter your name" 
              onChangeText={(name)=> setSignupInfo({...signupInfo,name})}
              errors={errors.name}
            />
    <FormInput label="Email" 
              placeholder="Enter your email" 
              onChangeText={(email)=> setSignupInfo({...signupInfo,email})}
              errors={errors.email}
            />
    <FormInput label="Password" 
              placeholder="Enter your password" 
              secureTextEntry
              autoCapitalize='none'
              onChangeText={(password)=> setSignupInfo({...signupInfo,password})}
              errors={errors.password}
            />
  </FormContainer>);
}

export default Signup;