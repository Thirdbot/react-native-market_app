import { FC } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
interface Props extends TextInputProps {
  label?: string;
  errors?: string[];
}

const FormInput: FC<Props> = ({ label,errors, ...rest }) => {
  return (
    <View style={styles.Inputcontainer}>
      <Text style={styles.InputLabelStyle}>{label}</Text>
      <TextInput style={styles.TextInputStyle} {...rest} />
      {errors?.map((error,idx)=>{
        return <Text key={idx} style={styles.error}>{error}</Text>
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  Inputcontainer: { padding: 10, backgroundColor: "#dedede", borderRadius: 8 },
  TextInputStyle: {
    fontSize: 14,
  },
  InputLabelStyle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  error:{
    color:'red',
    fontSize:12
  }
});

export default FormInput;
