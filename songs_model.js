const Sequelize = require('sequelize');
const sequilizeConnection  = require('./database');

const songs = sequilizeConnection.define('songs',{id:{type:Sequelize.INTEGER,autoIncrement:true},
                                                     name:{type:Sequelize.STRING(250),primaryKey:true},
                                                     year:{type:Sequelize.INTEGER},
                                                     length:{type:Sequelize.TIME},
                                                    });

module.exports =songs;
