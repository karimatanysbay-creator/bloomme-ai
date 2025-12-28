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
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #ffe6f0, #fff);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  background: white;
  padding: 30px;
  border-radius: 24px;
  width: 360px;
  box-shadow: 0 20px 45px rgba(0,0,0,0.15);
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
  margin-top: 15px;
}

button:disabled {
  background: #f2a6c8;
}

img {
  margin-top: 15px;
  max-width: 100%;
  border-radius: 16px;
  display: none;
}

.loader {
  display: none;
  margin-top: 15px;
  color: #d63384;
  font-weight: bold;
}

.results {
  display: none;
  margin-top: 20px;
}

.makeup {
  background: #fff0f6;
  border-radius: 16px;
  padding: 14px;
  margin-top: 10px;
}
</style>
</head>

<body>
<div class="card">
  <h1>BloomMe 🌸</h1>
  <p>Upload a photo and get personalized makeup suggestions</p>

  <input type="file" accept="image/*" id="photoInput" />
  <img id="preview" />

  <button id="analyzeBtn" disabled onclick="analyze()">Analyze</button>

  <div class="loader" id="loader">Analyzing your skin...</div>

  <div class="results" id="results">
    <h3>Your AI picks 💄</h3>
    <div class="makeup">💖 Soft Glam<br><small>Perfect for balanced skin tone</small></div>
    <div class="makeup">🔥 Night Luxe<br><small>Best for evening contrast</small></div>
    <div class="makeup">🌸 Natural Glow<br><small>Enhances natural features</small></div>
  </div>
</div>

<script>
const input = document.getElementById("photoInput");
const preview = document.getElementById("preview");
const analyzeBtn = document.getElementById("analyzeBtn");

input.addEventListener("change", () => {
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    preview.src = reader.result;
    preview.style.display = "block";
    analyzeBtn.disabled = false;
  };
  reader.readAsDataURL(file);
});

function analyze() {
  document.getElementById("loader").style.display = "block";

  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("results").style.display = "block";
  }, 2000);
}
</script>

</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log("BloomMe AI running on port " + PORT);
});
