import { FC } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface Props {
    title?:string;
    OnPress?:()=>void;
}

const PrimaryButton: FC<Props> = ({title,OnPress}) => {
  return <Pressable style={({pressed})=>{
    return {...styles.container,opacity:pressed?0.6:1}
  }} onPress={OnPress}>
    <Text style={styles.textStyle}>{title}</Text>
  </Pressable>;
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#FFA500',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
    textStyle: {
    color: '#000',
    fontSize:18,
    textAlign:'center',
    }
});

export default PrimaryButton;