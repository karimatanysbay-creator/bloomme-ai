const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>BloomMe 🌸</title>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  background: linear-gradient(180deg, #fde7ef, #fff);
}

.container {
  max-width: 460px;
  margin: 40px auto;
  background: white;
  border-radius: 28px;
  padding: 24px;
  box-shadow: 0 20px 40px rgba(255,105,180,0.2);
}

h1 { text-align: center; color: #e91e63; }
.subtitle { text-align: center; color: #666; font-size: 14px; }

input, textarea { width: 100%; margin-top: 10px; }
textarea {
  padding: 10px;
  border-radius: 12px;
  border: 1px solid #ddd;
  resize: none;
}

.section { margin-top: 16px; }
.section label { display: block; margin-top: 6px; }

button {
  width: 100%;
  margin-top: 18px;
  padding: 14px;
  border: none;
  border-radius: 999px;
  background: #e91e63;
  color: white;
  font-size: 16px;
  font-weight: bold;
}

button:disabled { opacity: 0.6; }

.preview img {
  width: 100%;
  margin-top: 16px;
  border-radius: 20px;
}

.hidden { display: none; }

.card {
  background: #ffe6f0;
  border-radius: 18px;
  padding: 14px;
  margin-top: 12px;
  cursor: pointer;
}

.details {
  background: #fff5f9;
  border-radius: 18px;
  padding: 16px;
  margin-top: 16px;
}
</style>
</head>

<body>
<div class="container">

<h1>BloomMe 🌸</h1>
<p class="subtitle">Upload your photo and describe your skin</p>

<input type="file" id="photo" accept="image/*">

<div class="preview hidden" id="preview">
  <img id="previewImg">
</div>

<div class="section">
  <strong>Your skin type:</strong>
  <label><input type="radio" name="skin" value="Dry"> Dry</label>
  <label><input type="radio" name="skin" value="Combination"> Combination</label>
  <label><input type="radio" name="skin" value="Oily"> Oily</label>
</div>

<div class="section">
  <strong>Skin concerns (choose any):</strong>
  <label><input type="checkbox" value="acne"> Acne / Problematic</label>
  <label><input type="checkbox" value="postacne"> Post-acne</label>
  <label><input type="checkbox" value="sensitive"> Sensitive</label>
  <label><input type="checkbox" value="clear"> No major issues</label>
</div>

<textarea id="description" rows="3"
placeholder="Anything else? (optional)"></textarea>

<button id="analyzeBtn" disabled>Analyze</button>

<div id="loading" class="hidden subtitle">Analyzing your beauty… ✨</div>

<div id="results" class="hidden"></div>
<div id="details" class="hidden"></div>

</div>

<script>
const photo = document.getElementById("photo");
const preview = document.getElementById("preview");
const previewImg = document.getElementById("previewImg");
const analyzeBtn = document.getElementById("analyzeBtn");
const loading = document.getElementById("loading");
const results = document.getElementById("results");
const details = document.getElementById("details");
const description = document.getElementById("description");

let skinType = null;

photo.onchange = () => {
  if (photo.files[0]) {
    previewImg.src = URL.createObjectURL(photo.files[0]);
    preview.classList.remove("hidden");
    checkReady();
  }
};

document.querySelectorAll("input[name='skin']").forEach(r => {
  r.onchange = () => { skinType = r.value; checkReady(); };
});

function checkReady() {
  if (photo.files.length && skinType) analyzeBtn.disabled = false;
}

analyzeBtn.onclick = () => {
  loading.classList.remove("hidden");
  results.classList.add("hidden");
  details.classList.add("hidden");
  setTimeout(showResults, 2000);
};

function getConcerns() {
  return Array.from(document.querySelectorAll("input[type='checkbox']:checked"))
    .map(c => c.value);
}

function showResults() {
  loading.classList.add("hidden");

  const concerns = getConcerns();
  const notes = description.value || "No additional notes";

  results.innerHTML = \`
    <h3>AI Summary ✨</h3>
    <p>
      Skin type: <strong>\${skinType}</strong><br>
      Concerns: <strong>\${concerns.join(", ") || "None"}</strong><br>
      Notes: "\${notes}"
    </p>

    <h3>Your styles 💄</h3>
    <div class="card" onclick="showLook('soft', concerns)">💖 Soft Glam</div>
    <div class="card" onclick="showLook('evening', concerns)">✨ Evening Glam</div>
    <div class="card" onclick="showLook('latina', concerns)">🔥 Latina</div>
    <div class="card" onclick="showLook('dark', concerns)">🖤 Dark Feminine</div>
    <div class="card" onclick="showLook('goth', concerns)">⛓ Goth</div>
  \`;

  results.classList.remove("hidden");
}

function showLook(type, concerns) {
  let extra = "";

  if (concerns.includes("acne") || concerns.includes("postacne")) {
    extra = "• Non-comedogenic products<br>• Medium coverage<br>";
  }
  if (concerns.includes("sensitive")) {
    extra += "• Fragrance-free formulas<br>";
  }

  details.innerHTML = \`
    <h3>\${type.toUpperCase()} LOOK</h3>
    <p>\${extra}</p>
    <ul>
      <li>Foundation: Dior / YSL (based on skin type)</li>
      <li>Contour: Rare Beauty</li>
      <li>Blush: Makeup by Mario</li>
      <li>Eyes: Neutral or bold palette</li>
      <li>Lips: Fenty / MAC</li>
      <li>Setting: Long-wear spray</li>
    </ul>
  \`;

  details.classList.remove("hidden");
}
</script>

</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log("BloomMe running on port " + PORT);
});
