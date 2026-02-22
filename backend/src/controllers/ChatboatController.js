const ChatboatService = require("../services/ChatbotService.js");

class ChatboatController {
  // 1. For Home Page (Generic Chat)
  async simpleChat(req, res) {
    try {
      // Frontend se "prompt" key mein data aa raha hai
      const message = req.body.prompt;

      if (!message) {
        return res.status(400).json({ error: "Message prompt is required" });
      }

      // Naye service ke hisaab se seedha string pass karna hai
      const data = await ChatboatService.chatService(message);

      // Frontend UI ko is exact format ki zaroorat hai render karne ke liye
      return res.status(200).json({
        message: data,
        role: "ai",
      });
    } catch (error) {
      console.error("Simple Chat Error:", error);
      return res.status(500).json({ error: error.message });
    }
  }

  // 2. For Product Details Page
  async askProductQuestionController(req, res) {
    try {
      const { productId } = req.params;
      const { question } = req.body;

      if (!question) {
        return res.status(400).json({ message: "Question is required" });
      }

      const answer = await ChatboatService.askProductQuestion(
        productId,
        question,
      );

      // Ye frontend slice ke mutabik ekdum sahi hai (response.data.answer)
      res.status(200).json({ answer });
    } catch (error) {
      console.error("Controller Error:", error);
      res.status(500).json({
        message: "Something went wrong while processing the question",
      });
    }
  }
}

module.exports = new ChatboatController();
