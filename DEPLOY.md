# Instruções de Deploy da Aplicação

Bem-vindo às instruções de deploy da aplicação! Aqui você encontrará um guia passo a passo sobre como implantar a aplicação usando Docker e Docker Compose.

## Pré-requisitos

Antes de começar, é importante garantir que você tenha alguns pré-requisitos instalados em seu sistema:

- **Docker**: O Docker é essencial para a execução da aplicação em contêineres. Se ainda não o instalou, você pode fazer o download a partir do [site oficial do Docker](https://docs.docker.com/get-docker/).
- **Docker Compose**: O Docker Compose, que geralmente vem junto com o Docker Desktop, é necessário para orquestrar os contêineres. Para mais informações, consulte a [documentação do Docker Compose](https://docs.docker.com/compose/install/).

## Passos para Deploy

### 1. Clonar o Repositório

Primeiro, você precisa clonar o repositório da aplicação. Para isso, execute o seguinte comando:

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DA_PASTA>
```

### 2. Construir a Imagem Docker

Com o diretório do projeto configurado, o próximo passo é construir a imagem Docker. Para isso, use o comando:

```bash
docker-compose build
```

### 3. Iniciar os Serviços

Após a construção da imagem, você pode iniciar os serviços. Execute o comando abaixo para rodar os contêineres em segundo plano:

```bash
docker-compose up -d
```

### 4. Acessar a Aplicação

A aplicação agora deve estar rodando e acessível em `http://localhost:3000`. Basta abrir seu navegador e conferir se tudo está funcionando conforme o esperado.

### 5. Parar os Serviços

Se precisar parar os serviços a qualquer momento, use o comando:

```bash
docker-compose down
```

