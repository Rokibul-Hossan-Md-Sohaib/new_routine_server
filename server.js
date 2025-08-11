
// const { MongoClient, ServerApiVersion } = require('mongodb');

// const uri = "mongodb+srv://routine:D3WTloh6TUy2tmHX@cluster0.khs79a8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     await client.connect();
//     await client.db("admin").command({ ping: 1 });
//     console.log("✅ Successfully connected to MongoDB!");
//   } catch (err) {
//     console.error("❌ MongoDB connection failed:", err);
//   } finally {
//     await client.close();
//   }
// }

// run();
