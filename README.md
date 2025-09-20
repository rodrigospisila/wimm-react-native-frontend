
# Wimm - Frontend React Native

Este é o frontend do aplicativo **Wimm - Where is my money?**, desenvolvido com **React Native** e **Expo**.

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
   git clone <URL_DO_REPOSITORIO>
   cd wimm_react_native_frontend
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure a URL da API:**
   - Abra o arquivo `src/services/api.ts`.
   - Atualize a variável `baseURL` para o endereço do seu backend NestJS (ex: `http://localhost:3000`).

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

## 🛠️ Estrutura do Projeto

- `src/`
  - `assets/`: Imagens e outros arquivos estáticos.
  - `components/`: Componentes reutilizáveis.
  - `contexts/`: Contextos da aplicação (ex: `AuthContext`).
  - `navigation/`: Configuração da navegação (React Navigation).
  - `screens/`: Telas principais da aplicação (Login, Dashboard, etc.).
  - `services/`: Serviços de API e outros.
  - `types/`: Definições de tipos TypeScript.
- `App.tsx`: Componente principal da aplicação.

## ✨ Funcionalidades

- **Autenticação:** Telas de Login e Registro.
- **Navegação:** Navegação em pilha (Stack Navigator).
- **UI:** Componentes visuais com [React Native Paper](https://reactnativepaper.com/).
- **Gerenciamento de Estado:** Context API para autenticação.
- **Comunicação com API:** [Axios](https://axios-http.com/) para requisições HTTP.


