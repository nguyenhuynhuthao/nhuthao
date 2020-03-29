let express = require('express');
let app = express();
let port = process.env.PORT || 9999;

app.get('/', ( req, res) => { res.send("Belloooo")})
// Browser will send request to server and if the URL is matches, server will return the response. 

app.listen(port), () => { console.log('I love you')} 
console.log('RESTful API server started on: ' + port);

// "npm i node -g" : Can edit anything and don't need to exit. After that, just CtrS to save it. 

// Remember to CtrS before run.

//"start": "nodemon server.js" : Ran by syntax: nnpm install 
