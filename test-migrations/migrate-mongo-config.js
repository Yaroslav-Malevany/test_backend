const mongodbUri = require('mongodb-uri');
const path = require('path');
/* istanbul ignore next */
const dotenv = require('dotenv-safe');
dotenv.config({
  path: path.join(__dirname, '../.env'),
  example: path.join(__dirname, '../.env.example')
});

/* istanbul ignore next */
const requireProcessEnv = (name) => {
  if (!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
};

const mongoUri = requireProcessEnv('MONGODB_URI');

const uriObject = mongodbUri.parse(mongoUri);

console.log('RUN MIGRATION FOR', mongoUri);

// In this file you can configure migrate-mongo

module.exports = {

  mongodb: {

    url: mongoUri,

    databaseName: uriObject.database,

    options: {
      useNewUrlParser: true // removes a deprecation warning when connecting
      //   connectTimeoutMS: 3600000, // increase connection timeout to 1 hour
      //   socketTimeoutMS: 3600000, // increase socket timeout to 1 hour
    }
  },

  // The migrations dir, can be an relative or absolute path. Only edit this when really necessary.
  migrationsDir: './test-migrations/migrations',

  // The mongodb collection where the applied changes are stored. Only edit this when really necessary.
  changelogCollectionName: 'changelog'

};
