import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import Board from '../board/Board'
import Winner from '../winner/Winner'
import Merchan from '../mechan/Merchan'

export default function Game(){
    //estado que controla o jogador ativo
    const[activePalyer, setActivePlayer] = useState(null)

    //estado que controla os botoes de escolha de X ou O
    const[buttonDisable, setbuttonDisable] = useState(false)

    //cria um estado com lista de 9 espaços vazios
    const[btnState, setBtnState] = useState(Array(9).fill(null))

    const[winnerPlayer, setWinnerPlayer] = useState('')

    //verifica se o btao esta vazio e preenche com X ou O
    const handlePlayer = (index) =>{
        if(btnState[index] === null){
            const valueState = [...btnState]
            valueState[index] = activePalyer
            setActivePlayer(activePalyer === 'X' ? 'O' : 'X')
            setBtnState(valueState)
        }  
    }
    //reseta os valores dos botoes
    const deleteCel = () =>{
        setBtnState(Array(9).fill(null))
        setActivePlayer('X')
        setWinnerPlayer('')
    }
    
    //função que checa o vencedor
    const checkWinner = (player) => {
        const winConditions = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
    
        return winConditions.some(([a, b, c]) => {
          return btnState[a] === player && btnState[b] === player && btnState[c] === player;
        })
    }

    const verifyDraw = (btnState) => {
        //verifica se todos os botoes estao preenchidos
        const btFull = btnState.every(cel => cel !== null);
        // Verificar se não houve um vencedor
        const winnerX = checkWinner('X');
        const winnerO = checkWinner('O');
      
        // Se todas as células estiverem preenchidas e não houver um vencedor, é um empate
        return btFull && !winnerX && !winnerO;
      };
      
    //hook que verifica se há vencedor ou empate
    useEffect( ()=>{
        if(checkWinner('X')){
            setWinnerPlayer(' Vencedor X')
        }else if(checkWinner('O')){
            setWinnerPlayer(' Vencedor O')
        }else if(verifyDraw(btnState)){
            setWinnerPlayer(' EMPATE !')
        }
    })

  return (
    <View style={styles.container}>
        <View style={styles.boardView}>
            <Board activePalyer={activePalyer} setActivePlayer={setActivePlayer}
                buttonDisable={buttonDisable} setbuttonDisable={setbuttonDisable}/>
        </View>

        <View style={styles.board}>
            {btnState.map((cel, index) =>{
                return(
                    <TouchableOpacity 
                        style={styles.botao}
                        onPress={()=>handlePlayer(index)}
                        key={index}
                        disabled={cel !== null}>
                            <Text style={styles.btTexto}>{cel}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
            
        <Winner deleteCel={deleteCel} winnerPlayer={winnerPlayer}/>            
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    boardView:{
        width: '100%'
    },
    board:{
        width: '75%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 50       
    },
    botao:{
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5E9FF',
        borderWidth: 4,
        borderRadius: 10,
        borderColor: '#FF8B21'
    },
    btTexto:{
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FF8B21',
        textShadowColor: 'rgba(10,10, 50, 0.5)',
        textShadowOffset:  {width: 2, height: 2},
        textShadowRadius: 5
    },
    startButtonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      startButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginVertical: 10,
      },
      startButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
      },
})