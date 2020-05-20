
require('dotenv').config();

// se recibe un modulo de la libreria del otro documento que ya importamos 
const app = require('./app');


require('./database');

async function main(){
   await  app.listen(app.get('port'));
  console.log('server on port', app.get('port'));
}

main();