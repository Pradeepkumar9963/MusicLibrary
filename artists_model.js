const Sequelize = require('sequelize');
const sequilizeConnection  = require('./database');

const Artists = sequilizeConnection.define('artists',{id:{type:Sequelize.INTEGER,autoIncrement:true},
                                                     name:{type:Sequelize.STRING,primaryKey:true},
                                                     year:{type:Sequelize.INTEGER},
                                                    });

module.exports = Artists;
