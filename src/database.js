const mongoose = require('mongoose');

// const MONGODB_URI = 'mongodb://localhost/notes-app';

const MONGODB_URI = 'mongodb+srv://'+process.env.MONGODB_USER+':'+process.env.MONGODB_PASSWORD+'@'+process.env.MONGODB_HOST+'/'+process.env.MONGODB_DATABASE+'?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(db => console.log("Mongodb is connected to", db.connection.host))
.catch(err => console.log(err));