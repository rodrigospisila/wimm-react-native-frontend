# Wimm - Frontend React Native

Este é o frontend do aplicativo **Wimm - Where is my money?**, desenvolvido com **React Native**, **Expo** e **Expo Router**.

## 🚀 Começando

Siga as instruções abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/): `npm install -g @expo/cli`
- [Expo Go](https://expo.dev/go) (aplicativo para Android/iOS)

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/rodrigospisila/wimm-react-native-frontend.git
   cd wimm-react-native-frontend
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure a URL da API:**
   - Abra o arquivo `src/services/api.ts`.
   - Atualize a variável `API_BASE_URL` para o endereço do seu backend NestJS (ex: `http://localhost:3000`).

### Executando a Aplicação

1. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm start
   ```

2. **Abra o aplicativo:**
   - **No seu celular:**
     - Instale o aplicativo **Expo Go**.
     - Escaneie o QR code exibido no terminal com o Expo Go.
   - **No navegador (para testes):**
     - Pressione `w` no terminal para abrir a versão web.

## 🛠️ Estrutura do Projeto (Expo Router)

O projeto utiliza **Expo Router** para navegação baseada em arquivos (file-based routing):

```
app/
├── _layout.tsx         # Layout principal da aplicação
├── index.tsx          # Página inicial (redireciona para login)
├── login.tsx          # Tela de login
├── register.tsx       # Tela de registro
└── dashboard.tsx      # Dashboard principal

src/
├── contexts/          # Contextos da aplicação (AuthContext)
├── services/          # Serviços de API e comunicação
├── types/            # Definições de tipos TypeScript
└── utils/            # Utilitários (storage polyfill)
```

## ✨ Funcionalidades

### **Navegação Moderna**
- **Expo Router**: Navegação baseada em arquivos (file-based routing)
- **Deep Linking**: Suporte nativo a links profundos
- **TypeScript**: Tipagem automática de rotas
- **Layouts**: Layouts compartilhados entre telas

### **Interface e UX**
- **React Native Paper**: Componentes Material Design
- **Responsive Design**: Adaptável para diferentes tamanhos de tela
- **Tema Personalizado**: Cores e estilos consistentes
- **Loading States**: Estados de carregamento em todas as operações

### **Integração com Backend**
- **Axios**: Cliente HTTP para comunicação com API
- **Interceptors**: Tratamento automático de autenticação e erros
- **Storage**: Persistência de dados com polyfill para web
- **Error Handling**: Tratamento robusto de erros

## 🔧 Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento React Native
- **Expo Router** - Navegação baseada em arquivos
- **TypeScript** - Tipagem estática
- **React Native Paper** - Biblioteca de componentes UI
- **Axios** - Cliente HTTP
- **@expo/vector-icons** - Ícones vetoriais

## 📱 Compatibilidade

- **iOS**: iPhone e iPad
- **Android**: Smartphones e tablets
- **Web**: Navegadores modernos (para desenvolvimento e testes)

## 🚀 Deploy

Para fazer deploy do aplicativo:

1. **Build para produção:**
   ```bash
   npx expo build
   ```

2. **Publicar no Expo:**
   ```bash
   npx expo publish
   ```

3. **Build standalone:**
   ```bash
   npx expo build:android
   npx expo build:ios
   ```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
