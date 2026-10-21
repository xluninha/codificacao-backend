# 🔐 Aula 05: Variáveis de Ambiente e Configuração
> **UC:** Codificação para Back-End

Protegendo credenciais, separando ambientes e configurando aplicações Node.js de forma profissional e segura.

---

## 📌 Sobre a Aula
Esta aula foca nas boas práticas de segurança e configuração de projetos back-end. Aprendemos a evitar o uso de credenciais fixas no código (*hardcoded*), gerenciando dados sensíveis (como portas, chaves de API e conexões de banco de dados) por meio de variáveis de ambiente com arquivos `.env` e `.env.example`.

---

## 📁 Estrutura do Projeto

```text
aula05-variaveis-ambiente-config/
├── .env.example       # Modelo de variáveis de ambiente (sem dados sensíveis)
├── .gitignore         # Garante que o arquivo .env real não vá para o GitHub
├── app.js             # Aplicação principal consumindo process.env
├── package.json       # Dependências e scripts do projeto (ex: dotenv)
├── package-lock.json  # Mapeamento de versões das dependências
└── README.md          # Documentação da aula