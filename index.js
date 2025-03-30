const express = require('express')
const router = require('./routes/route')
const app = express()


express.json() 
express.urlencoded({extended : true})

app.use(router)

app.listen(7005, () => {
    console.log('http://localhost:7005');
    
})