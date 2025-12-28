// Global state
let skin = "";
let style = "";

// STEP 1
function start() {
  show("skinSection");
}

// STEP 2: SKIN TEST → PHOTO
function goToPhoto() {
  const checked = document.querySelector('input[name="skin"]:checked');
  if (!checked) {
    alert("Please select your skin type");
    return;
  }
  skin = checked.value;
  show("photoSection");
}

// PHOTO PREVIEW
function previewPhoto(event) {
  const img = document.getElementById("photoPreview");
  if (!event.target.files || !event.target.files[0]) return;
  img.src = URL.createObjectURL(event.target.files[0]);
  img.style.display = "block";
}

// STEP 3: PHOTO → STYLE
function goToStyle() {
  show("styleSection");
}

// STEP 4: STYLE → PRODUCTS
function selectStyle(selected) {
  style = selected;
  showProducts();
}

// RENDER PRODUCTS
function showProducts() {
  const p = document.getElementById("products");
  p.innerHTML = "<h2>Your personalized picks ✨</h2>";

  // SKIN-BASED PICKS
  if (skin === "dry") {
    p.innerHTML += product(
      "Hydrating Skin Tint",
      "Lightweight coverage with hyaluronic acid. No dryness, no flakes."
    );
    p.innerHTML += product(
      "Cream Blush (Rose)",
      "Melts into skin for a fresh, healthy glow."
    );
  }

  if (skin === "oily") {
    p.innerHTML += product(
      "Soft Matte Foundation",
      "Controls shine without clogging pores."
    );
    p.innerHTML += product(
      "Oil-Free Setting Powder",
      "Keeps makeup fresh all day."
    );
  }

  if (skin === "combination") {
    p.innerHTML += product(
      "Natural Finish Foundation",
      "Balanced coverage for combination skin."
    );
  }

  if (skin === "sensitive") {
    p.innerHTML += product(
      "Calming BB Cream",
      "Fragrance-free, redness-reducing formula."
    );
  }

  // STYLE ADD-ONS
  if (style === "Soft Glam") {
    p.innerHTML += product(
      "Glossy Nude Lip Balm",
      "Comfortable shine for everyday glam."
    );
  }

  if (style === "Evening Glam") {
    p.innerHTML += product(
      "Nude Rose Lipstick",
      "Elegant, soft-focus finish."
    );
  }

  if (style === "Latina") {
    p.innerHTML += product(
      "Bronzing Powder",
      "Warm sculpted finish."
    );
  }

  if (style === "Dark Feminine") {
    p.innerHTML += product(
      "Berry Lipstick",
      "Deep feminine tone."
    );
  }

  if (style === "Goth") {
    p.innerHTML += product(
      "Black Cherry Lipstick",
      "Dark dramatic shade."
    );
  }

  p.style.display = "block";
}

// HELPERS
function product(name, desc) {
  return `
    <div class="product">
      <h3>${name}</h3>
      <p>${desc}</p>
    </div>
  `;
}

function show(id) {
  document.getElementById(id).style.display = "block";
}