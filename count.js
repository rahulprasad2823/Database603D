//use sample_training
//switched to db sample_training
db.trips.countDocuments();
>>> 10000
//for counting trip duration more than 12o and subsriber
db.trips.countDocuments({tripduration: {$gt: 120}, usertype: "Subscriber"});
>>> 7847
