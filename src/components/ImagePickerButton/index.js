import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default function DocumentPickerButton({ onSelectDocument }) {
  const handleDocumentPicker = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync();

      if (result.type === 'success') {
        onSelectDocument(result.uri);
      }
    } catch (error) {
      console.log('Error picking document:', error);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleDocumentPicker}>
      <Text style={styles.buttonText}>Selecionar Documento</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a7c6c4',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    top: 22
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
});
