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
  border-radius: 22px;
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
}

.loader {
  display: none;
  margin-top: 20px;
  color: #d63384;
  font-weight: bold;
}

.options {
  display: none;
  margin-top: 20px;
}

.makeup {
  background: #fff0f6;
  border-radius: 16px;
  padding: 14px;
  margin-top: 12px;
}
</style>
</head>

<body>
<div class="card">
  <h1>BloomMe 🌸</h1>
  <p>Upload your photo and get AI makeup analysis</p>

  <button onclick="analyze()">Upload photo</button>

  <div class="loader" id="loader">Analyzing your skin...</div>

  <div class="options" id="options">
    <h3>Your personalized looks 💄</h3>

    <div class="makeup">💖 Soft Glam<br><small>Balanced glow for your skin tone</small></div>
    <div class="makeup">🔥 Night Luxe<br><small>Perfect contrast for evening looks</small></div>
    <div class="makeup">🌸 Natural Glow<br><small>Enhances your natural features</small></div>
  </div>
</div>

<script>
function analyze() {
  document.getElementById("loader").style.display = "block";

  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("options").style.display = "block";
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
