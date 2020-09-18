git stash; 
git pull; 
docker build . -t sumukshashidhar/jwt-auth-api; 
docker run  -e mongoURI="mongodb+srv://<username>:<pass>@cluster0.veayr.mongodb.net/<dbname>?retryWrites=true&w=majority" -it -p 3000:3000 sumukshashidhar/jwt-auth-api;
