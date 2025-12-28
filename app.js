const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>BloomMe AI</title>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: linear-gradient(180deg, #fde7ef, #fff);
}

.container {
  max-width: 380px;
  margin: 40px auto;
  background: white;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
}

h1 {
  text-align: center;
  color: #e91e63;
}

.subtitle {
  text-align: center;
  color: #777;
  font-size: 14px;
  margin-bottom: 20px;
}

input[type="file"] {
  width: 100%;
}

button {
  width: 100%;
  padding: 14px;
  margin-top: 16px;
  border-radius: 999px;
  border: none;
  background: #e91e63;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

button:disabled {
  background: #f3a6be;
}

#preview {
  margin-top: 16px;
  width: 100%;
  border-radius: 16px;
  display: none;
}

#loading {
  display: none;
  text-align: center;
  margin-top: 20px;
  color: #e91e63;
}

.cards {
  display: none;
  margin-top: 20px;
}

.card {
  background: #fde7ef;
  padding: 14px;
  border-radius: 16px;
  margin-bottom: 12px;
  cursor: pointer;
}

.card strong {
  display: block;
}

.details {
  display: none;
  margin-top: 20px;
}

.details h3 {
  margin-bottom: 8px;
}

ul {
  padding-left: 18px;
}
</style>
</head>

<body>
<div class="container">

<h1>BloomMe 🌸</h1>
<p class="subtitle">Upload a photo and get personalized makeup suggestions</p>

<input type="file" id="photoInput" accept="image/*" />
<img id="preview"/>

<button id="analyzeBtn" disabled>Analyze</button>

<div id="loading">Analyzing your beauty ✨</div>

<div class="cards" id="cards">
  <div class="card" onclick="showDetails('soft')">
    💖 <strong>Soft Glam</strong>
    Perfect for balanced skin tone
  </div>
  <div class="card" onclick="showDetails('night')">
    🔥 <strong>Night Luxe</strong>
    Best for evening contrast
  </div>
  <div class="card" onclick="showDetails('natural')">
    🌸 <strong>Natural Glow</strong>
    Enhances natural features
  </div>
</div>

<div class="details" id="details"></div>

</div>

<script>
const photoInput = document.getElementById("photoInput");
const preview = document.getElementById("preview");
const analyzeBtn = document.getElementById("analyzeBtn");
const loading = document.getElementById("loading");
const cards = document.getElementById("cards");
const details = document.getElementById("details");

photoInput.onchange = () => {
  const file = photoInput.files[0];
  if (!file) return;
  preview.src = URL.createObjectURL(file);
  preview.style.display = "block";
  analyzeBtn.disabled = false;
};

analyzeBtn.onclick = () => {
  analyzeBtn.disabled = true;
  loading.style.display = "block";
  cards.style.display = "none";
  details.style.display = "none";

  setTimeout(() => {
    loading.style.display = "none";
    cards.style.display = "block";
  }, 1500);
};

function showDetails(type) {
  const data = {
    soft: {
      title: "Soft Glam",
      steps: ["Hydrating primer", "Light foundation", "Cream blush", "Soft mascara", "Glossy lips"],
      products: ["Hydrating primer", "Light foundation", "Cream blush", "Lip gloss"]
    },
    night: {
      title: "Night Luxe",
      steps: ["Matte primer", "Full coverage foundation", "Contour", "Bold eyeliner", "Red lips"],
      products: ["Matte primer", "Contour palette", "Liquid eyeliner", "Red lipstick"]
    },
    natural: {
      title: "Natural Glow",
      steps: ["Moisturizer", "BB cream", "Liquid blush", "Clear mascara", "Lip balm"],
      products: ["BB cream", "Liquid blush", "Clear mascara", "Lip balm"]
    }
  };

  const look = data[type];

  details.innerHTML = \`
    <h3>\${look.title}</h3>
    <strong>Steps</strong>
    <ul>\${look.steps.map(s => "<li>"+s+"</li>").join("")}</ul>
    <strong>Products</strong>
    <ul>\${look.products.map(p => "<li>"+p+"</li>").join("")}</ul>
    <button onclick="reset()">Try another look</button>
  \`;

  details.style.display = "block";
}

function reset() {
  details.style.display = "none";
}
</script>

</body>
</html>
`);
});

app.listen(PORT, () => {
  console.log("BloomMe running on port", PORT);
});
