## Subir imagem do banco de dados
docker run -d --name learning-docker-pg --network learning-docker-net -p 5433:5432 -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DB=learning-docker bitnami/postgresql

## Fazer a migration pro banco
npx prisma migrate dev