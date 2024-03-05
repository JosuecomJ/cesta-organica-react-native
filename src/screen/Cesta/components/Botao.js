import { TouchableOpacity, StyleSheet } from 'react-native'
import Texto from '../../../components/Texto';


export default function Botao({texto,onPress, style}){
    return (
        <>    
            <TouchableOpacity 
            style={[estilos.botao, style]} onPress={onPress}
            >
            <Texto style={estilos.textoBotao}>
                {texto}
            </Texto>
            </TouchableOpacity>
    </>
    )}




const estilos = StyleSheet.create({
botao:{
    marginTop: 16,
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: "#2A9F85"


  },
  textoBotao:{
    textAlign: "center",
    color: "#e9f5f2",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 26,
    marginTop: 8,
  }
})