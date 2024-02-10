//to find
db.podcasts.findOne({title: "The MongoDB Podcast"});
db.podcasts.findOne({_id: ObjectId("6261a92dfee1ff300dc80bf1")});

/* {
  _id: ObjectId('6261a92dfee1ff300dc80bf1'),
  title: 'The MongoDB Podcast',
  platforms: [
    'Apple Podcasts',
    'Spotify'
  ],
  year: 2022,
  hosts: [],
  premium_subs: 4152,
  downloads: 2,
  podcast_type: 'audio'
} */

//to set the array
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
