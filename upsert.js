//upsert
db.podcasts.updateOne(
  {title: "The Developer Hub"},
  {$set: {topics: ["databases", "MongoDB"]}},
  {upsert:true}
);
/* {
  acknowledged: true,
  insertedId: ObjectId('65c3b605893bf657c4621ab0'),
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 1
} */
