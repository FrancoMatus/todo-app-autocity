// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// mongodb+srv://Franco:2711@cluster0.enz2c.mongodb.net/practicas?retryWrites=true&w=majority
const mongoose = require('mongoose');
const db = mongoose.connection;
const uri = "mongodb://localhost/todoapp"
function connectDB() {
    mongoose.connect(uri, {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    db.on('open', _ => {
        console.log('Database connected')
    });
    db.on('error', err => {
        console.log(err)
    }) 
}
connectDB();