import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DepositHistory from '../../components/DepositHistory';
import DeclareDeposit from '../../components/DeclareDeposit';
import OcorrenciaViewer from '../../components/OcorrenciaViewer'; // Importe o novo componente
import styles from './styles';

export default function Users() {
  const [isHistoryVisible, setIsHistoryVisible] = useState(true);
  const [selectedOcorrencia, setSelectedOcorrencia] = useState(null);
  const [isOcorrenciaModalVisible, setIsOcorrenciaModalVisible] = useState(false);
  const navigation = useNavigation();

  const toggleView = () => {
    setIsHistoryVisible(!isHistoryVisible);
    setSelectedOcorrencia(null);
    setIsOcorrenciaModalVisible(false);
  };

  const handleLogout = () => {
    // Adicionar lógica para fazer logout ou navegar para a tela de login
    // Exemplo de navegação para a tela de login
    navigation.navigate('home');
  };

  const handleDownloadHistory = () => {
    // Adicione lógica para baixar o histórico completo
    // Pode ser uma chamada à API para obter os dados e gerar um arquivo para download

    // Aqui, estamos mostrando um alerta como exemplo
    Alert.alert('Download Histórico', 'O histórico completo foi baixado com sucesso!');
  };

  const handleViewOcorrencias = () => {
    // Adicione a lógica para carregar as ocorrências do grupo, se necessário
    setIsOcorrenciaModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>

      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton} onPress={toggleView}>
          <Text style={styles.buttonText}>{isHistoryVisible ? 'Novo Depósito' : 'Histórico'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.downloadButton} onPress={handleDownloadHistory}>
          <Text style={styles.buttonText}>Download Histórico</Text>
        </TouchableOpacity>

       
      </View>

      <TouchableOpacity style={styles.OcorrenciaButton} onPress={handleViewOcorrencias}>
          <Text style={styles.buttonText}>Ocorrências</Text>
        </TouchableOpacity>

      <View style={styles.declareText}>
        {isHistoryVisible ? <DepositHistory onSelectOcorrencia={setSelectedOcorrencia} /> : <DeclareDeposit />}
      </View>

      <Modal
        visible={isOcorrenciaModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsOcorrenciaModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={() => setIsOcorrenciaModalVisible(false)}
            >
              <Text style={styles.closeModalText}>Fechar</Text>
            </TouchableOpacity>

            {/* Adicione aqui o componente OcorrenciaViewer */}
            <OcorrenciaViewer />
          </View>
        </View>
      </Modal>
    </View>
  );
}
