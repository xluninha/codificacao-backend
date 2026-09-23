# 🖼️ Aula 11: Fluxo de Imagem e Mídia (Upload com Multer)
> **UC:** Codificação para Back-End

Implementação do fluxo de manipulação e envio de arquivos (upload de mídias) em APIs NestJS utilizando o interceptor `FileInterceptor`, armazenamento em disco com `diskStorage`, geração de identificadores únicos via `uuid`, validação de extensões e limites de tamanho.

---

## 📌 Sobre a Aula
Nesta aula exploramos a integração do módulo de **Upload de Arquivos** no **NestJS**. O objetivo principal é garantir o envio seguro de imagens para o servidor, aplicando validações no tipo de arquivo, limitação de tamanho e nomenclatura única para evitar sobrescrita de mídias.

### **Conteúdos Abordados:**
* **Interceptores de Arquivo:** Uso do `@UseInterceptors()` com `FileInterceptor` para captura de formulários do tipo `multipart/form-data`.
* **Persistência em Disco:** Configuração do `diskStorage` do Multer para salvamento de mídias na pasta `./uploads`.
* **Identificadores Únicos:** Uso do pacote `uuid` (`v4`) associado com `extname` para renomear arquivos de forma aleatória e segura.
* **Filtro de Arquivos e Limites:** Restrição de tipos permitidos por Expressão Regular (`mimetype`) e limite máximo de tamanho (`fileSize: 2MB`).
* **Tratamento de Exceções:** Retorno de erro `400 Bad Request` em caso de envio de formatos inválidos ou requisições sem arquivo.

---

## 📁 Estrutura do Projeto

```text
aula11-fluxo-imagem-midia/
├── src/
│   ├── controllers/
│   │   └── midia.controller.ts    # Rota e configurações do upload de mídia
│   ├── app.controller.ts
│   ├── app.module.ts               # Registo do MidiaController
│   ├── app.service.ts
│   └── main.ts                     # Bootstrap com app.setGlobalPrefix('api')
├── uploads/                        # Diretorio de armazenamento de imagens
├── nest-cli.json
├── tsconfig.json
├── package.json                    # Dependências (@types/multer, uuid, etc.)
└── README.md                       # Documentação da aula