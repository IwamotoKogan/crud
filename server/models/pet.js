'use strict';
module.exports = (sequelize, DataTypes) => {
  const pet = sequelize.define('pet', {
    name: 
    {
      type:DataTypes.STRING,
      allowNull:false
    },
    animal:
    {
      type:DataTypes.STRING,
      allowNull:false
    },

    age: DataTypes.STRING
  });

  pet.associate=(models)=>{
    pet.belongsTo(models.owner,{
      foreignKey:'ownerId',
      onDelete:'CASCADE'
    });
  }
  return pet;
};