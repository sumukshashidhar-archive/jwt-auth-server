docker build . -t sumukshashidhar/jwt-auth-api; 
docker run  --env-file .env -it -p 3000:3000 sumukshashidhar/jwt-auth-api;
