import React, { useState, useEffect } from 'react';
import { View, Button, TextInput, Image, ScrollView, StyleSheet, Modal, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
import ImagePickerButton from '../ImagePickerButton';
import { Picker } from '@react-native-picker/picker';
import { TextInputMask } from 'react-native-masked-text';

import styles from './styles';

const mockUsers = ['João', 'Pedro', 'Carlos']; // Simulação de usuários cadastrados

const ExpenseForm = ({ isVisible, onClose }) => {
  const navigation = useNavigation();
  const [valorDepositado, setValorDepositado] = useState('');
  const [occurrenceValue, setOccurrenceValue] = useState('');
  const [selectedUser, setSelectedUser] = useState(mockUsers[0]);
  const [photoProof, setPhotoProof] = useState(null);
  const [processPhoto, setProcessPhoto] = useState(null);
  const [confirmationModalVisible, setConfirmationModalVisible] = useState(false);

  // Efeito para ajustar o valor para o formato monetário ao mudar
  useEffect(() => {
    if (occurrenceValue !== '') {
      const formattedValue = parseFloat(occurrenceValue.replace('R$ ', ' ').replace(' , ', ' . '));
      if (!isNaN(formattedValue)) {
        setOccurrenceValue(`R$ ${formattedValue.toFixed(2)}`);
      }
    }
  }, [occurrenceValue]);

  const handleUploadPhotoProof = () => {
    const options = {
      title: 'Selecionar Foto de Comprovação',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('Usuário cancelou o upload de imagem');
      } else if (response.error) {
        console.error('Erro ao selecionar a imagem:', response.error);
      } else {
        setPhotoProof(response.uri);
      }
    });
  };

  const handleUploadProcessPhoto = () => {
    const options = {
      title: 'Selecionar Foto do Processo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('Usuário cancelou o upload de imagem');
      } else if (response.error) {
        console.error('Erro ao selecionar a imagem:', response.error);
      } else {
        setProcessPhoto(response.uri);
      }
    });
  };

  const handleSubmitForm = () => {
    // Lógica para validar se o formulário está preenchido corretamente
    if (occurrenceValue && photoProof && processPhoto) {
      setConfirmationModalVisible(true);
    } else {
      console.warn('Preencha todos os campos antes de enviar.');
    }
  };

  const handleConfirmSubmission = () => {
    // Lógica para enviar os dados do formulário para o servidor
    // Resetar os campos e fechar o modal após o envio
    setSelectedUser(mockUsers[0]); // Volta para o primeiro usuário
    setOccurrenceValue('');
    setPhotoProof(null);
    setProcessPhoto(null);
    setConfirmationModalVisible(false);
    onClose();
  };

  return (
    <ScrollView contentContainerStyle={styles.formContainer}>
      <Text style={styles.label}>Nome do Usuário</Text>
      <Picker
        selectedValue={selectedUser}
        onValueChange={(itemValue) => setSelectedUser(itemValue)}
        style={styles.picker}
      >
        {mockUsers.map((user) => (
          <Picker.Item  style={styles.pickerItem} key={user} label={user} value={user} />
        ))}
      </Picker>

      <Text style={styles.label}>Valor da Ocorrência</Text>
    
        <TextInputMask
          style={styles.input}
          placeholder="Informe o valor R$"
          type={'money'}
          options={{
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: 'R$',
          }}
          value={occurrenceValue}
          onChangeText={(formatted, extracted) => setValorDepositado(extracted)}
        />

      <Button title="Upload Foto Comprovante" onPress={handleUploadPhotoProof} />
      {photoProof && <Image source={{ uri: photoProof }} style={styles.previewImage} />}

      <Button title="Upload Foto Processo" onPress={handleUploadProcessPhoto} />
      {processPhoto && <Image source={{ uri: processPhoto }} style={styles.previewImage} />}

      <Button title="Enviar Ocorrência" onPress={handleSubmitForm} />

      <Modal visible={confirmationModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Confirma o envio da ocorrência?</Text>
            <Button title="Confirmar" onPress={handleConfirmSubmission} />
            <Button title="Cancelar" onPress={() => setConfirmationModalVisible(false)} />
          </View>
        </View>
      </Modal>

      <Button title="Cancelar" onPress={onClose} />
    </ScrollView>
  );
};

export default ExpenseForm;
