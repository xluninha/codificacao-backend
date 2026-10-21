# 📦 Aula 02: Módulos e CommonJS vs ESM
> **UC:** Codificação para Back-End
> **Data:**11/09/2026

Entendendo os sistemas de módulos do Node.js e como organizar projetos back-end de forma eficiente e escalável.

---

## 📌 Sobre a Aula
Nesta aula aprendemos a modularizar código JavaScript no Node.js, explorando as diferenças técnicas entre o sistema clássico (**CommonJS**) e o padrão moderno (**ES Modules - ESM**). Vimos como exportar e importar funções, além de simular variáveis globais como `__filename` e `__dirname` utilizando `import.meta.url`.

---

## 📁 Estrutura do Projeto

```text
aula02-modulos-commonjs-esm/
├── index.js        # Arquivo principal com lógica de logs usando ES Modules
├── utils.js        # Módulo com funções utilitárias (ex: formatLog)
├── syslog.log      # Arquivo de saída para registros de logs do sistema
├── package.json    # Configurações do projeto (com "type": "module")
└── README.md       # Documentação do projeto