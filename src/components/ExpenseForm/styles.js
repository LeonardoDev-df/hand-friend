import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    formContainer: {
      padding: 16,
      marginTop: 20, // Ajuste conforme necessário
    },  
    expenseContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff', // Cor de fundo
      },
      backButton: {
        marginTop: 10,
      },
      formContainer: {
        padding: 16,
      },
      input: {
        marginBottom: 16,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      previewImage: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        marginBottom: 16,
      },
      picker: {
        height: 50,
        width: '100%',
        backgroundColor: '#fff',
        marginBottom: 20,
      },
      pickerItem: {
        fontSize: 16, // Tamanho da fonte
        color: 'black', // Cor do texto
        // Adicione qualquer estilo adicional desejado
      },
})