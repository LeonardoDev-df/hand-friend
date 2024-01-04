// OcorrenciaViewer.js
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styles'; // Certifique-se de importar os estilos apropriados

const OcorrenciaViewer = ({ ocorrencia }) => {
  return (
    <ScrollView>
      <View style={styles.ocorrenciaContainer}>
        <Text style={styles.label}>Data: {ocorrencia.data}</Text>
        <Text style={styles.label}>Valor Gasto: {ocorrencia.valor}</Text>
        {/* Adicione outros detalhes da ocorrência conforme necessário */}
        <Text style={styles.label}>Comprovante:</Text>
        <Image source={{ uri: ocorrencia.comprovanteUri }} style={styles.ocorrenciaImage} />
        {/* Adicione outros componentes para mostrar documentos, etc. */}
      </View>
    </ScrollView>
  );
};

export default OcorrenciaViewer;
