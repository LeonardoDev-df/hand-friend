// styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 71,
    backgroundColor: '#1693a5',
  },
  declareText:{
    padding: 40,
    
    top: 50
  },
  downloadButton: {
    padding: 10,
    backgroundColor: '#2ecc71', // Cor verde para o botão de download
    borderRadius: 5,
    marginLeft: 10, // Espaço à esquerda para separar os botões
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10, // Adicione margem inferior para separar o cabeçalho do conteúdo principal
    top: 80
  },
  menuButton: {
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  OcorrenciaButton:{
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
    position: 'absolute',
    top: 64,
    left: 120
  },
  logoutButton: {
    padding: 10,
    backgroundColor: '#e74c3c',
    borderRadius: 5,
    position: 'absolute',
    top: 62,
    right: 70
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    
  },
});
