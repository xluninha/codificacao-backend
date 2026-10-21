🦁 Aulas 08 e 09: Route Handlers (GET, POST, PATCH, DELETE) & DTOs
UC: Codificação para Back-End

Aprofundamento no ecossistema NestJS, implementação de rotas HTTP (CRUD completo), transferência de dados com DTOs e organização modular por camadas.

📌 Sobre as Aulas
Nestas aulas avançamos na construção de APIs RESTful com o NestJS. Exploramos a criação de rotas para leitura, criação, atualização parcial e remoção de dados, aplicando a separação de responsabilidades com Controllers, Services e DTOs, além de tratar exceções HTTP e ajustar a suíte de testes unitários.

Conteúdos Abordados:
Aula 08: Mapeamento de rotas @Get() e @Post(), leitura de @Param(), uso de DTOs para validação de payload e injeção de dependências no AppModule.

Aula 09: Atualização parcial com @Patch(), remoção com @Delete(), definição de códigos de status com @HttpCode(204) e lançamento de exceções com NotFoundException.

📁 Estrutura do Projeto
Plaintext
aula08-09-route-handlers/
├── src/
│   ├── controllers/
│   │   ├── app.controller.spec.ts   # Testes unitários do controller principal
│   │   └── convidados.controller.ts # Handlers de rota (GET, POST, PATCH, DELETE)
│   ├── dto/
│   │   ├── create-convidado.dto.ts  # Estrutura do DTO de criação
│   │   └── create-convidado.spec.ts # Testes unitários do DTO
│   ├── services/
│   │   ├── convidados.service.ts    # Lógica de negócio e dados em memória
│   │   └── convidado.service.spec.ts# Testes unitários do serviço
│   ├── app.controller.ts            # Controller base da aplicação
│   ├── app.module.ts                # Módulo raiz com os controllers e providers registrados
│   ├── app.service.ts               # Serviço base da aplicação
│   └── main.ts                      # Ponto de entrada da aplicação (bootstrap)
├── nest-cli.json                    # Configurações da CLI do NestJS
├── tsconfig.json                    # Configurações do compilador TypeScript
├── package.json                     # Dependências e scripts do projeto (ES Modules ativo)
└── README.md                        # Documentação das aulas