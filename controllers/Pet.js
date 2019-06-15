const utils = require('../utils/writer.js');
const Pet = require('../service/PetService');

module.exports.addPet = function addPet(req, res) {
  const body = req.swagger.params.body.value;
  Pet.addPet(body)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.deletePet = function deletePet(req, res) {
  const petId = req.swagger.params.petId.value;
  Pet.deletePet(petId)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.getPetById = function getPetById(req, res) {
  const petId = req.swagger.params.petId.value;
  Pet.getPetById(petId)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.updatePet = function updatePet(req, res) {
  const body = req.swagger.params.body.value;
  Pet.updatePet(body)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};
