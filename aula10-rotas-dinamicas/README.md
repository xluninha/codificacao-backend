# 🦁 Aula 10: Dynamic Routes (Rotas Dinâmicas)
> **UC:** Codificação para Back-End

Implementação de rotas dinâmicas em APIs NestJS, utilização de placeholders na URL, extração de parâmetros com o decorador `@Param()`, conversão explícita de tipos e tratamento de erros com `NotFoundException`.

---

## 📌 Sobre a Aula
Nesta aula exploramos o conceito de **Rotas Dinâmicas** com o **NestJS**. Em aplicações reais, criar rotas estáticas para cada recurso é inviável. Com o uso de placeholders (`:param`), conseguimos reutilizar o mesmo handler do Controller para consultar e manipular registros individualizados no acervo.

### **Conteúdos Abordados:**
* **Sintaxe de Placeholders:** Declaração de parâmetros dinâmicos nas rotas através do decorador `@Get(':id')`.
* **Captura de Parâmetros:** Extração do parâmetro dinâmico da URL com `@Param('id')`.
* **Conversão de Tipos:** Conversão do valor recebido (que chega sempre como `string`) para `number` utilizando o operador unário `+id`.
* **Tratamento de Exceções:** Lançamento de `NotFoundException` para retornar o código `404 Not Found` caso o livro consultado não exista no acervo.

---

## 📁 Estrutura do Projeto

```text
aula10-rotas-dinamicas/
├── src/
│   ├── controllers/
│   │   └── livros.controller.ts     # Handler da rota dinâmica (/livros/:id)
│   ├── services/
│   │   └── livros.service.ts        # Acervo em memória e busca por ID
│   ├── app.controller.ts
│   ├── app.module.ts                # Registo do LivrosController e LivrosService
│   ├── app.service.ts
│   └── main.ts                      # Bootstrap da aplicação NestJS
├── nest-cli.json
├── tsconfig.json
├── package.json                     # Configuração do projeto e dependências
└── README.md                        # Documentação da aula