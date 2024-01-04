// DepositHistory.js
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Linking, Modal } from 'react-native';
import styles from './styles';

const DepositHistory = ({ deposits, onSelectOcorrencia }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const data = [
    { id: 1, date: '01/01/2023', amount: 50, status: 'Aceito' },
    { id: 2, date: '01/02/2023', amount: 50, status: 'Aceito' },
    { id: 3, date: '01/03/2023', amount: 50, status: 'Aceito' },
    { id: 4, date: '01/04/2023', amount: 50, status: 'Aceito' },
    { id: 5, date: '01/05/2023', amount: 50, status: 'Aceito' },
    { id: 6, date: '01/06/2023', amount: 50, status: 'Aceito' },
    { id: 11, date: '01/07/2023', amount: 50, status: 'Pendente' },
    { id: 12, date: '01/08/2023', amount: 50, status: 'Pendente' },
    // ... outros registros de pagamento
  ];

   // Invertendo a ordem do array
   const reversedData = data.slice().reverse();

 
   const handleItemPress = (item) => {
     setSelectedItem(item);
     setModalVisible(true);
   };
 
   const closeModal = () => {
     setModalVisible(false);
   };
   const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <View style={styles.color}>
        <View style={styles.historyItem}>
          <View>
            <Text style={styles.state}>{`Valor: R$ ${item.amount.toFixed(2)}`}</Text>
            <Text style={styles.state}>{`Status: ${item.status}`}</Text>
          </View>
          <Text style={styles.date}>{`Data: ${item.date}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
   return (
     <View style={styles.content}>
       <Text style={styles.title}>Histórico de Depósitos</Text>
       <FlatList data={reversedData} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
 
       <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
         <View style={styles.modalContainer}>
           <View style={styles.modalContent}>
             <TouchableOpacity style={styles.closeModalButton} onPress={closeModal}>
               <Text style={styles.closeModalText}>Fechar</Text>
             </TouchableOpacity>
             <Text style={styles.modalTitle}>Comprovante</Text>
 
             {selectedItem?.comprovanteUri ? (
               <Image source={{ uri: selectedItem.comprovanteUri }} style={styles.comprovanteImage} />
             ) : (
               <Text style={styles.noComprovanteText}>Nenhum comprovante disponível</Text>
             )}
 
             <TouchableOpacity onPress={() => Linking.openURL(selectedItem?.comprovanteUri)}>
               <Text style={styles.downloadText}>Baixar Comprovante</Text>
             </TouchableOpacity>
             {/* Adicione qualquer conteúdo adicional do comprovante aqui */}
           </View>
         </View>
       </Modal>
     </View>
   );
 };
 
 export default DepositHistory;