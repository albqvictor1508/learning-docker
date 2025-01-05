## Subir imagem do banco de dados
docker run -d --name learning-docker-pg --network learning-docker-net -p 5433:5432 -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DB=learning-docker bitnami/postgresql

## Fazer a migration pro banco
npx prisma migrate dev

## Container do nginx 
docker run -d --name nginx-container -v front-volume:/var/www/html --network learning-docker-net -p 81:80 docker-nginx

## Front e Back
Na imagem do front ja tem os arquivo transpilados dentro de um volume na /var/www/html

No back também ja tem o código TS compilado dentro da imagem na porta 5000