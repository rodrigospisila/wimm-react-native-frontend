import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Title, Text, Card } from 'react-native-paper';
import { router } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    setLoading(true);
    try {
      // Simular login por enquanto
      setTimeout(() => {
        setLoading(false);
        router.replace('/dashboard');
      }, 1000);
    } catch (error) {
      setLoading(false);
      Alert.alert('Erro', 'Erro ao fazer login');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Title style={styles.title}>Wimm</Title>
        <Text style={styles.subtitle}>Where is my money?</Text>

        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>Entrar</Title>

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

            <Button
              mode="contained"
              onPress={handleLogin}
              loading={loading}
              disabled={loading}
              style={styles.button}
            >
              Entrar
            </Button>

            <Button
              mode="text"
              onPress={() => router.push('/register')}
              style={styles.linkButton}
            >
              Não tem uma conta? Criar conta
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
