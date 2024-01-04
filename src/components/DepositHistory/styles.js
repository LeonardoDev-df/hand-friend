// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 6,
    width: 350,
    
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center'
  },
  date:{
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    backgroundColor: '#fff',
    marginHorizontal: 10
  },
  state:{
    fontWeight: 'bold',
    fontSize: 16,
    marginHorizontal: 10
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
    marginBottom: 7,
    backgroundColor: '#fff',
    borderRadius: 8
  },
  // Adicione ao seu arquivo de estilos (styles.js ou equivalente)
  // Adicione ao seu arquivo de estilos (styles.js ou equivalente)
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adiciona um fundo escuro translúcido
  },

  modalContent: {
    width: '80%', // Ajuste a largura conforme necessário
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
  },

  closeModalButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    zIndex: 1,
  },

  closeModalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3498db',
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  downloadText: {
    fontSize: 16,
    color: '#3498db',
    marginTop: 10,

    alignItems: 'center',
  },

});

export default styles;
