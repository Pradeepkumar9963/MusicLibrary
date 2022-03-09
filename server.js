const api = require('./app');


sequelize.sync().then(result=>{
    api.listen(3000,()=>console.log('Server RUnning on 3000'));
  }).catch(err=>console.log(err));