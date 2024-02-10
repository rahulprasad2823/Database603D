//$push
db.podcasts.updateOne(
  {_id: ObjectId("6261a92dfee1ff300dc80bf1")},
  {$push: {hosts: "Nic Raboy"}}
);
/*{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}*/

//confirm
db.podcasts.findOne({title: "The Developer Hub"});
>>>null
