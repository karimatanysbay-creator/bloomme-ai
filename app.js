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
  margin: 0;
  font-family: "Helvetica Neue", sans-serif;
  background: linear-gradient(135deg, #ffe6ef, #fff);
}

.container {
  max-width: 360px;
  margin: 40px auto;
  background: white;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
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

button {
  width: 100%;
  padding: 14px;
  background: #e91e63;
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 12px;
}

button:hover {
  opacity: 0.9;
}

.card {
  background: #fff0f6;
  border-radius: 18px;
  padding: 14px;
  margin-top: 12px;
  cursor: pointer;
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.03);
}

.hidden {
  display: none;
}

#preview {
  width: 100%;
  border-radius: 16px;
  margin-top: 12px;
}
</style>
</head>

<body>

<div class="container">
  <h1>BloomMe 🌸</h1>
  <p class="subtitle">Upload a photo and get personalized makeup suggestions</p>

  <input type="file" id="photo" accept="image/*" />
  <img id="preview" class="hidden"/>

  <button onclick="analyze()">Analyze</button>

  <div id="cards" class="hidden">
    <h3>Your AI picks 💄</h3>

    <div class="card" onclick="showDetails('soft')">
      💖 <b>Soft Glam</b><br/>
      Perfect for balanced skin tone
    </div>

    <div class="card" onclick="showDetails('night')">
      🔥 <b>Night Luxe</b><br/>
      Best for evening contrast
    </div>

    <div class="card" onclick="showDetails('natural')">
      🌸 <b>Natural Glow</b><br/>
      Enhances natural features
    </div>
  </div>

  <div id="details"></div>
</div>

<script>
const photoInput = document.getElementById("photo");
const preview = document.getElementById("preview");

photoInput.onchange = () => {
  const file = photoInput.files[0];
  if (file) {
    preview.src = URL.createObjectURL(file);
    preview.classList.remove("hidden");
  }
};

function analyze() {
  if (!photoInput.files.length) {
    alert("Please upload a photo first");
    return;
  }
  document.getElementById("cards").classList.remove("hidden");
}

function showDetails(type) {
  const data = {
    soft: {
      title: "Soft Glam",
      steps: [
        "Hydrating primer",
        "Light foundation",
        "Cream blush",
        "Soft mascara",
        "Glossy lips"
      ],
      products: [
        "Hydrating primer",
        "Light foundation",
        "Cream blush",
        "Lip gloss"
      ]
    },
    night: {
      title: "Night Luxe",
      steps: [
        "Mattifying base",
        "Full coverage foundation",
        "Contour",
        "Smoky eyes",
        "Matte lips"
      ],
      products: [
        "Mattifying primer",
        "Long-wear foundation",
        "Contour palette",
        "Smoky eyeshadow",
        "Matte lipstick"
      ]
    },
    natural: {
      title: "Natural Glow",
      steps: [
        "Moisturizer",
        "Skin tint",
        "Soft blush",
        "Natural brows",
        "Lip balm"
      ],
      products: [
        "Moisturizer",
        "Skin tint",
        "Blush",
        "Brow gel",
        "Lip balm"
      ]
    }
  };

  const d = data[type];

  document.getElementById("details").innerHTML = \`
    <h3>\${d.title}</h3>
    <b>Steps</b>
    <ol>\${d.steps.map(s => "<li>" + s + "</li>").join("")}</ol>
    <b>Products</b>
    <ul>\${d.products.map(p => "<li>" + p + "</li>").join("")}</ul>
  \`;
}
</script>

</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log("BloomMe running on port", PORT);
});
