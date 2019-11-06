let express=require('express')
let bodyParser=require('body-parser')
let path=require('path')

let routes=require('./routes')
let app=express()


app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,'../public')))
app.use('/',routes)

module.exports=app