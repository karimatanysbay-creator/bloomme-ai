<script>
const input = document.getElementById("photoInput");
const preview = document.getElementById("preview");
const analyzeBtn = document.getElementById("analyzeBtn");
const loader = document.getElementById("loader");
const results = document.getElementById("results");

const resultsHTML = {
  dry: `
    <h3>Skin type: Dry 💧</h3>
    <p>Your skin needs hydration and glow.</p>
    <div class="makeup">💖 Soft Glow<br><small>Hydrating base + creamy blush</small></div>
    <div class="makeup">🌸 Glass Skin<br><small>Dewy finish, lip gloss</small></div>
    <div class="makeup">✨ Romantic Glam<br><small>Soft eyes, luminous skin</small></div>
  `,
  oily: `
    <h3>Skin type: Oily ✨</h3>
    <p>Balance shine and keep makeup fresh.</p>
    <div class="makeup">🔥 Matte Glam<br><small>Matte base, defined eyes</small></div>
    <div class="makeup">💄 Clean Chic<br><small>Light coverage, lip focus</small></div>
    <div class="makeup">🌙 Night Luxe<br><small>Oil-control + bold lips</small></div>
  `,
  combo: `
    <h3>Skin type: Combination 🌗</h3>
    <p>Dry cheeks with oily T-zone detected.</p>
    <div class="makeup">🌸 Balanced Glow<br><small>Glow cheeks + matte T-zone</small></div>
    <div class="makeup">💖 Soft Glam<br><small>Light contour, glossy lips</small></div>
    <div class="makeup">✨ Everyday Chic<br><small>Fresh, effortless look</small></div>
  `,
  normal: `
    <h3>Skin type: Normal 🌼</h3>
    <p>Your skin is naturally balanced.</p>
    <div class="makeup">💖 Classic Glam<br><small>Even tone, soft eyes</small></div>
    <div class="makeup">🌸 Natural Glow<br><small>Minimal makeup, healthy skin</small></div>
    <div class="makeup">🔥 Evening Look<br><small>Elegant and polished</small></div>
  `
};

let detectedType = "combo"; // default

input.addEventListener("change", () => {
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    preview.src = reader.result;
    preview.style.display = "block";
    analyzeBtn.disabled = false;

    // fake AI detection (random for now)
    const types = ["dry", "oily", "combo", "normal"];
    detectedType = types[Math.floor(Math.random() * types.length)];
  };
  reader.readAsDataURL(file);
});

function analyze() {
  loader.style.display = "block";
  results.style.display = "none";

  setTimeout(() => {
    loader.style.display = "none";
    results.innerHTML = resultsHTML[detectedType];
    results.style.display = "block";
  }, 2000);
}
</script>
