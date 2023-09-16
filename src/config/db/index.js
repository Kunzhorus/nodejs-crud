const mongoose = require('mongoose');
async function connect() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/Education');
        console.log('Success connect to DB');
    } catch(error){
        console.log('fail');
    }
    
}

module.exports = {connect}; 