// OcorrenciaViewer.js
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'; // Importe os estilos necessários

const OcorrenciaViewer = ({ ocorrencias }) => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Ocorrências do Grupo</Text>
      {/* Adicione o código para renderizar as ocorrências aqui */}
    </View>
  );
};

export default OcorrenciaViewer;
