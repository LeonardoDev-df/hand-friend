import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'; // Importando os estilos do arquivo styles.js

export  function Home() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

 // ... (código anterior)

const handleLogin = () => {
  if (usuario.toLowerCase() === 'admin') {
    // Navegar para a tela 'admin'
    navigation.navigate('admin');
  } else if (usuario.toLowerCase() === 'users') {
    // Navegar para a tela 'users'
    navigation.navigate('users');
  } else {
    // Adicione a lógica de autenticação aqui, se necessário
    // Por enquanto, apenas um alerta indicando usuário desconhecido
    alert('Usuário desconhecido. Por favor, insira "admin" ou "users".');
  }
};

// ... (restante do código)


  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
     

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        onChangeText={(text) => setUsuario(text)}
        value={usuario}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={(text) => setSenha(text)}
        value={senha}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}