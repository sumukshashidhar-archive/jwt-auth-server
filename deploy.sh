git stash; 
git pull; 
docker build . -t sumukshashidhar/jwt-auth-api; 
docker run -it -p 3000:3000 -e mongoURI=mongodb+srv://<username>:<pass>@cluster0.veayr.mongodb.net/<dbname>?retryWrites=true&w=majority sumukshashidhar/jwt-auth-api;
