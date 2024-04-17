const mongoose = require('mongoose');

const connectdb = async()=>{

    await mongoose.connect("mongodb+srv://Sana:fRR5WaYfojskBJ4N@cluster0.w7osevc.mongodb.net/")
    .then(() => {
        console.log("Connect to DB")

        // Start the server
    })
    .catch((err) => console.log(err))
}

module.exports = connectdb;