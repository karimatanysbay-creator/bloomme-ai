// GLOBAL STATE
let skin = "";
let style = "";

// STEP 1
function start() {
  document.getElementById("skinSection").style.display = "block";
}

// STEP 2 — SKIN TEST → PHOTO
function goToPhoto() {
  const checked = document.querySelector('input[name="skin"]:checked');
  if (!checked) {
    alert("Please select your skin type");
    return;
  }
  skin = checked.value;
  document.getElementById("photoSection").style.display = "block";
}

// PHOTO PREVIEW
function previewPhoto(event) {
  const img = document.getElementById("photoPreview");
  if (!event.target.files || !event.target.files[0]) return;
  img.src = URL.createObjectURL(event.target.files[0]);
  img.style.display = "block";
}

// STEP 3 — PHOTO → STYLE
function goToStyle() {
  document.getElementById("styleSection").style.display = "block";
}

// STEP 4 — STYLE → ROUTINE
function selectStyle(selectedStyle) {
  style = selectedStyle;
  showProducts();
}

// =======================
// MAIN LOGIC (ROUTINE)
// =======================
function showProducts() {
  const p = document.getElementById("products");
  p.innerHTML = `<h2>Your personalized routine ✨</h2>`;

  // ===== DRY SKIN =====
  if (skin === "dry") {

    p.innerHTML += step(1, "Moisturizer",
      "Embryolisse Lait-Crème, La Roche-Posay Cicaplast");

    p.innerHTML += step(2, "Vitamin C serum",
      "La Roche-Posay Pure Vitamin C, The Ordinary Vitamin C");

    p.innerHTML += step(3, "Makeup base / primer",
      "Milk Makeup Hydro Grip, Dior Backstage Glow Base");

    p.innerHTML += step(4, "Foundation",
      "Dior Forever Skin Glow, YSL All Hours Glow");

    p.innerHTML += step(5, "Bronzer (cream)",
      "Rare Beauty Bronzer Stick, Fenty Beauty Match Stix");

    p.innerHTML += step(6, "Contour (cream)",
      "Rare Beauty Warm Wishes, Charlotte Tilbury Contour Wand");

    p.innerHTML += step(7, "Blush (cream)",
      "Rare Beauty Soft Pinch, Dior Rosy Glow Stick");

    p.innerHTML += step(8, "Brows",
      "Anastasia Brow Wiz, Benefit Precisely My Brow");

    p.innerHTML += step(9, "Concealer",
      "Dior Forever Concealer, NARS Radiant Creamy");

    p.innerHTML += step(10, "Powder",
      "Laura Mercier Translucent Powder, Huda Beauty Easy Bake");

    p.innerHTML += step(11, "Powder products (re-define)",
      "Benefit Hoola, Dior Backstage Blush, Fenty Highlighter");

    p.innerHTML += step(12, "Setting spray",
      "Charlotte Tilbury Airbrush Spray, Urban Decay All Nighter");
  }

  // ===== OILY SKIN =====
  if (skin === "oily") {

    p.innerHTML += step(1, "Primer",
      "Milk Makeup Matte Primer, Benefit Porefessional");

    p.innerHTML += step(2, "Foundation",
      "Dior Forever Matte, Estée Lauder Double Wear");

    p.innerHTML += step(3, "Bronzer (cream)",
      "Rare Beauty Bronzer Stick, Fenty Match Stix");

    p.innerHTML += step(4, "Contour (cream)",
      "Charlotte Tilbury Contour Wand");

    p.innerHTML += step(5, "Blush (cream)",
      "Rare Beauty Soft Pinch Matte");

    p.innerHTML += step(6, "Brows",
      "Anastasia Brow Wiz, Benefit Gimme Brow");

    p.innerHTML += step(7, "Concealer",
      "NARS Radiant Creamy, Too Faced Born This Way");

    p.innerHTML += step(8, "Powder",
      "Huda Beauty Easy Bake, Laura Mercier");

    p.innerHTML += step(9, "Baking",
      "Huda Beauty Easy Bake (under eyes & T-zone)");

    p.innerHTML += step(10, "Powder products",
      "Benefit Hoola, Dior Backstage Blush, Fenty Highlighter");

    p.innerHTML += step(11, "Setting spray",
      "Urban Decay All Nighter, Charlotte Tilbury Airbrush");
  }

  p.style.display = "block";
}

// =======================
// STEP COMPONENT
// =======================
function step(number, title, brands) {
  return `
    <div class="product">
      <h3>${number}. ${title}</h3>
      <p><strong>Recommended:</strong> ${brands}</p>
    </div>
  `;
}