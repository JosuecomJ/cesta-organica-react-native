import React from 'react';
import {StyleSheet ,Image, Dimensions, Text, View } from 'react-native'

import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'

const width = Dimensions.get('screen').width;


export default function Cesta(){
    return( 
    <> 
        <Image source={topo} style={estilos.topo} />
        <Text style={estilos.titulo}>Detalhe da cesta</Text>

        <View style={estilos.cesta}>
            <Text style={estilos.nome}>Cesta de Verduras</Text>
            <View style={estilos.fazenda}>
                <Image source={logo} style={estilos.imagemFazenda}/>
                <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
            </View>
            <Text style={estilos.descricao}>
                Uma cesta com produtos selecionados 
                cuidadozamente da fazendo direto 
                pra sua cozinha
            </Text>
            <Text style={estilos.preco}>R$ 40,00</Text>
        </View>
    </>
    )
}


const estilos = StyleSheet.create({
    topo:{
        width: "100%",
        height: 578 / 768 * width,
    },
    
    titulo:{
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 24,
        color: "#fff",
        fontFamily: "MontserratBold",
        padding: 16
    },
    
    nome:{
        color: "#464646",
        fontSize: 26,
        lineHeight:42,
        fontFamily: "MontserratBold"
    },
    
    cesta:{
        paddingVertical: 8,
        paddingHorizontal:16,
    },

    fazenda:{
        flexDirection: "row",
        paddingVertical: 12

    },
    
    imagemFazenda:{
        width: 32,
        height: 32
    },

    nomeFazenda:{
        fontFamily: "MontserratRegular",
        fontSize: 16,
        lineHeight: 26,
        color: "#991700",
        marginLeft: 12,
        
    }, 

    descricao:{
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26,
    },

    preco:{
        color: "#2A9F85",
        fontFamily: "MontserratBold",
        fontSize: 26,
        lineHeight: 42,
        marginTop:8
    
    },
        



})