'use strict';
module.exports = (sequelize, DataTypes) => {
  const owner = sequelize.define('owner', {
    name: {
      type:DataTypes.STRING,
      allowNull:false},

    surname: {
      type:DataTypes.STRING,
      allowNull:false},
      
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  });

  owner.associate=(models)=>{
    owner.hasMany(models.pet,{
      foreigKey:'ownerId', 
      as:'pets'
    })
  }

  return owner;
};