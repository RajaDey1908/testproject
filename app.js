const express= require('express');
const body_parser =require('body-parser');
const express_handlebars= require('express-handlebars');
const path=require('path');
const app= express();


let userRoute=require('./routes/userRoute');
let userController=require('./controller/users');
//const adminControllers = require('../controllers/admins');

var urlencodedParser = body_parser.urlencoded({ extended: false });
app.use(body_parser.json()); 

app.engine(
    "handlebars",
    express_handlebars({
        extname: '.handlebars',
        defaultLayout: 'main',
        layoutsDir: path.join(__dirname,'views/theme'),
        partialsDir:path.join(__dirname,'views/includes')
    })
  );
app.set('view engine', 'handlebars');
app.set('view engine','handlebars');
//app.set('views', __dirname+'/views/');


app.use('/login', function(req, res){
    console.log("base");
    res.render('pages/login');
})

//app.post('/add', urlencodedParser, userController.add );
//app.post('/login',urlencodedParser, adminControllers.login)


app.post('/test', urlencodedParser, userController.add);


app.listen('4000', ()=>{
    console.log("server is running in port 4000");
})