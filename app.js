const express = require('express')
const app = express();
require('dotenv').config({ path: "./config.env" });
const mongoose= require('mongoose');
const bodyParser = require('body-parser')
const web=require('./routes/web')
const cors = require('cors')
const path = require('path')

console.log(process.env.DATABASE)
app.use(cors())

app.use(express.static(path.join(__dirname , '/public')))
//parser for req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
DATABASE = 'mongodb+srv://mongo:co1on3on58k87KBH@cluster0.3vetls5.mongodb.net/Company'
// static file configuration
app.use('/uploads',express.static(path.join(__dirname , 'uploads')))


//web routes
app.use('/company',web)

const connectDB = async () => {
try{
    await mongoose.connect(process.env.DATABASE,{ useNewUrlParser: true });
    console.log('MongoDB connected')
    const Port = process.env.PORT || 8000;
    const sever=app.listen(Port,() => {
        console.log(`Server Lishen on port ${Port}....`)
    })    
}catch(error){
    console.log(error)
}
}
try{
    connectDB();
}catch(error){
    console.log('Failed to connect to mongo DB')
}
if(process.env.NODE_ENV == "production"){
    app.use(express.static('clientSide/build'))
    app.get('*' ,(req,res) => {
        res.sendFile(path.resolve(__dirname,'clientSide' ,'build' ,'index.html'))
    } )
}