
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#1693a5',
      },
      title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 26,
      },
      logo: {
        width: 120,
        height: 120,
        marginBottom: 16,
        borderRadius: 12,
      },
      input: {
        height: 50,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginBottom: 16,
        padding: 8,
        width: '70%',
        alignSelf: 'center',
        textAlign: 'center',
        backgroundColor: '#a7c6c4',
        borderRadius: 3,
      },
      button: {
        backgroundColor: '#a7c6c4',
        padding: 10,
        borderRadius: 5,
        width: '50%',
      },
      loginText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
      },
})