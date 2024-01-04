import React, { useState } from 'react';
import { View, Button, StyleSheet, Modal, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DepositList from '../../components/DepositList';
import DepositDetail from '../../components/DepositDetail';
import DepositHistory from '../../components/DepositHistory';
import ExpenseForm from '../../components/ExpenseForm';
import DepositModal from '../../components/DepositModal';
import styles from './styles';

export default function AdminPage() {

    // Função para calcular o saldo total
    const calculateTotalBalance = () => {
      const totalBalance = deposits.reduce((total, deposit) => total + deposit.amount, 0);
      return totalBalance;
    };

  const ActionModalButtons = () => (
    <View style={styles.modalButtonsContainer}>
      <AcceptButton onPress={handleAcceptDeposit} />
      <RejectButton onPress={handleRejectDeposit} />
      <CloseButton onPress={() => setActionModalVisible(false)} />
    </View>
  );

  const [selectedDeposit, setSelectedDeposit] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isHistoryVisible, setHistoryVisible] = useState(false);
  const [isActionModalVisible, setActionModalVisible] = useState(false);
  const [isExpenseFormVisible, setExpenseFormVisible] = useState(false);

  const navigation = useNavigation();

  const [deposits, setDeposits] = useState([
    { id: 1, amount: 100, status: 'Pendente', comprovanteUri: 'url_do_comprovante_1' },
    { id: 2, amount: 150, status: 'Pendente', comprovanteUri: 'url_do_comprovante_2' },
    { id: 3, amount: 100, status: 'Aceito', comprovanteUri: 'url_do_comprovante_1' },
    { id: 4, amount: 150, status: 'Rejeitado', comprovanteUri: 'url_do_comprovante_2' },
    { id: 5, amount: 100, status: 'Aceito', comprovanteUri: 'url_do_comprovante_1' },
    { id: 6, amount: 150, status: 'Rejeitado', comprovanteUri: 'url_do_comprovante_2' },
  ]);

  
  const handleShowExpenseForm = () => {
    setExpenseFormVisible(true);
  };

  const handleCloseExpenseForm = () => {
    setExpenseFormVisible(false);
  };

  const handleDepositSelect = (deposit) => {
    setSelectedDeposit(deposit);
    setActionModalVisible(true);
  };

  const handleAcceptDeposit = () => {
    // Lógica para aceitar o depósito
    const updatedDeposits = deposits.map((d) =>
      d.id === selectedDeposit.id ? { ...d, status: 'Aceito' } : d
    );
    setDeposits(updatedDeposits);
    setActionModalVisible(false);
    setModalVisible(false);
  };

  const handleRejectDeposit = () => {
    // Lógica para rejeitar o depósito
    const updatedDeposits = deposits.map((d) =>
      d.id === selectedDeposit.id ? { ...d, status: 'Rejeitado' } : d
    );
    setDeposits(updatedDeposits);
    setActionModalVisible(false);
    setModalVisible(false);
  };

  const handleShowHistory = () => {
    setHistoryVisible(true);
  };

  const handleCloseHistory = () => {
    setHistoryVisible(false);
  };

  const handleLogout = () => {
    navigation.navigate('home');
  };

  const pendingDeposits = deposits.filter((d) => d.status === 'Pendente');

  

  return (
    <View style={styles.container}>
      {/* Elemento de texto para exibir o saldo */}
      <Text style={styles.totalBalance}>Saldo do Grupo: R$ {calculateTotalBalance()}</Text>


      <View style={styles.buttonContainer}>
        <Button title="Ver Histórico" onPress={handleShowHistory} />
        <Button title="Nova Despesa" onPress={handleShowExpenseForm} />
        <Button title="Sair" onPress={handleLogout} />
      </View>
      <View style={styles.Maincontainer}>
        <DepositList deposits={pendingDeposits} onDepositSelect={handleDepositSelect} />
        {selectedDeposit && <DepositDetail deposit={selectedDeposit} />}
        <DepositModal
          isVisible={isModalVisible}
          onAccept={handleAcceptDeposit}
          onReject={handleRejectDeposit}
          onClose={() => setModalVisible(false)}
        />
        <Modal visible={isActionModalVisible} animationType="slide" transparent={true}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ActionModalButtons />
            </View>
          </View>
        </Modal>
        <Modal visible={isHistoryVisible} animationType="slide">
          <View style={{ flex: 1 }}>
            <Button title="Fechar Histórico" onPress={handleCloseHistory} />
            <DepositHistory deposits={deposits} />
          </View>
        </Modal>
        <Modal visible={isExpenseFormVisible} animationType="slide">
          <ExpenseForm isVisible={isExpenseFormVisible} onClose={handleCloseExpenseForm} />
        </Modal>
      </View>
    </View>
  );
}


const AcceptButton = ({ onPress }) => (
  <View style={styles.modal}>
    <Button title="Aceitar" onPress={onPress} />
  </View>
);

const RejectButton = ({ onPress }) => (
  <View style={styles.modal}>
    <Button title="Rejeitar" onPress={onPress} />
  </View>
 
);

const CloseButton = ({ onPress }) => (
  <Button title="Fechar" onPress={onPress} />
);