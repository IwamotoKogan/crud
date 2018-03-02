const ownerController = require('../controllers').owners;
const petController=require('../controllers').pets;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the petshop',
  }));
 
  app.post('/api/owners', ownerController.create);
  app.get('/api/owners', ownerController.list);
  app.post('/api/pets', petController.create);
  app.get('/api/pets', petController.list);
  app.get('/api/owners/:ownerId',ownerController.retrieve);
};