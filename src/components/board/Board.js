import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { RadioButton } from 'react-native-paper'

export default function Board({activePalyer, setActivePlayer, buttonDisable, setbuttonDisable}) {

    //estado que controla o X, como disable sempre.
    const[radioOption, setRadioOption] = useState(true)

    const handleStartGame = ()=>{
        setbuttonDisable(true)
    }

    const handlePlayerSelect = (player) =>{
        setActivePlayer(player)
    }

  return (
    <View style={styles.container}>
        <View style={styles.radioView}>

            {/* botão que controla o radio X */}
            <View style={styles.radioView1}>
                <TouchableOpacity style={styles.viewElement}
                    onPress={() => handlePlayerSelect('X')}
                    disabled={buttonDisable}>
                        <Text style={styles.title}>X</Text>
                </TouchableOpacity>
                <RadioButton
                    color='#000'
                    uncheckedColor='#000'
                    value='X'
                    status={activePalyer === 'X' ? 'checked' : 'unchecked'}
                    disabled={radioOption}/>
            </View>

            {/* botao que inicia o jogo. */}
            <View style={styles.radioView1}>
                <TouchableOpacity onPress={handleStartGame}>
                    <Text style={styles.botao}>Iniciar</Text>
                </TouchableOpacity>
            </View>

            {/* botão que controla o radio O */}
            <View style={styles.radioView1}>
                <TouchableOpacity 
                    style={styles.viewElement}
                    onPress={()=> handlePlayerSelect('O')}
                    disabled={buttonDisable}>
                        <Text style={styles.title}>O</Text>
                </TouchableOpacity>
                <RadioButton
                    color='#000'
                    uncheckedColor='#000' 
                    value='O'
                    status={activePalyer === 'O' ? 'checked' : 'unchecked'}
                    disabled={radioOption}/>
            </View>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF8B21'
    },
    title:{
        fontSize: 22, 
        fontWeight: '600',
        color: '#FBF7F4',
        textShadowColor: '#fff'   
    },
    viewElement:{
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#FF8B21',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderColor: '#fff',
        borderWidth: 2
    },
    radioView:{
        flexDirection: 'row',
    },
    radioView1:{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,        
        flexDirection: 'column',
        backgroundColor: '#fff',
        width: '20%',
        margin: 20,
    },
    botao:{
        fontSize: 22,
        color: '#FF8B21',
        borderRadius: 20,
        shadowColor: '#fff',
        elevation: 5
    }
})