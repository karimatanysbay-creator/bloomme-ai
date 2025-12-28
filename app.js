<script>
const input = document.getElementById("photoInput");
const preview = document.getElementById("preview");
const analyzeBtn = document.getElementById("analyzeBtn");
const loader = document.getElementById("loader");
const results = document.getElementById("results");

let detectedType = "combo"; // default

// DATA: looks with steps + products
const LOOKS = {
  dry: {
    title: "Skin type: Dry 💧",
    subtitle: "Hydration + glow focus",
    looks: [
      {
        id: "softGlow",
        name: "Soft Glow",
        short: "Hydrating base, creamy textures",
        steps: [
          "Apply rich moisturizer",
          "Use hydrating primer",
          "Lightweight luminous foundation",
          "Cream blush",
          "Glossy lips"
        ],
        products: [
          "Hydrating moisturizer",
          "Glow primer",
          "Luminous foundation",
          "Cream blush",
          "Lip gloss"
        ]
      },
      {
        id: "glass",
        name: "Glass Skin",
        short: "Dewy, fresh finish",
        steps: [
          "Essence for hydration",
          "Serum",
          "Skin tint",
          "Liquid highlighter",
          "Clear lip balm"
        ],
        products: [
          "Hydrating essence",
          "Glow serum",
          "Skin tint",
          "Liquid highlighter",
          "Lip balm"
        ]
      },
      {
        id: "romantic",
        name: "Romantic Glam",
        short: "Soft eyes, luminous skin",
        steps: [
          "Moisturize well",
          "Light foundation",
          "Soft eyeshadow",
          "Mascara",
          "Rosy lipstick"
        ],
        products: [
          "Moisturizer",
          "Light foundation",
          "Neutral eyeshadow",
          "Mascara",
          "Rosy lipstick"
        ]
      }
    ]
  },
  oily: {
    title: "Skin type: Oily ✨",
    subtitle: "Oil-control + longevity",
    looks: [
      {
        id: "matte",
        name: "Matte Glam",
        short: "Matte base, defined eyes",
        steps: [
          "Mattifying primer",
          "Oil-free foundation",
          "Set with powder",
          "Define eyes",
          "Matte lips"
        ],
        products: [
          "Mattifying primer",
          "Oil-free foundation",
          "Setting powder",
          "Eyeliner",
          "Matte lipstick"
        ]
      },
      {
        id: "clean",
        name: "Clean Chic",
        short: "Fresh skin, lip focus",
        steps: [
          "Gel moisturizer",
          "Light BB cream",
          "Conceal T-zone",
          "Mascara",
          "Bold lips"
        ],
        products: [
          "Gel moisturizer",
          "BB cream",
          "Concealer",
          "Mascara",
          "Bold lipstick"
        ]
      },
      {
        id: "night",
        name: "Night Luxe",
        short: "Oil-control for evenings",
        steps: [
          "Mattifying base",
          "Long-wear foundation",
          "Contour",
          "Smoky eyes",
          "Statement lips"
        ],
        products: [
          "Mattifying base",
          "Long-wear foundation",
          "Contour palette",
          "Smoky eyeshadow",
          "Statement lipstick"
        ]
      }
    ]
  },
  combo: {
    title: "Skin type: Combination 🌗",
    subtitle: "Matte T-zone + glow cheeks",
    looks: [
      {
        id: "balanced",
        name: "Balanced Glow",
        short: "Glow cheeks, matte T-zone",
        steps: [
          "Light moisturizer",
          "Primer on T-zone",
          "Natural foundation",
          "Cream blush on cheeks",
          "Lip gloss"
        ],
        products: [
          "Light moisturizer",
          "Mattifying primer",
          "Natural foundation",
          "Cream blush",
          "Lip gloss"
        ]
      },
      {
        id: "soft",
        name: "Soft Glam",
        short: "Light contour, glossy lips",
        steps: [
          "Hydrate cheeks",
          "Set T-zone",
          "Soft contour",
          "Mascara",
          "Glossy lips"
        ],
        products: [
          "Hydrating cream",
          "Setting powder",
          "Contour stick",
          "Mascara",
          "Lip gloss"
        ]
      },
      {
        id: "everyday",
        name: "Everyday Chic",
        short: "Fresh & effortless",
        steps: [
          "Moisturize",
          "Skin tint",
          "Blush",
          "Brows",
          "Tinted balm"
        ],
        products: [
          "Moisturizer",
          "Skin tint",
          "Blush",
          "Brow gel",
          "Tinted balm"
        ]
      }
    ]
  },
  normal: {
    title: "Skin type: Normal 🌼",
    subtitle: "Balanced & versatile",
    looks: [
      {
        id: "classic",
        name: "Classic Glam",
        short: "Even tone, soft eyes",
        steps: [
          "Moisturize",
          "Foundation",
          "Soft eyeshadow",
          "Mascara",
          "Lipstick"
        ],
        products: [
          "Moisturizer",
          "Foundation",
          "Eyeshadow",
          "Mascara",
          "Lipstick"
        ]
      },
      {
        id: "natural",
        name: "Natural Glow",
        short: "Minimal, healthy skin",
        steps: [
          "Light moisturizer",
          "Skin tint",
          "Blush",
          "Brows",
          "Lip balm"
        ],
        products: [
          "Light moisturizer",
          "Skin tint",
          "Blush",
          "Brow gel",
          "Lip balm"
        ]
      },
      {
        id: "evening",
        name: "Evening Look",
        short: "Elegant & polished",
        steps: [
          "Prep skin",
          "Foundation",
          "Define eyes",
          "Highlighter",
          "Lipstick"
        ],
        products: [
          "Primer",
          "Foundation",
          "Eyeliner",
          "Highlighter",
          "Lipstick"
        ]
      }
    ]
  }
};

// random “AI detection”
input.addEventListener("change", () => {
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    preview.src = reader.result;
    preview.style.display = "block";
    analyzeBtn.disabled = false;

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
    renderLooks();
  }, 2000);
}

function renderLooks() {
  const data = LOOKS[detectedType];
  let html = `
    <h3>${data.title}</h3>
    <p>${data.subtitle}</p>
  `;

  data.looks.forEach(look => {
    html += `
      <div class="makeup" onclick="openDetails('${look.id}')">
        <strong>${look.name}</strong><br>
        <small>${look.short}</small>
      </div>
    `;
  });

  // details container
  html += `<div id="details"></div>`;

  results.innerHTML = html;
  results.style.display = "block";
}

function openDetails(id) {
  const data = LOOKS[detectedType];
  const look = data.looks.find(l => l.id === id);
  if (!look) return;

  let detailsHTML = `
    <h4>${look.name} — Steps</h4>
    <ol>${look.steps.map(s => `<li>${s}</li>`).join("")}</ol>
    <h4>Products</h4>
    <ul>${look.products.map(p => `<li>${p}</li>`).join("")}</ul>
  `;

  document.getElementById("details").innerHTML = detailsHTML;
}
</script>
