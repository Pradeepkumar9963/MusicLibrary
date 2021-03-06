const express = require('express');
const  sequelize= require('./database');
const app = express();
const albumControl=require('./album-control')
const songControl=require('./songs-control')

app.use(express.json());

//app.post('/albums', artistControllers.create);
app.get('/albums', albumControl.list);
app.delete('/albums/:albumId', albumControl.deleteAlbum);
app.put('/albums/:albumId', albumControl.update);
app.get("/songs", songControl.list);



sequelize.sync().then(result=>{
  app.listen(3000,()=>console.log('Server RUnning on 3000'));
}).catch(err=>console.log(err));