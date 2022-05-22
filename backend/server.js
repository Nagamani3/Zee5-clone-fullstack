const express = require('express')
const {success,error,info} = require('consola')
const { dbConnection } = require("./config/db")
const { PORT, NODE_ENV } = require('./config')
const cors = require("cors");
const cookieparser = require('cookie-parser')
const morgan = require('morgan')
const colors = require('colors')
const authRoutes = require("./routes/auth")
const MovieRoute = require("./routes/movieRoute")
const {AuthSchema}= require('./models/auth')
const app = express();

let StartServer = async () => {
    //==================DATABASE CONNECTION===================//
    dbConnection();

    //=========middleware section=======//

    if (NODE_ENV === "development") {
        app.use(morgan('dev'))
    }
    app.use(express.json())
    app.use(cors());
    app.use(cookieparser());
    
//==========load all routes======//
    app.use("/api/auth", authRoutes);
    app.use("/movies",MovieRoute)

    //=============LISTEN PORT =========//
    app.listen(PORT, err => {
        if (err) throw err;
        info(`server is running on port number ${PORT}`.bgMagenta.bold);
    })
}
StartServer()