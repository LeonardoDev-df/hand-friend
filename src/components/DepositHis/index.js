// DepositHistory.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';

const DepositHistory = ({ deposits, onDepositSelect }) => {
  // Função para renderizar cada item da lista de depósitos
  const renderDepositItem = ({ item }) => (
    <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', padding: 10 }}>
      <Text>ID: {item.id}</Text>
      <Text>Amount: {item.amount}</Text>
      <Text>Status: {item.status}</Text>
      {/* Adicione mais informações conforme necessário */}
      <Text>Comprovante: {item.comprovanteUri}</Text>
      <Text>Data: {item.date}</Text>
      {/* Adicione mais informações conforme necessário */}
      <Button title="Detalhes" onPress={() => onDepositSelect(item)} />
    </View>
  );

  return (
    <View>
      <FlatList
        data={deposits}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderDepositItem}
      />
    </View>
  );
};

export default DepositHistory;
