# 📂 Aula 16: Validação de Schemas com Zod
> **UC:** Codificação para Back-End

Implementação da validação declarativa de dados na entrada da API NestJS utilizando a biblioteca `zod`, inferência automática de tipos com `z.infer` e criação de um `ZodValidationPipe` genérico para tratamento amigável de erros de validação.

---

## 📌 Sobre a Aula
Nesta aula exploramos a integração do módulo de **Validação de Schemas** no **NestJS**. O objetivo principal é garantir a defesa em profundidade, bloqueando dados malformatados na fronteira da API antes que alcancem as camadas de serviço ou banco de dados.

### **Conteúdos Abordados:**
* **Integração Declarativa:** Interceptação e validação de dados na entrada das rotas HTTP com schemas Zod.
* **Defesa em Profundidade:** Bloqueio de requisições inválidas na fronteira do sistema para evitar inconsistências.
* **Inferência de Tipos:** Derivação de tipos estáticos TypeScript com `z.infer<typeof schema>`, mantendo o código DRY.
* **Pipe Customizado:** Criação do `ZodValidationPipe` para transformação de erros Zod em respostas HTTP `400 Bad Request`.
* **Tratamento de Exceções:** Formatação limpa de respostas de erro sem expor detalhes da infraestrutura.

---

## 📁 Estrutura do Projeto

```text
aula16-validacao-zod/
├── src/
│   ├── colaborador.schema.ts      # Definição do schema Zod e tipo inferido
│   ├── zod-validation.pipe.ts     # Pipe customizado de validação Zod
│   ├── colaboradores.controller.ts # Controller com vinculação do pipe
│   ├── app.module.ts              # Módulo principal
│   └── main.ts                    # Bootstrap com app.setGlobalPrefix('api')
├── nest-cli.json
├── tsconfig.json
├── package.json                   # Dependências (zod, @nestjs/common, etc.)
└── README.md                      # Documentação da aula