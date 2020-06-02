Backend da aplicação do primeiro NLW da Rocketseat.

Construido em Typescript, usando Express e Knex, e adicionando os módulos de segurança Cors e Helmet, a API RESTful está pronta

Rotas:

- '/items', GET
- '/points', GET
- '/points', POST
- '/points/id', GET

Migrations:

yarn knex:migrate

Seeds:

yarn knex:seed

Run (development):

yarn dev
