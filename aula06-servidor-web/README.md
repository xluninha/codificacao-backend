# 🌐 Aula 06: Criando um Servidor Web Nativo
> **UC:** Codificação para Back-End

Construindo servidores HTTP nativos no Node.js com manipuladores de rotas, respostas JSON e cabeçalhos de segurança.

---

## 📌 Sobre a Aula
Nesta aula aprendemos a criar um servidor web sem o uso de frameworks externos, utilizando apenas o módulo nativo `http` do Node.js. Exploramos a criação de endpoints, controle de rotas (`/status`), tratamento de respostas para caminhos não encontrados, definição de *Status Codes* (200, 400) e aplicação de cabeçalhos de segurança (*Security Headers*).

---

## 📁 Estrutura do Projeto

```text
aula06-servidor-web/
├── server.js          # Servidor HTTP nativo com roteamento e respostas JSON
├── package.json       # Configurações do projeto Node.js
└── README.md          # Documentação da aula