const db = require('../db');
/**
 * Add a new pet to the store
 *
 *
 * body Pet Pet object that needs to be added to the store
 * no response value expected for this operation
 * */
exports.addPet = function addPet(pet) {
  return db.addPet(pet);
};


/**
 * Deletes a pet
 * 
 *
 * petId Long Pet id to delete
 * no response value expected for this operation
 * */
exports.deletePet = function (petId) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 * Find pet by ID
 * Returns a single pet
 *
 * petId Long ID of pet to return
 * returns Pet
 * */
exports.getPetById = function (petId) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "photoUrls": ["photoUrls", "photoUrls"],
      "name": "doggie",
      "id": 0,
      "category": {
        "name": "name",
        "id": 6
      },
      "tags": [{
        "name": "name",
        "id": 1
      }, {
        "name": "name",
        "id": 1
      }],
      "status": "available"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing pet
 * 
 *
 * body Pet Pet object that needs to be added to the store
 * no response value expected for this operation
 * */
exports.updatePet = function (body) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};
