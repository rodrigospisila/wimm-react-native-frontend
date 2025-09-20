import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Title, Text, Card, Button } from 'react-native-paper';
import { router } from 'expo-router';

export default function DashboardScreen() {
  function handleLogout() {
    router.replace('/login');
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Olá, Usuário!</Text>
            <Text style={styles.subtitle}>Bem-vindo ao Wimm</Text>
          </View>
          <Button mode="text" onPress={handleLogout}>
            Sair
          </Button>
        </View>

        {/* Resumo Financeiro */}
        <Card style={styles.summaryCard}>
          <Card.Content>
            <Title style={styles.summaryTitle}>Resumo Financeiro</Title>
            <View style={styles.summaryContent}>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryLabel}>Saldo Total</Text>
                <Text style={styles.summaryValue}>R$ 0,00</Text>
              </View>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryLabel}>Carteiras</Text>
                <Text style={styles.summaryValue}>0</Text>
              </View>
            </View>
          </Card.Content>
        </Card>

        {/* Carteiras */}
        <View style={styles.section}>
          <Title style={styles.sectionTitle}>Suas Carteiras</Title>
          <Card style={styles.emptyCard}>
            <Card.Content style={styles.emptyContent}>
              <Text style={styles.emptyText}>
                Você ainda não tem carteiras cadastradas
              </Text>
              <Button mode="contained" style={styles.addButton}>
                Adicionar Carteira
              </Button>
            </Card.Content>
          </Card>
        </View>

        {/* Transações Recentes */}
        <View style={styles.section}>
          <Title style={styles.sectionTitle}>Transações Recentes</Title>
          <Card style={styles.emptyCard}>
            <Card.Content style={styles.emptyContent}>
              <Text style={styles.emptyText}>
                Nenhuma transação encontrada
              </Text>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  summaryCard: {
    margin: 20,
    marginTop: 0,
    elevation: 4,
  },
  summaryTitle: {
    marginBottom: 16,
  },
  summaryContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  summaryItem: {
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  summaryValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  section: {
    margin: 20,
    marginTop: 0,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 12,
  },
  emptyCard: {
    elevation: 2,
  },
  emptyContent: {
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 16,
  },
  addButton: {
    marginTop: 8,
  },
});
