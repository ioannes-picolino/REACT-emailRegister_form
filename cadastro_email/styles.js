import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: StatusBar.currentHeight,
    },
    areaTitulo: {
        width: '95%',
        height: 60,
        backgroundColor: '#2e1cd4',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,

    },
    titulo: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold',
    },
    labelCampo: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 5,
    },
    campoEdicao: {
        backgroundColor: '#7cd1eb',
        width: '80%',
        height: 40,
        fontSize: 17,
        fontWeight: 'bold',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    areaBotao: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    botao: {
        width: '30%',
        height: 60,
        backgroundColor: '#110f61',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoBotao: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    sombra: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,

        elevation: 23,
    },
    imgExibeSenha: {
        width: 32,
        height: 32,
    },
    areaSenha:
    {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    campoSenha: {
        width: '75%',
        marginRight: 20,
    }
});


export default styles;