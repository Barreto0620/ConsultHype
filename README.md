
# 🚀 ConsultHype

Uma aplicação **Angular moderna** projetada para apresentar e filtrar uma lista de consultores especializados de forma ágil, inteligente e otimizada.
Com **Server-Side Rendering (SSR)**, garante **alta performance inicial**, carregamento rápido e **SEO aprimorado**, oferecendo uma experiência fluida e responsiva.

---

## 📋 Visão Geral

O **ConsultHype** é um sistema web que permite aos usuários:

* 📌 Explorar uma lista de consultores profissionais
* 🔍 Filtrar consultores por área de especialização
* 📱 Navegar em uma interface **intuitiva, moderna e responsiva**

---

## 🛠️ Tecnologias Utilizadas

* **Angular 18+** → Framework principal
* **TypeScript** → Tipagem forte e segura
* **Server-Side Rendering (SSR)** → Performance e SEO otimizados
* **Node.js** → Ambiente de execução do servidor
* **Express.js** → Servidor web para renderização SSR

---

## 📦 Pré-requisitos

Antes de iniciar, garanta que possui instalado em sua máquina:

* **Node.js** (versão 18 ou superior)
* **npm** ou **yarn**
* **Angular CLI** (`npm install -g @angular/cli`)

---

## ⚙️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Barreto0620/ConsultHype.git
cd ConsultHype
```

2. Instale as dependências:

```bash
npm install
```

---

## 🚀 Execução

### Modo Desenvolvimento (Client-Side)

Para rodar a aplicação localmente:

```bash
ng serve
```

Acesse em: **[http://localhost:4200](http://localhost:4200)**

---

## 🔍 Funcionalidades

### Principais Componentes

* **AppComponent** → Raiz da aplicação, coordena os demais módulos
* **ConsultantListComponent** → Lista e exibe os consultores disponíveis
* **ConsultantFilterComponent** → Filtros por área de especialização
* **ConsultantsService** → Gestão de dados e lógica de negócios

### Fluxo de Dados

1. O usuário aplica filtros no **ConsultantFilterComponent**
2. O **AppComponent** recebe os eventos e aciona o **ConsultantsService**
3. O **ConsultantListComponent** exibe a lista atualizada com os resultados

---

## 🏗️ Arquitetura

O projeto segue os princípios de **boas práticas**:

* 🔹 **Separação de responsabilidades**: UI em componentes, lógica em serviços
* 🔹 **Comunicação eficiente**: via `@Input()` e `@Output()`
* 🔹 **Tipagem forte**: Interface `Consultant` garante consistência dos dados
* 🔹 **SSR integrado**: maior performance e SEO otimizado

---

## 🔄 Benefícios do SSR

* 🚀 **Performance inicial superior** (carregamento rápido)
* 📈 **SEO otimizado** (conteúdo visível para buscadores)
* 🎯 **Melhor experiência do usuário** na primeira interação

---

## 🤝 Contribuindo

1. Faça um **fork** do repositório
2. Crie uma nova branch (`git checkout -b feature/MinhaFeature`)
3. Realize suas alterações e commit (`git commit -m 'feat: adiciona MinhaFeature'`)
4. Envie para o repositório (`git push origin feature/MinhaFeature`)
5. Abra um **Pull Request**

---

## 📝 Licença

Este projeto está licenciado sob a **MIT License**.
Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📧 Contato

👤 **Gabriel Barreto**
✉️ [gabrielprozds@gmail.com](mailto:gabrielprozds@gmail.com)

---
