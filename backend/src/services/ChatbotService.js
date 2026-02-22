require("dotenv").config();
const fs = require("fs");
const ProductService = require("./ProductService");

class ChatboatService {
  // 1. Generic Chatbot Service (For Home Page)
  // 1. Generic Chatbot Service (For Home Page)
  async chatService(userPrompt) {
    try {
      const { GoogleGenAI } = await import("@google/genai");
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

      // Creating a System Prompt to give the AI context about your website
      const promptWithContext = `
        You are a helpful, polite, and smart shopping assistant for our E-Commerce website. 
        Your job is to help customers find products, give recommendations, and answer shopping-related questions.
        
        Our store currently has these main categories and products:
        1. Electronics: Smartphones (iPhone, Samsung), Laptops (MacBooks, Dell), and Headphones (Sony).
        2. Men's Fashion: T-shirts, Jeans, Sports Shoes, and Formal Wear.
        3. Women's Fashion: Kurtas, Sarees, Western Wear, High Heels, and Beauty products (Lipstick).
        4. Home & Furniture: Solid Wood Beds, L-Shape Sofas, Wardrobes, Bedsheets, and Wall Clocks.

        Guidelines:
        - Keep your answers concise, friendly, and strictly related to our store. 
        - If a user asks what they should buy or wants a recommendation, confidently suggest some popular items from the categories above.
        - Do not act like a generic AI. Act like an employee of this specific store.

        Customer's Message: "${userPrompt}"
        Your Answer:
      `;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: promptWithContext,
      });

      console.log("AI Generic Response: ", response.text);
      return response.text;
    } catch (error) {
      console.error("AI Error:", error);
      throw new Error("Failed to generate AI response.");
    }
  }

  // 2. Product-Specific Chatbot Service (For Product Details Page)
  async askProductQuestion(productId, userQuestion) {
    try {
      const product = await ProductService.findProductById(productId);

      if (!product) {
        return "Sorry, the product you're asking about does not exist.";
      }

      const productDetails = JSON.stringify(product);

      const { GoogleGenAI } = await import("@google/genai");
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

      const prompt = `
        You are a helpful and polite E-Commerce assistant. 
        Answer the customer's question based ONLY on the product details below.

        --- PRODUCT DETAILS ---
        ${productDetails}
        -----------------------

        Question: ${userQuestion}
        Answer:
      `;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      console.log("AI Product Response: ", response.text);
      return response.text;
    } catch (error) {
      console.error("AI Error:", error);
      throw new Error("Failed to generate product AI response.");
    }
  }
}

module.exports = new ChatboatService();
