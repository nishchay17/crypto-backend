import mongoose from "mongoose";

function DbLoader() {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(
      () => {
        console.log("Connected to DB");
      },
      (err) => {
        console.log("Error in connecting to DB" + err);
      }
    );
}

export default DbLoader;
