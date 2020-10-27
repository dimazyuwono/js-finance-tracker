// Imports
const mongoose = require('mongoose')

// Database connectivity
const connectMongo = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGOD_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    console.log(`Successfully connected to Mongo : ${conn.connection.host}`)

  } catch (err) {
    console.log(`Mongo connection Error : ${err.message} `);
    process.exit(1);
  }
}

module.exports = connectMongo;