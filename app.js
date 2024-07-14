const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDB = require('./db/connectDB')
const bodyParser=require("body-parser")
const fileUpload = require("express-fileupload");
const API = require('./routes/api')
const cookieParser = require('cookie-parser')
const cors=require('cors')


app.use(cors())
// //bodyparse
// app.use(bodyParser.urlencoded({extended:false}))
// // app.use(express.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

dotenv.config({
    path: '.env'
})

app.use(cookieParser())

app.use(fileUpload({useTempFiles: true}));

app.use(express.json())

//localhost:5000/api/pn/
app.use('/api/pn',API)
//app.user('/',web)

connectDB()

  







app.listen(process.env.PORT, () => {
console.log(`localhost:${process.env.PORT}`)
})








// const express = require('express')
// const app = express()
// const dotenv = require('dotenv')
// const connectDB = require('./db/connectDB')
// const API = require('./routes/api')



// app.use(express.json())
// app.use(express.urlencoded({ extended: true }));








// dotenv.config({
//     path: '.env'
// })

// app.use('/api',API)

// connectDB()


// app.listen(process.env.PORT, () => {
// console.log(`localhost:${process.env.PORT}`)
// })



