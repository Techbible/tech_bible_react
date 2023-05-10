const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const Tools = require("./models/Tool");

const uri =
  "mongodb+srv://techbible:nRgcJ2M8O6DRoznj@techbible.eggj9te.mongodb.net/techbible";

// Connect to the database and fetch the tools data on startup

// Define your routes here
app.get("/mongo-tools", async (req, res) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    const tools = await Tools.find();
    console.log("Tools:", tools);
    res.send(tools);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching tools data");
  }
});

app.post("/update/:id/:uid", async (req, res) => {
  let { id, uid } = req.params;
  try {
    await Tools.findByIdAndUpdate(id, {
      LikedBy: { ...uid },
    });
  } catch (error) {
    console.log(error);
  }
  console.log("tool has been liked succefuly!!!!!");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
