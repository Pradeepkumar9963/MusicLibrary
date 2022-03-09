const Sequelize = require('sequelize');
const sequilizeConnection  = require('./database');

const Album = sequilizeConnection.define('albums',{id:{type:Sequelize.INTEGER,primaryKey:true,autoIncrement:true},
name:{type:Sequelize.STRING,unique:true},
year:{type:Sequelize.STRING}
                                                    });

module.exports = Album;
