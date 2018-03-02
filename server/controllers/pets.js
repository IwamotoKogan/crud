const pet=require('../models').pet;

module.exports={
    create(req,res){
        return pet
        .create({
            name:req.body.name,
            animal:req.body.animal,
            age:req.body.age, 
            ownerId:req.body.ownerId
        })
        .then(pet => res.status(201).send(pet))
        .catch(error => res.status(400).send(error));
    },
    list(req,res){
        return pet
        .all()
        .then(pets=>res.status(200).send(pets))
        .catch(error=>res.status(400).send(error))
      }

}