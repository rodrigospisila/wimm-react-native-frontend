import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Title, Text, Card } from 'react-native-paper';
import { router } from 'expo-router';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    setLoading(true);
    try {
      // Simular registro por enquanto
      setTimeout(() => {
        setLoading(false);
        router.replace('/dashboard');
      }, 1000);
    } catch (error) {
      setLoading(false);
      Alert.alert('Erro', 'Erro ao criar conta');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Title style={styles.title}>Wimm</Title>
        <Text style={styles.subtitle}>Where is my money?</Text>

        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>Criar Conta</Title>

            <TextInput
              label="Nome"
              value={name}
              onChangeText={setName}
              mode="outlined"
              autoCapitalize="words"
              style={styles.input}
            />

            <TextInput
              label="E-mail"
              value={email}
              onChangeText={setEmail}
              mode="outlined"
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
            />

            <TextInput
              label="Senha"
              value={password}
              onChangeText={setPassword}
              mode="outlined"
              secureTextEntry
              style={styles.input}
            />

            <TextInput
              label="Confirmar Senha"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              mode="outlined"
              secureTextEntry
              style={styles.input}
            />

            <Button
              mode="contained"
              onPress={handleRegister}
              loading={loading}
              disabled={loading}
              style={styles.button}
            >
              Criar conta
            </Button>

            <Button
              mode="text"
              onPress={() => router.push('/login')}
              style={styles.linkButton}
            >
              Já tem uma conta? Entrar
            </Button>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2e7d32',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  card: {
    elevation: 4,
  },
  cardTitle: {
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
    marginBottom: 16,
  },
  linkButton: {
    marginTop: 8,
  },
});
