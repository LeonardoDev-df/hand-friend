// DeclareDeposit.js
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import ImagePickerButton from '../ImagePickerButton';
import CustomButton from '../CustomButton';
import styles from './styles';

const DeclareDeposit = () => {
  const [valorDepositado, setValorDepositado] = useState('');
  const [comprovanteUri, setComprovanteUri] = useState(null);

  const handleImageSelect = (uri) => {
    setComprovanteUri(uri);
  };

  const handleSubmit = () => {
    console.log('Valor Depositado:', valorDepositado);
    console.log('Comprovante URI:', comprovanteUri);
    // Adicionar lógica para enviar os dados para o servidor
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Declare seu Depósito</Text>

      <View style={styles.organi}>
        <TextInputMask
          style={styles.input}
          placeholder="Valor R$"
          type={'money'}
          options={{
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: 'R$',
          }}
          value={valorDepositado}
          onChangeText={(formatted, extracted) => setValorDepositado(extracted)}
        />

       
        <CustomButton style={styles.logoutContainer} onPress={handleSubmit} text="Enviar" />
      </View>

      <View style={styles.orga}>
          <ImagePickerButton onSelectImage={handleImageSelect} />
      </View>
      

    </View>
  );
};

export default DeclareDeposit;
