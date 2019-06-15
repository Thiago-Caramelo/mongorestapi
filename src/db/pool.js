const { MongoClient, Db } = require('mongodb');

const url = 'mongodb://localhost:27017';
let mongodb = Db.prototype;

const init = async () => {
  try {
    const mongoClient = await MongoClient.connect(url, {
      poolSize: 10,
    });
    mongodb = mongoClient.db('pet');
  } catch (error) {
    process.exit(-1);
  }
};
init();

module.exports = {
  mongodb,
};
