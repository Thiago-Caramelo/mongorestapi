const { mongodb } = require('./pool');

const addPet = async (pet) => {
  const result = await mongodb.collection('pet').insertOne(pet);
  return result.insertedId;
};

module.exports = {
  addPet,
};
