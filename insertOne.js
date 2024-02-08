//InsertOne()
db.createCollection('books')
db.books.insertOne({
  title: "Deep Dive into React Hooks",
  ISBN: "000000000",
  thumbnailUrl: "",
  publicationDate: ISODate("2019-01-01T00:00:00.000Z"),
  authors: ["Ada Lovelace"],
});
/* {
  acknowledged: true,
  insertedId: ObjectId('65c3ae39b0031456d834f883')
} */
