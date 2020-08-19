# Test Backend

A RESTful API for the TWS test.
 
See the API's [documentation](DOCS.md).

## Commands

Commands available in `package.json`.

```bash
npm test # test using Jest
npm run coverage # test and open the coverage report in the browser
npm run lint # lint using ESLint
npm run dev # run the API in development mode
npm run prod # run the API in production mode
npm run docs # generate API docs
npm run migrate # run migrations to seed the data to db
```

## Playing locally

First, you will need to install and run [MongoDB](https://www.mongodb.com/) in another terminal instance.

```bash
$ mongod
```

Then, run the server in development mode.

```bash
$ npm install
$ npm run migrate
$ npm run dev
Express server listening on http://0.0.0.0:9000, in development mode
```

## Test AC:
- You should create a simple UI (design doesn't matter) for this REST API using React / Redux / Redux-Saga. 
- This interface should implement a fully working CRUD system.
- You can use any UI libraries.
- Yor complete solution should be available as public git-hub repo.
- Yor solution must be unique.
