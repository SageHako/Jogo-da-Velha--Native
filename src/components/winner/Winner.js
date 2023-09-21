import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Winner({deleteCel, winnerPlayer}){

    return(
        <View style={styles.container}>

            <View style={styles.winnerView}>
                <Text style={styles.winnerTexto}>{winnerPlayer}</Text>
             </View>

            <TouchableOpacity style={styles.botao} onPress={deleteCel}>
                <Text style={styles.texto}>Jogar Novamente</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    texto:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FBF7F4'
    },
    botao:{
        margin: 10,
        padding: 25,
        color: 'red',
        backgroundColor: '#F51400',
        borderRadius: 20,
        shadowColor: '#fff',
        elevation: 5
    },
    winnerTexto:{
        fontWeight: 'bold',
        color: '#000',
        fontSize: 26
    },
    winnerView:{
        width: 300,
        height: 150,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#F51400'
    }
})