const owner = require('../models').owner;
const pet = require('../models').pet;
module.exports = {
  create(req, res) {
    return owner
      .create({
        name: req.body.name,
        surname:req.body.surname,
        address:req.body.address,
        email:req.body.email,
        phone:req.body.phone

      })
      .then(owner => res.status(201).send(owner))
      .catch(error => res.status(400).send(error));
  },
  list(req,res){
    return owner
    .findAll({
      include:[{
        model:pet,
        as:"pets",
      }]
    })
    .then(owners=>res.status(200).send(owners))
    .catch(error=>res.status(400).send(error))
  },

  retrieve(req,res){
    console.log(req.params.ownerId)
    return owner
      .findById(req.params.ownerId, {
        include: [{
          model:pet,
          as: 'pets',
        }],
      })
      .then(owner=>{
        console.log("owner:",owner)
        if(!owner){
          return res.status(404).send({
            message:"owner not found"
          });
        }
        return res.status(200).send(owner)
      })
      .catch(error=>res.status(400).send(error));
  }

};