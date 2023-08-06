import { db } from "./config.js";
import { MongoClient } from "mongodb";

export default async function connection() {
  try {
    const url = `mongodb+srv://${db.user}:${db.pass}@cluster0.rhimngz.mongodb.net/${db.dbname}`;
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    const client = await MongoClient.connect(url, options);
    return client.db();
  } catch (error) {
    return { status: 500, message: error };
  }
}
