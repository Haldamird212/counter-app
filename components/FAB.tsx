import { View, Text, Pressable, StyleSheet } from "react-native";

//interface
interface Props{
    label: String
    position?: 'left'|'right'

    //actions
    onPress?:()=>void
    onLongPress?:()=>void
}

export default function FAB({
label,
onPress,
onLongPress,
position
}:Props) {
  return (
    <Pressable
      style={({pressed})=>[
        styles.floatingButton, 
        position==='left'?styles.positionLeft:styles.positionRight,
        pressed?{opacity:0.5}:{opacity:1}
    ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{ color: "white", fontSize: 30 }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    floatingButton:{
        position: 'absolute',
        bottom: 20,
        backgroundColor: '#65558f',
        padding: 30,
        borderRadius: 15,
        elevation: 3
    },
    positionLeft:{
        left:20
    },
    positionRight:{
        right:20
    }
})