
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  totalBalance: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 70, // Ajuste conforme necessário
  },
    container: {
        flex: 1,
        padding: 26,
        backgroundColor: '#1693a5',
      },
      Maincontainer:{
        marginTop: 24,
        backgroundColor: '#FFF',
      },
     
      // ... outros estilos
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 60,
        paddingVertical: 10,  // Adicionando padding vertical para melhorar a aparência
        backgroundColor: '#FFF',
        elevation: 1,  // Adicionando elevação para um efeito de elevação (sombra)
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: '#ccc',
        borderRadius: 20,
        padding: 45,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 10,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 15,
      },
      modalButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
      },
      modal: {
        paddingRight: 10
      }
})