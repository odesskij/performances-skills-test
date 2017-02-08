# Install && Run
```bash
npm install
docker-compose up -d # MySQL
cp app.json.example app.json
node bin/cli schema:create # Create MySQL Schema
node bin/cli fixtures:load # Load test data
./node_modules/.bin/webpack --color --progress
pm2 start app.json
```

# API
```bash
curl "http://localhost:3000/api/performance?orderProp=date&orderBy=DESC"
curl "http://localhost:3000/api/performance?orderProp=date&orderBy=ASC"
```