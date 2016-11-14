import mongo from './mongo';

export default data => {
  return mongo.then(db => {
    const collection = db.collection('things');
    return collection.findOne({
      'user': data.user,
      'things.name': data.thingName
    },
      {
        things: {$elemMatch: {'name': data.thingName}}
      })
  })
}