//update()
db.podcasts.updateOne(
  {title: "The Developer Hub"},
  {$set: {topics: ["databases", "MongoDB"]}}
);
/*{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}*/

//to confirm 
db.podcasts.findOne({title: "The Developer Hub"});
>>> Output: null
