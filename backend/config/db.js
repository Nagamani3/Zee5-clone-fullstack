const { connect } = require("mongoose");
const { MONGODB_URL_CLOUD, MONGODB_URL_LOCAL, NODE_ENV } = require('./index')
const {success,error,info}=require("consola")

exports.dbConnection = async () => {
    try {
        if (NODE_ENV === "development") {
          await connect(MONGODB_URL_LOCAL);
          success(`LOCAL MONGODB DATABASE CONNECTED ${NODE_ENV}  MODE `.bgRed.bold);
        } else {
          await connect(MONGODB_URL_CLOUD);
          success("CLOUD MONGODB DATABASE CONNECTED");
        }
        
    } catch (err) {
        error(err);    
    }
}; 
