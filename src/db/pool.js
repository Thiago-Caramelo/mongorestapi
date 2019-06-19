const debug = require('debug')('pet:mongo');
const { MongoClient, Db } = require('mongodb');

const url = 'mongodb://localhost:27017';
let mongodb = Db.prototype;

MongoClient.connect(url, {
  poolSize: 10,
  useNewUrlParser: true,
}).then((client) => {
  mongodb = client.db('pet');
}).catch((error) => {
  debug(error);
  process.exit(error.code || -1);
});

module.exports = {
  mongodb,
};
