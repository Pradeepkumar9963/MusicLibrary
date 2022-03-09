const Sequelize = require('sequelize');
const sequilizeConnection  = require('./database');

const songs = sequilizeConnection.define('songs',{id:{type:Sequelize.INTEGER,autoIncrement:true,primaryKey:true},
                                                     name:{type:Sequelize.STRING(250),unique:true},
                                                     year:{type:Sequelize.INTEGER},
                                                     length:{type:Sequelize.TIME},
                                                    });

module.exports =songs;
