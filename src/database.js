const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.uho69.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));