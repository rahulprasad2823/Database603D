//updateMany()
db.books.updateMany(
  {publishedDate: {$lt: ISODate("2017-04-27T08:00:00.000+00:00")}},
  {$set: {status: "NEW"}}
);
/*{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
} */
