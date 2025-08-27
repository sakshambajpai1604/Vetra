const mongoose = require('mongoose');
const dbgr = require("debug")("development:mongoose");

const uri = process.env.MONGODB_URI;

mongoose
.connect(`${uri}/scatch`)
.then(function(){
    dbgr("connected");
})
.catch(function(err){
    dbgr(err);
})

module.exports = mongoose.connection;