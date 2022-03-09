const Sequelize = require('sequelize');
const sequilizeConnection  = require('./database');

const Album = sequilizeConnection.define('albums',{id:{type:Sequelize.INTEGER},
                                                     name:{type:Sequelize.STRING},
                                                     year:{type:Sequelize.INTEGER},
                                                    });

module.exports = Album;
