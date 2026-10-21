# ⚡ Aula 03: Streams e Buffers
> **UC:** Codificação para Back-End

Alta Performance no Processamento de Dados no Node.js.

---

## 📌 Sobre a Aula
Esta aula aborda o tratamento eficiente de dados em massa sem estourar o uso de memória RAM. Exploramos os conceitos de **Buffers** e **Streams** para manipular arquivos grandes dividindo-os em pequenos pedaços (*chunks*), permitindo o processamento contínuo e incremental.

---

## 📁 Estrutura do Projeto

```text
aula03-streams-buffers/
├── gerarLogGigante.js   # Script para simular/gerar um arquivo de log volumoso
├── processarLogs.js     # Script que faz a leitura/processamento via Streams
├── package.json         # Configurações e dependências do projeto
└── README.md            # Documentação do projeto