// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    top: 80,
    justifyContent: 'center',
    textAlign: 'center',
    width: 230
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 28,
    backgroundColor: '#a7c6c4',
    borderRadius: 8,
    width: 140,
  },
  logoutContainer: {
    backgroundColor: '#a7c6c4',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    
  },
  organi:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 80
  },
  orga:{
    top: 80
  },
    // Adicione ao seu arquivo de estilos (styles.js ou equivalente)
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },

  closeModalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3498db',
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  downloadText: {
    fontSize: 18,
    color: '#3498db',
    marginBottom: 20,
  },
});

export default styles;
