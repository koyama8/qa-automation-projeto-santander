# QA Automation - Projeto Santander

[![Cypress](https://img.shields.io/badge/Cypress-14.1.0-17202C?logo=cypress&logoColor=white)](https://www.cypress.io/)
[![Cucumber](https://img.shields.io/badge/Cucumber-BDD-23D96C?logo=cucumber&logoColor=white)](https://cucumber.io/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![API](https://img.shields.io/badge/API-Testing-005571?logo=trello&logoColor=white)](https://api.trello.com/)
[![Bruno](https://img.shields.io/badge/Bruno-API%20Client-F4AA41)](https://www.usebruno.com/)

Projeto desenvolvido para um desafio técnico de QA Automation, com cenários BDD para testes web e de API.

## Visão geral

| Camada | Alvo | Cobertura | Resultado local |
| --- | --- | --- | --- |
| Web | Automation Exercise | 4 cenários E2E | 4 passando |
| API | Trello | 1 cenário automatizado | 1 passando |
| Bruno | Trello | 1 requisição e 2 testes | 2 passando |

## Objetivo

Automatizar os fluxos principais do site [Automation Exercise](https://www.automationexercise.com) e validar uma consulta pública na API do Trello.

## Cobertura dos testes

### Web

- Login de usuário
- Busca de produto
- Inclusão de produto no carrinho
- Validação do produto no checkout e na tela de pagamento
- [Consultar cenários BDD web](apps/web/cypress/e2e/features/)

### API

- Requisição `GET` para uma ação do Trello
- Validação do status code `200`
- Validação do campo `data.list.name` com o valor `Professional`
- Validação básica do contrato da resposta
- [Consultar cenário BDD da API](apps/api/cypress/e2e/features/trello.feature)

## Tecnologias

- JavaScript
- Cypress
- Cucumber / Gherkin
- cypress-plugin-api
- Bruno
- Node.js e npm

### Decisões técnicas

- Cenários de negócio escritos em Gherkin e implementados em step definitions JavaScript
- Projetos web e API separados para instalação e execução independentes
- Comando customizado de login centralizado na pasta `support`
- Credenciais locais protegidas pelo `.gitignore`

## Estrutura do projeto

```text
qa-automation-projeto-santander/
|-- apps/
|   |-- web/
|   |   |-- cypress/e2e/features/
|   |   |-- cypress/e2e/step_definitions/
|   |   `-- cypress/support/
|   `-- api/
|       |-- cypress/e2e/features/
|       |-- cypress/e2e/step_definitions/
|       `-- cypress/support/
|-- bruno/
|   `-- QA Automation - Projeto Santander/
|-- .gitignore
`-- README.md
```

## Pré-requisitos

- Node.js 20 ou superior
- npm
- Git
- Bruno, opcional para executar a coleção de API

## Instalação

Clone o repositório:

```bash
git clone https://github.com/koyama8/qa-automation-projeto-santander.git
cd qa-automation-projeto-santander
```

Instale as dependências de cada projeto a partir dos arquivos de lock:

```bash
cd apps/web
npm ci

cd ../api
npm ci
```

## Configuração do teste web

Na pasta `apps/web`, copie o arquivo de exemplo e informe as credenciais de uma conta de teste válida do Automation Exercise:

```powershell
Copy-Item cypress.env.example.json cypress.env.json
```

```json
{
  "email": "usuario.teste@example.com",
  "senha": "senha-da-conta-de-teste"
}
```

> [!IMPORTANT]
> O arquivo `cypress.env.json` contém dados locais, está protegido pelo `.gitignore` e não deve ser enviado ao repositório.

## Execução dos testes

### Web — modo headless

```bash
cd apps/web
npm test
```

### Web — modo interativo

```bash
cd apps/web
npm run cy:open
```

### API — modo headless

```bash
cd apps/api
npm test
```

### API — modo interativo

```bash
cd apps/api
npm run cy:open
```

## Coleção Bruno

No Bruno, abra a [coleção do projeto](<bruno/QA Automation - Projeto Santander/>) ou selecione a pasta:

```text
bruno/QA Automation - Projeto Santander
```

A requisição `API-001 - Consultar ação do Trello` valida o status code e o campo `data.list.name`.
