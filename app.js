const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>BloomMe AI</title>
<style>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #ffe6f0, #fff);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  width: 360px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  text-align: center;
}

h1 {
  color: #d63384;
}

button {
  background: #ff69b4;
  border: none;
  padding: 12px 22px;
  border-radius: 25px;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background: #ff4da6;
}

.options {
  display: none;
  margin-top: 20px;
}

.makeup {
  background: #fff0f6;
  border-radius: 15px;
  padding: 15px;
  margin-top: 12px;
}
</style>
</head>

<body>
<div class="card">
  <h1>BloomMe 🌸</h1>
  <p>Upload your photo and get AI makeup suggestions</p>
  <button onclick="showResults()">Upload photo</button>

  <div class="options" id="options">
    <h3>Your AI Picks 💄</h3>

    <div class="makeup">💖 Soft Glam<br><small>Perfect for everyday elegance</small></div>
    <div class="makeup">🔥 Bold Night<br><small>For parties & night looks</small></div>
    <div class="makeup">🌸 Natural Glow<br><small>Fresh & minimal beauty</small></div>
  </div>
</div>

<script>
function showResults() {
  document.getElementById("options").style.display = "block";
}
</script>

</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log("BloomMe running on port " + PORT);
});
