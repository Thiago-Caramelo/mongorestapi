const Pet = require('../service/PetService');

module.exports.addPet = function addPet(req, res) {
  const body = req.swagger.params.body.value;
  Pet.addPet(body)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};

module.exports.deletePet = function deletePet(req, res) {
  const petId = req.swagger.params.petId.value;
  Pet.deletePet(petId)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};

module.exports.getPetById = function getPetById(req, res) {
  const petId = req.swagger.params.petId.value;
  Pet.getPetById(petId)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};

module.exports.updatePet = function updatePet(req, res) {
  const body = req.swagger.params.body.value;
  Pet.updatePet(body)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};
