const router = require("express").Router();
const Message = require("../../models/Chat/Message");
const { verifyToken } = require("../UserRoute/verifyToken");

// Add a message
router.post("/", verifyToken, async (req, res) => {
  const newMessage = new Message(req.body);
  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// get a conversation
router.get("/:conversationId", verifyToken, async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err.message);
  }
});
module.exports = router;
