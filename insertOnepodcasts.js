//insertOne()- podcasts
db.podcasts.insertOne({
  _id: ObjectId("6261a92dfee1ff300dc80bf1"),
  title: "The MongoDB Podcast",
  platforms: ["Apple Podcasts", "Spotify"],
  year: 2022,
  hosts: [],
  premium_subs: 4152,
  downloads: 2,
  podcast_type: "audio",
});

/* {
  acknowledged: true,
  insertedId: ObjectId('6261a92dfee1ff300dc80bf1')
}
*/
