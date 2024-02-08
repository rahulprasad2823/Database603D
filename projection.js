//projection
//to find restaurants-----
db.restaurants.findOne({borough: "Brooklyn"});
>>> null
//to project
db.restaurants.findOne({borough: "Brooklyn"}, {cuisine: 1, zipcode: 1});
>>> null
//for neglecting id - exclusion
db.restaurants.findOne({borough: "Brooklyn"}, {cuisine: 0, zipcode: 0, _id: 0});
>>> null
//exclusion
db.restaurants.findOne({borough: "Brooklyn"}, {cuisine: 1, zipcode: 1, _id: 0});
>>> null
