docker run -d --name learning-docker-pg --network learning-docker-net -p 5433:5432 -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DB=learning-docker bitnami/postgresql

npx prisma migrate dev