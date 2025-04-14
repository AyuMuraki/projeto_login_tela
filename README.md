# **📋Context API para Autenticação e Filtros Globais.**

## **🎯 Objetivo do Projeto**
Implementar a **Context API** para gerenciar a **autenticação** do usuário e **filtros globais** para a lista de processos.


## **🌐 O que é Context API??**

A **Context API** é uma funcionalidade do React que permite **compartilhar estados entre componentes** sem a necessidade de passar props manualmente. Isso é especialmente útil para dados globais, como informações do usuário logado, temas e filtros.


## **🧠 O que é um  Props ??**

| Conceito | Descrição | Exemplo |
|---|---|---|
| **O que são `props`?** | `props` (abreviação de "properties") são argumentos passados de um componente pai para um componente filho no React. Eles permitem personalizar e configurar componentes filhos com dados e comportamentos específicos. | `function Filho(props) { return <p>{props.nome}</p>; }` |
| **Como funcionam** | Componentes pais enviam dados para componentes filhos através de `props`. Os filhos recebem esses dados como um objeto `props` e os utilizam para renderizar conteúdo ou definir comportamento. | `<Filho nome="João" />` |
| **Características** | - **Imutáveis:** Somente leitura, não podem ser modificadas diretamente pelo componente filho.<br> - **Fluxo unidirecional:** Passadas de cima para baixo na árvore de componentes.<br> - **Personalização:** Permitem criar componentes reutilizáveis e configuráveis. | - `props.nome = "Maria";` (❌ Errado) <br> - `Pai -> Filho -> Neto` (✅ Correto) <br> - `<Botao cor="azul" texto="Clique" />` |
| **Quando usar** | - Passar dados de um componente pai para um filho.<br> - Personalizar a aparência ou comportamento de um componente filho.<br> - Criar componentes reutilizáveis. | - `<Filho dados={dados} />`<br> - `<Botao cor={cor} texto={texto} />` <br> - `<Card titulo={titulo} conteudo={conteudo} />` |
| **Quando evitar** | - Compartilhar dados entre componentes não relacionados (usar Context API ou gerenciadores de estado global).<br> - Armazenar dados modificáveis pelo componente filho (usar estado local ou notificar o pai). | - `ComponenteA -> ComponenteZ` (❌ Evitar com `props`) <br> - `Filho.setState({ ... })` (❌ Errado, use estado local ou notifique o pai) |





## **🛠 Tecnologias Utilizadas**




| Tecnologia          | Descrição                                                                            |
| ------------------- | -------------------------------------------------------------------------------------- |
| React               | Biblioteca JavaScript para construção de interfaces de usuário.                     |
| TypeScript          | Superset do JavaScript que adiciona tipagem estática.                               |
| Tailwind CSS        | Framework CSS utilitário para estilização rápida e eficiente.                          |
| Context API         | Funcionalidade do React para gerenciamento de estados globais.                       |
| React Router DOM    | Biblioteca para roteamento no React.                                                 |



## **✨ Componentes Utilizados**

| Componente           | Descrição                                                                            |
| -------------------- | -------------------------------------------------------------------------------------- |
| Login.tsx            | Tela de login.                                                                         |
| Header.tsx           | Exibe o nome do usuário logado e o botão "Sair".                                      |
| TabelaProcessos.tsx  | Exibe a lista de processos em uma tabela.                                             |
| FiltroStatus.tsx     | Permite filtrar os processos por status.                                               |
| AuthContext.tsx      | Contexto para gerenciar a autenticação do usuário.                                   |
| FiltroContext.tsx    | Contexto para gerenciar o filtro de status dos processos.                               |








# 🏗 Estrutura do Projeto


