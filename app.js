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
  max-width: 420px;
  margin: 40px auto;
  background: white;
  border-radius: 28px;
  padding: 24px;
  box-shadow: 0 20px 40px rgba(255,105,180,0.2);
}

h1 {
  text-align: center;
  color: #e91e63;
}

.subtitle {
  text-align: center;
  color: #666;
  font-size: 14px;
  margin-bottom: 16px;
}

input, textarea {
  width: 100%;
  margin-top: 10px;
}

textarea {
  padding: 10px;
  border-radius: 12px;
  border: 1px solid #ddd;
  resize: none;
}

.skin label {
  display: block;
  margin-top: 6px;
}

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

button:disabled {
  opacity: 0.6;
}

.preview img {
  width: 100%;
  margin-top: 16px;
  border-radius: 20px;
}

.hidden {
  display: none;
}

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
  padding: 14px;
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

  <div class="skin">
    <p><strong>Your skin type:</strong></p>
    <label><input type="radio" name="skin" value="Dry"> Dry</label>
    <label><input type="radio" name="skin" value="Combination"> Combination</label>
    <label><input type="radio" name="skin" value="Oily"> Oily</label>
  </div>

  <textarea id="description" rows="3"
    placeholder="Describe your skin (optional)
Example: dry cheeks, oily nose, sensitive"></textarea>

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

document.querySelectorAll("input[name='skin']").forEach(radio => {
  radio.onchange = () => {
    skinType = radio.value;
    checkReady();
  };
});

function checkReady() {
  if (photo.files.length && skinType) {
    analyzeBtn.disabled = false;
  }
}

analyzeBtn.onclick = () => {
  loading.classList.remove("hidden");
  results.classList.add("hidden");
  details.classList.add("hidden");

  setTimeout(showResults, 2000);
};

function showResults() {
  loading.classList.add("hidden");

  const notes = description.value || "No additional notes";

  results.innerHTML = \`
    <h3>AI Summary ✨</h3>
    <p>
      Based on your photo and your description, your skin type is
      <strong>\${skinType}</strong>.
      Notes: "\${notes}".
      We selected makeup looks that enhance your natural features
      and suit your skin needs.
    </p>

    <h3>Your makeup looks 💄</h3>

    <div class="card" onclick="showLook('soft')">
      💖 <strong>Soft Glam</strong><br>
      Elegant and glowing
    </div>

    <div class="card" onclick="showLook('natural')">
      🌸 <strong>Natural Glow</strong><br>
      Fresh everyday look
    </div>

    <div class="card" onclick="showLook('evening')">
      🔥 <strong>Evening Look</strong><br>
      Defined and bold
    </div>
  \`;

  results.classList.remove("hidden");
}

function showLook(type) {
  let html = "";

  if (type === "soft") {
    html = \`
      <h3>💖 Soft Glam</h3>
      <strong>Steps</strong>
      <ul>
        <li>Light foundation</li>
        <li>Cream blush</li>
        <li>Soft mascara</li>
        <li>Glossy lips</li>
      </ul>
      <strong>Products</strong>
      <ul>
        <li>Dior Backstage Foundation</li>
        <li>Rare Beauty Cream Blush</li>
        <li>Fenty Beauty Gloss Bomb</li>
      </ul>
    \`;
  }

  if (type === "natural") {
    html = \`
      <h3>🌸 Natural Glow</h3>
      <strong>Steps</strong>
      <ul>
        <li>Skin tint</li>
        <li>Light blush</li>
        <li>Natural brows</li>
        <li>Lip balm</li>
      </ul>
      <strong>Products</strong>
      <ul>
        <li>Glossier Skin Tint</li>
        <li>Milk Makeup Blush</li>
        <li>Laneige Lip Balm</li>
      </ul>
    \`;
  }

  if (type === "evening") {
    html = \`
      <h3>🔥 Evening Look</h3>
      <strong>Steps</strong>
      <ul>
        <li>Full coverage foundation</li>
        <li>Contour & highlight</li>
        <li>Defined eyes</li>
        <li>Bold lips</li>
      </ul>
      <strong>Products</strong>
      <ul>
        <li>Estée Lauder Double Wear</li>
        <li>Huda Beauty Powder</li>
        <li>MAC Ruby Woo Lipstick</li>
      </ul>
    \`;
  }

  details.innerHTML = html;
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
