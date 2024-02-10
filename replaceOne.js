//replaceOne()
db.books.replaceOne(
  {_id: ObjectId("65c292b7dd77e720d30e243e")},
  {
    _id: ObjectId("65c292b7dd77e720d30e243e"),
    title: "Deep Dive into React Hooks",
    ISBN: "0-3182-1299-4",
    thumbnailUrl: "http://via.placeholder.com/640x360",
    publicationDate: ISODate("2022-07-28T02:20:21.000Z"),
    authors: ["Ada Lovelace"],
  }
);

db.books.replaceOne(
  {_id: ObjectId("65c292b7dd77e720d30e243e")},
  {
    title: "Deep Dive into React Hooks",
    ISBN: "0-3182-1299-6",
    thumbnailUrl: "http://via.placeholder.com/640x360",
    publicationDate: ISODate("2022-07-28T02:20:21.000Z"),
    authors: ["Ada Lovelace"],
  }
);

/* Output:
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}
*/


//findOne()
db.books.findOne({_id: ObjectId("65c3ae39b0031456d834f883")});
/*{
  _id: ObjectId('65c3ae39b0031456d834f883'),
  title: 'Deep Dive into React Hooks',
  ISBN: '000000000',
  thumbnailUrl: '',
  publicationDate: 2019-01-01T00:00:00.000Z,
  authors: [
    'Ada Lovelace'
  ]
}
*/
