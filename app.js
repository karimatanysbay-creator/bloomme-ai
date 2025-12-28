const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>BloomMe AI</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
          background: linear-gradient(135deg, #ffe6f0, #fff);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .card {
          background: white;
          padding: 40px;
          border-radius: 24px;
          text-align: center;
          box-shadow: 0 20px 40px rgba(255, 105, 180, 0.2);
          max-width: 360px;
        }
        h1 {
          color: #ff4f9a;
          margin-bottom: 10px;
        }
        p {
          color: #555;
          font-size: 15px;
        }
        button {
          margin-top: 20px;
          background: #ff4f9a;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 999px;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>BloomMe 🌸</h1>
        <p>
          Upload a photo — BloomMe will suggest makeup styles that match your skin tone and vibe.
        </p>
        <button>Upload photo</button>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log("BloomMe AI running on port", PORT);
});
