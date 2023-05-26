app.get("/mongo-homePageTools", async (req, res) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    const tools = await homePageTools.find();

    // console.log("TOOLS : ",tools);
    res.send(tools); // Send an object containing both variables
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching tools data");
  }
});
///Done

//like tool
app.post("/likeHomePageTool/:id/:uid", async (req, res) => {
  let { id, uid } = req.params;
  try {
    await homePageTools.findByIdAndUpdate(id, {
      $addToSet: { LikedBy: uid },
    });
  } catch (error) {
    console.log(error);
  }

  console.log("tool has been liked successfully!!!!!");
});

//remove a user from a tool likedBy array
app.post("/unlikeHomePageTool/:id/:uid", async (req, res) => {
  let { id, uid } = req.params;
  try {
    const tool = await homePageTools.findById(id);
    // Remove the uid from the LikedBy array using the filter method
    const updatedLikedBy = tool.LikedBy.filter(
      (likedByUid) => likedByUid !== uid
    );
    // Update the tool document with the updated LikedBy array
    const updatedTool = await Tools.findByIdAndUpdate(id, {
      LikedBy: updatedLikedBy,
    });
    return res.send(updatedTool);
  } catch (error) {
    console.log(error);
  }
  console.log("tool has been unliked succefuly!!!!!");
});

// Add a Tool Comment
app.post(
  "/addHomeToolComment/:toolId/:userId/:commentText/:parentId",
  async (req, res) => {
    try {
      const { toolId, userId, commentText, parentId } = req.params;
      const newComment = await ToolsComments.create({
        text: commentText,
        userId: userId,
        toolId: toolId,
        parentId: parentId,
      });
      // assuming that `Tools` is the model for the tools collection
      const tool = await homePageTools.findById(toolId);
      tool.comments.push(newComment._id);
      await tool.save();
      res.status(201).json(newComment);
      console.log("comment added");
    } catch (err) {
      console.error(err);
      res.status(500).send("Error adding tool comment");
    }
  }
);

// LIKE A TOOL COMMENT
app.post("/likeToolComment/:toolCommentId/:userId", async (req, res) => {
  let { toolCommentId, userId } = req.params;
  try {
    await ToolsComments.findByIdAndUpdate(toolCommentId, {
      $push: { likedBy: userId },
    });
    console.log("Tool comment has been liked successfully!!!!!");
  } catch (error) {
    console.log(error);
  }
});

// UNLIKE A TOOL COMMENT
app.post("/unlikeToolComment/:toolCommentId/:userId", async (req, res) => {
  let { toolCommentId, userId } = req.params;
  try {
    const toolComment = await ToolsComments.findById(toolCommentId);
    // Remove the uid from the LikedBy array using the filter method
    const updatedLikedBy = toolComment.likedBy?.filter(
      (likedByUid) => likedByUid !== userId
    );
    // Update the tool document with the updated LikedBy array
    const updatedToolComment = await ToolsComments.findByIdAndUpdate(
      toolCommentId,
      {
        likedBy: updatedLikedBy,
      }
    );

    console.log("tool Comment has been unliked succefuly!!!!!");
    return res.send(updatedToolComment);
  } catch (error) {
    console.log(error);
  }
});
