import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.Promise = global.Promise;

const connection = mongoose.connect(process.env.MONGODB_URI, {
  autoIndex: true,
  poolSize: 10,
  bufferMaxEntries: 0,
  keepAlive: 120,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.set('useCreateIndex', true);

connection
  .then((db) => db)
  .catch((err) => {
    console.log(`Eitcha! ${err}`);
  });

export default connection;
