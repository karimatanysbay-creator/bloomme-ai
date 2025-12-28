const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>BloomMe</title>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(180deg, #fde7ef, #fff);
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

p {
  text-align: center;
  color: #666;
  font-size: 14px;
}

input {
  width: 100%;
  margin-top: 10px;
}

button {
  width: 100%;
  margin-top: 15px;
  padding: 12px;
  border-radius: 999px;
  border: none;
  background: #e91e63;
  color: white;
  font-size: 16px;
}

#preview {
  width: 100%;
  border-radius: 16px;
  margin-top: 15px;
  display: none;
}

.cards {
  display: none;
  margin-top: 20px;
}

.card {
  background: #fde7ef;
  padding: 14px;
  border-radius: 16px;
  margin-bottom: 10px;
  cursor: pointer;
}

.details {
  display: none;
  margin-top: 20px;
}
</style>
</head>

<body>
<div class="container">

<h1>BloomMe 🌸</h1>
<p>Upload a photo and choose your makeup look</p>

<input type="file" id="photo">
<img id="preview">

<button onclick="analyze()">Analyze</button>

<div class="cards" id="cards">
  <div class="card" onclick="show('soft')">💖 Soft Glam</div>
  <div class="card" onclick="show('night')">🔥 Night Luxe</div>
  <div class="card" onclick="show('natural')">🌸 Natural Glow</div>
</div>

<div class="details" id="details"></div>

</div>

<script>
const photo = document.getElementById("photo");
const preview = document.getElementById("preview");

photo.onchange = () => {
  const file = photo.files[0];
  if (file) {
    preview.src = URL.createObjectURL(file);
    preview.style.display = "block";
  }
};

function analyze() {
  if (!photo.files.length) {
    alert("Upload a photo first");
    return;
  }
  document.getElementById("cards").style.display = "block";
}

function show(type) {
  const details = document.getElementById("details");

  if (type === "soft") {
    details.innerHTML = `
      <h3>💖 Soft Glam</h3>
      <ol>
        <li>Hydrating primer</li>
        <li>Light foundation</li>
        <li>Cream blush</li>
        <li>Glossy lips</li>
      </ol>
    `;
  }

  if (type === "night") {
    details.innerHTML = `
      <h3>🔥 Night Luxe</h3>
      <ol>
        <li>Mattifying primer</li>
        <li>Full coverage foundation</li>
        <li>Contour</li>
        <li>Bold lipstick</li>
      </ol>
    `;
  }

  if (type === "natural") {
    details.innerHTML = `
      <h3>🌸 Natural Glow</h3>
      <ol>
        <li>BB cream</li>
        <li>Cream blush</li>
        <li>Mascara</li>
        <li>Lip balm</li>
      </ol>
    `;
  }

  details.style.display = "block";
}
</script>

</body>
</html>
`);
});

app.listen(PORT, () => {
  console.log("BloomMe running on port", PORT);
});
