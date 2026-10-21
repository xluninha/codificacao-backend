# 🦁 Aula 07: Fundamentos do NestJS
> **UC:** Codificação para Back-End

Introdução ao ecossistema NestJS, arquitetura modular e TypeScript para desenvolvimento back-end escalável.

---

## 📌 Sobre a Aula
Nesta aula iniciamos os estudos no **NestJS**, um framework Node.js progressivo baseado em TypeScript. Exploramos sua arquitetura fortemente inspirada em *Dependency Injection* (Injeção de Dependência) e a divisão clara de responsabilidades através dos **Modules**, **Controllers** e **Services**.

---

## 📁 Estrutura do Projeto

```text
aula07-fundamentos-nestjs/
├── src/
│   ├── app.controller.ts      # Camada de rotas e manipulação de requisições HTTP
│   ├── app.controller.spec.ts # Testes unitários do controller
│   ├── app.module.ts          # Módulo raiz que organiza as dependências
│   ├── app.service.ts         # Regras de negócio da aplicação
│   └── main.ts                # Ponto de entrada da aplicação (bootstrap)
├── test/                      # Testes de integração (E2E)
├── nest-cli.json              # Configurações da CLI do NestJS
├── tsconfig.json              # Configurações do compilador TypeScript
├── package.json               # Dependências do projeto e scripts de execução
└── README.md                  # Documentação da aula