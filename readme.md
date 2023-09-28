# Firebreak solr search

Vite app with a Solr backend and nginx proxy to enable CORS.

## Running the app

1. Build the containers

```zsh
docker-compose up
```

2. Index the default data

```zsh
docker exec -it solr post -c search /var/solr/data/songs.json
```

3. Install frontend dependencies

```zsh
cd app
npm install
```

4. Start the frontend app
```zsh
npm run dev
```

The app should now be running on http://localhost:5173.