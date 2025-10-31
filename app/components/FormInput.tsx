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
}

const FormInput: FC<Props> = ({ label, ...rest }) => {
  return (
    <View style={styles.Inputcontainer}>
      <Text style={styles.InputLabelStyle}>{label}</Text>
      <TextInput style={styles.TextInputStyle} {...rest} />
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
});

export default FormInput;
