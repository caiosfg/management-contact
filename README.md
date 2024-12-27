<h1 align="center">
    <a href="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Google_Contacts_logo.png" alt="management-contact" width="30" height="24">
            management-contact
    </a>
</h1>
<p align="center">Gerencie seus contatos e seus grupos.</p>

<p align="center">
    <img src="https://img.shields.io/badge/nodedotjs-7F66B3?logo=nodedotjs"/>
    <img src="https://img.shields.io/badge/express-blue?logo=express"/>
    <img src="https://img.shields.io/badge/prisma-C40475?logo=prisma"/>
    <img src="https://img.shields.io/badge/docker-5742f5?logo=docker"/>
</p>

### Structure

- [x] Express ;
- [x] Prisma ;
- [x] Docker ;

### Requirements

1. Copie o `.env_example` e renomeie para `.env`;

2. Execute o comando abaixo:

   > `docker compose up`

3. Execute as migrations para criação das tabelas, dentro do container da api:

   > `npx prisma migrate dev`

4. a documentação da api se encontra em:
   > `http://localhost:3333/api-docs/`
