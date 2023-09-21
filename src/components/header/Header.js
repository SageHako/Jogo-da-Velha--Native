import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Escoha uma das opções
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f6f1e9',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomWidth: 0.2,
        shadowColor: '#000',
        elevation: 1
    },
    title:{
        fontSize: 20, 
        fontWeight: 'bold',
        color: '#4F200D',
        margin: 10
    }
})