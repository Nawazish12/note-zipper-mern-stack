const mongoose = require("mongoose");

require("colors");
const dbconnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGOO_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`mogodb conncected :${conn.connection.host}`.bgMagenta.white);
  } catch (error) {
    console.log(`error:${error}`.bgRed.white);
  }
};
module.exports = dbconnection;
