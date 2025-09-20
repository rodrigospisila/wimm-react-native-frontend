import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Alert,
} from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  Button,
  FAB,
  useTheme,
  Text,
  Divider,
} from 'react-native-paper';
import { useAuth } from '../contexts/AuthContext';
import { walletService } from '../services/api';
import { Wallet } from '../types';

interface DashboardScreenProps {
  navigation: any;
}

export default function DashboardScreen({ navigation }: DashboardScreenProps) {
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [summary, setSummary] = useState({
    totalBalance: 0,
    walletsCount: 0,
    wallets: [] as Array<{ id: number; name: string; currentBalance: number }>,
  });
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const { user, signOut } = useAuth();
  const theme = useTheme();

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const [walletsData, summaryData] = await Promise.all([
        walletService.getWallets(),
        walletService.getWalletsSummary(),
      ]);
      
      setWallets(walletsData);
      setSummary(summaryData);
    } catch (error: any) {
      Alert.alert(
        'Erro',
        error.response?.data?.message || 'Erro ao carregar dados'
      );
    } finally {
      setLoading(false);
    }
  }

  async function onRefresh() {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  }

  function formatCurrency(value: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Olá, {user?.name}!</Text>
            <Text style={styles.subtitle}>Bem-vindo ao Wimm</Text>
          </View>
          <Button mode="text" onPress={signOut}>
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
                <Text style={[styles.summaryValue, { color: theme.colors.primary }]}>
                  {formatCurrency(summary.totalBalance)}
                </Text>
              </View>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryLabel}>Carteiras</Text>
                <Text style={styles.summaryValue}>
                  {summary.walletsCount}
                </Text>
              </View>
            </View>
          </Card.Content>
        </Card>

        {/* Lista de Carteiras */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Title style={styles.sectionTitle}>Suas Carteiras</Title>
            <Button
              mode="text"
              onPress={() => navigation.navigate('CreateWallet')}
            >
              Nova
            </Button>
          </View>

          {wallets.length === 0 ? (
            <Card style={styles.emptyCard}>
              <Card.Content style={styles.emptyContent}>
                <Text style={styles.emptyText}>
                  Você ainda não tem carteiras cadastradas
                </Text>
                <Button
                  mode="contained"
                  onPress={() => navigation.navigate('CreateWallet')}
                  style={styles.emptyButton}
                >
                  Criar primeira carteira
                </Button>
              </Card.Content>
            </Card>
          ) : (
            wallets.map((wallet) => (
              <Card key={wallet.id} style={styles.walletCard}>
                <Card.Content>
                  <View style={styles.walletHeader}>
                    <View>
                      <Title style={styles.walletName}>{wallet.name}</Title>
                      <Text style={styles.walletBalance}>
                        {formatCurrency(wallet.currentBalance)}
                      </Text>
                    </View>
                    <Button
                      mode="outlined"
                      compact
                      onPress={() => navigation.navigate('WalletDetails', { walletId: wallet.id })}
                    >
                      Ver
                    </Button>
                  </View>
                </Card.Content>
              </Card>
            ))
          )}
        </View>

        {/* Ações Rápidas */}
        <View style={styles.section}>
          <Title style={styles.sectionTitle}>Ações Rápidas</Title>
          <View style={styles.quickActions}>
            <Button
              mode="contained"
              style={styles.quickActionButton}
              onPress={() => navigation.navigate('NewTransaction')}
            >
              Nova Transação
            </Button>
            <Button
              mode="outlined"
              style={styles.quickActionButton}
              onPress={() => navigation.navigate('Transactions')}
            >
              Ver Transações
            </Button>
          </View>
        </View>
      </ScrollView>

      {/* FAB para nova transação */}
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate('NewTransaction')}
      />
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
    paddingTop: 40,
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
  },
  section: {
    margin: 20,
    marginTop: 0,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
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
  emptyButton: {
    marginTop: 8,
  },
  walletCard: {
    marginBottom: 12,
    elevation: 2,
  },
  walletHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  walletName: {
    fontSize: 16,
    marginBottom: 4,
  },
  walletBalance: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickActionButton: {
    flex: 1,
    marginHorizontal: 4,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