```
C:.
│   wallpaper.png          # Imagem de fundo para a página de login
│   tailwind.config.js      # Configuração do TailwindCSS
│   tsconfig.json          # Configuração do TypeScript
│   vite.config.ts          # Configuração do Vite
│   package.json          # Dependências e scripts
│
└───src
    │   App.tsx              # Componente raiz da aplicação
    │   main.tsx             # Ponto de entrada que renderiza App
    │   index.css            # Estilos globais com Tailwind
    │
    ├───components          # Componentes reutilizáveis
    │   ├── FiltroStatus.tsx # Componente para filtrar processos por status
    │   ├── Header.tsx        # Cabeçalho com nome do usuário e botão "Sair"
    │   ├── processos.json   # Dados simulados dos processos
    │   └── TabelaProcessos.tsx # Tabela de exibição dos processos
    │
    ├───contexts            # Contextos para gerenciamento de estados globais
    │   ├── AuthContext.tsx  # Contexto para autenticação do usuário
    │   └── FiltroContext.tsx # Contexto para filtro de status dos processos
    │
    ├───pages               # Páginas da aplicação
    │   ├── Login.tsx        # Tela de login
    │   └── Processos.tsx    # Tela de listagem de processos
    │
    └───routes              # Configuração de rotas da aplicação
        └── AppRoutes.tsx    # Definição das rotas com React Router DOM


```

## 🔧 Funcionalidades Implementadas
- 🖥️**Tela de Login:**
    - Permite simular o login de um usuário.
    - Redireciona para a tela de processos após o login bem-sucedido.
- 👩🏻‍💻**Autenticação:**
    - Armazena os dados do usuário logado no **AuthContext**.
    - Exibe o nome do usuário no cabeçalho.
    - Implementa um botão "Sair" que limpa o contexto e retorna para a tela de login.
- 💅🏻 **Filtro Global de Processos:**
    - Utiliza o **FiltroContext** para gerenciar o filtro de status dos processos.
    - Permite filtrar os processos por status: "Todos", "Ativo" e "Encerrado".
    - A tabela de processos é atualizada de acordo com o filtro selecionado.

## **👨🏻‍💻Simulação de Usuário**

A autenticação foi simulada utilizando um usuário fixo:

```javascript
const USUARIO_FIXO = {
  nome: "Karoline Almeida",
  email: "karoline@exemplo.com",
  senha: "adm123"
};
```

## Detalhes da Implementação

| Tópico | Descrição | Exemplo de Código/Conceito |
|---|---|---|
| **Simulação de Autenticação** | A autenticação foi simulada utilizando um usuário fixo definido no código para fins de desenvolvimento. | `javascript const USUARIO_FIXO = { nome: "Karoline Almeida", email: "karoline@exemplo.com",  senha: "adm123" }; ` |
| **Criação do Filtro Global** | O filtro global de status dos processos foi criado utilizando a Context API do React para compartilhar o estado do filtro entre os componentes. | Criação de `FiltroContext`, uso de `Provider` em `FiltroStatus` e `useContext` em `TabelaProcessos`. |
| **Consumo de Dados do Contexto** | Os componentes `Header`, `TabelaProcessos` e `FiltroStatus` consomem os dados dos contextos `AuthContext` e `FiltroContext` utilizando o hook `useContext`. | `javascript const { usuario } = useContext(AuthContext); ` |



## **🚀 Como Executar**

**1️⃣ Clone o repositório e instale as dependências:**

```
npm install
npm install tailwindcss @tailwindcss/vite

```

**2️⃣ Configure o plugin da Vite:**

```
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})


```

**3️⃣Importar CSS do Tailwind:**

```
@import "tailwindcss";


```



**4️⃣ Inicie o servidor de desenvolvimento:**

```
npm run dev

```

**5️⃣Acesse no navegador:**

```
http://localhost:5173

```




> 💡 **Dica Rápida: Em caso de dúvida acesse a documentação do tailwindcss.**

*https://tailwindcss.com/docs/installation/using-vite.*

> ✅ **Bônus:** Para personalizar a aparência da sua aplicação, você pode utilizar fontes personalizadas do Google Fonts.
* Selecione apenas os estilos de fonte que você realmente precisa para evitar aumentar o tamanho do seu projeto
* Considere usar fontes de fallback (como sans-serif ou serif) para garantir que o texto seja exibido corretamente caso a fonte personalizada não seja carregada.
* https://fonts.google.com/selection/embed 






Feito com 💙 por Ayumi Muraki
