const path = require('path');

const collectionsFolder = path.join(__dirname, '../seedData/collections/');

function sleep (ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// keep it static to have controll in future migrations to use save diffectory with new files
const files = ['users.json'];

module.exports = {

  async up (db, next) {
    const sleep = ms =>
      new Promise(res => {
        setTimeout(res, ms);
      });

    const myPromise = file =>
      sleep(2000).then(async () => {
        const data = require(collectionsFolder + file);
        if (!data) {
          return null;
        }
        const collectionName = file.split('.')[0];
        await db.collection(collectionName).insertMany(data);
      });

    await files.reduce(
      (p, x) =>
        p.then(_ => myPromise(x)),
      Promise.resolve()
    );

    next();
  },

  async down (db, next) {
    console.log('remove collections');
    for (let i = 0; i < files.length; i++) {
      const collectionName = files[i].split('.')[0];
      console.log('removing: ', collectionName);
      await db.collection(collectionName).drop();
    }
    next();
  }
};
