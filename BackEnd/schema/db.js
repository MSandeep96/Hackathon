var mongoose = require('mongoose');

exports.db = mongoose.connect('mongodb://mahi:puzzle1@ds245680.mlab.com:45680/puzzle', (err, db) => {
    if (err) {
        console.log('err', err);

    }
    else { console.log('Connected') }
    	
});