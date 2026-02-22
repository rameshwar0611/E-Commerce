# 🛒 Next-Gen E-Commerce Platform with AI Assistant

A modern, full-stack e-commerce web application built using the MERN stack. This platform goes beyond standard shopping features by integrating a context-aware Artificial Intelligence shopping assistant that provides real-time, personalized recommendations to users.

## 🚀 Key Features

- **Full-Stack MERN Architecture:** Developed a scalable backend REST API using Node.js and Express.js, seamlessly connected to a responsive React.js frontend.
- **Smart AI Integration (Google Gemini):** Engineered a dynamic AI chatbot using the `@google/genai` SDK that actively reads the user's Redux cart state to offer context-aware product recommendations and promotional offers.
- **Secure Authentication:** Implemented robust user authentication and authorization using JSON Web Tokens (JWT) and secure password hashing.
- **Advanced State Management:** Utilized Redux Toolkit (Thunks, Slices) to efficiently manage complex global states, including cart operations, user sessions, and asynchronous AI chat histories.

## 💻 Tech Stack

- **Frontend:** React.js, Redux Toolkit, TypeScript, Material-UI (MUI), Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **AI Integration:** Google Gemini 2.5 Flash API
- **Tools:** Axios, Git, Postman

## 🤖 The AI Shopping Assistant

The standout feature of this application is the custom-built AI Chatbot. Unlike generic bots, this assistant features:

- **Context Injection:** It knows exactly what is in the user's cart and suggests complementary products.
- **Dynamic Prompting:** Configured with a specific "Store Assistant" persona and optimized temperature settings for natural, non-repetitive conversational flows.
- **Error Handling:** Gracefully handles API rate limits (429 Status Codes) without breaking the UI.

## 🛠️ Local Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/rameshwar0611/E-Commerce.git](https://github.com/rameshwar0611/E-Commerce.git)

   ```

2. **Install Backend Dependencies:**

   cd backend
   npm install

3. **Install Frontend Dependencies:**

   cd frontend
   npm install

4. **Environment Variables:**
   Create a .env file in the backend directory and add the following:

   PORT=8080
   MONGO_URI=
   SECERET_KEY=
   EMAIL_USER=
   EMAIL_PASS=
   RAZORPAY_KEY_ID =
   RAZORPAY_KEY_SECRET =
   STRIPE_SECRET_KEY=
   GEMINI_API_KEY=

5. **Run the Application:**

   Start the backend server: npm run dev
   Start the frontend application: npm run dev
