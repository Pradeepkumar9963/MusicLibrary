const Sequelize = require('sequelize');
const sequilizeConnection  = require('./database');

const Artists = sequilizeConnection.define('artists',{id:{type:Sequelize.INTEGER,autoIncrement:true,primaryKey:true},
                                                     name:{type:Sequelize.STRING,unique:true},
                                                     year:{type:Sequelize.INTEGER},
                                                    });

module.exports = Artists;
