# 📂 Aula 17: Documentação Técnica com Swagger
> **UC:** Codificação para Back-End

Transformando a API em um produto interativo com a especificação OpenAPI e o ecossistema `@nestjs/swagger`.

---

## 📌 Sobre a Aula
Nesta aula exploramos a integração do módulo de **Documentação Técnica** com **Swagger** no **NestJS**. O objetivo principal é transformar a API em um produto interativo e autoexplicativo para equipes de Front-End, Mobile e parceiros integradores, eliminando adivinhações sobre payloads e reduzindo falhas de integração.

### **Conteúdos Abordados:**
* **Instalação Oficial:** Configuração do pacote `@nestjs/swagger` no projeto NestJS.
* **Mapeamento `/docs`:** Setup do `DocumentBuilder` e `SwaggerModule` no `main.ts` para disponibilizar a interface gráfica.
* **Decoração do Controller:** Agrupamento de rotas com `@ApiTags()`, descrição de rotas com `@ApiOperation()` e definição de respostas HTTP com `@ApiResponse()`.
* **Exemplos no DTO:** Documentação de atributos do DTO com `@ApiProperty()` contendo descrições e exemplos realistas.
* **Testes Interativos:** Validação dos endpoints diretamente pelo navegador usando o recurso "Try it out".

---

## 📁 Estrutura do Projeto

```text
aula17-documentacao-com-swagger-nestjs/
├── node_modules/
├── src/
│   ├── produtos/
│   │   ├── dto/
│   │   │   └── criar-produto.ts
│   │   ├── produto/
│   │   │   └── produto.controller.ts
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── nest-cli.json
├── tsconfig.json
├── package.json
└── README.md