import { connect } from 'mongoose';

const MONGO_URI = process.env.MONGO_URI as string;

connect(MONGO_URI)
  .then(() => console.log('Connected to DB'))
  .catch((err) => {
    throw err;
  });
