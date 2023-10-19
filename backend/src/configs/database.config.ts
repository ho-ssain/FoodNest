import mongoose, { connect, ConnectOptions } from "mongoose";

mongoose.set("debug", true);

export const dbConnect = () => {
  connect(process.env.db_uri!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions).then(
    () => console.log("Databae connect Successfully!😇"),
    (error) => console.log(error)
  );
};
