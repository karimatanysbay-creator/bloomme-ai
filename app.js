<script>
  let skin = "";
  let style = "";

  function startAnalysis() {
    document.getElementById("skinSection").style.display = "block";
  }

  function goToStyle() {
    skin = document.getElementById("skinInput").value.toLowerCase();

    // ❗ НЕ показываем продукты здесь
    document.getElementById("products").style.display = "none";

    // ✅ показываем выбор стиля
    document.getElementById("styleSection").style.display = "block";
  }

  function selectStyle(selectedStyle) {
    style = selectedStyle;
    showProducts();
  }

  function showProducts() {
    const products = document.getElementById("products");
    products.innerHTML = "<h2>Your personalized picks ✨</h2>";

    // SKIN
    if (skin.includes("dry")) {
      products.innerHTML += product(
        "Hydrating Foundation",
        "Creamy texture with a natural glow finish."
      );
      products.innerHTML += product(
        "Nourishing Moisturizer",
        "Deep hydration for dry and tight skin."
      );
    }

    if (skin.includes("oily")) {
      products.innerHTML += product(
        "Matte Foundation",
        "Controls shine without clogging pores."
      );
    }

    // STYLE
    if (style === "Soft Glam") {
      products.innerHTML += product(
        "Cream Blush",
        "Soft rosy tones for a natural look."
      );
      products.innerHTML += product(
        "Glossy Lip Balm",
        "Fresh pink shine with hydration."
      );
    }

    if (style === "Evening Glam") {
      products.innerHTML += product(
        "Full Coverage Concealer",
        "Perfect base for evening makeup."
      );
    }

    if (style === "Latina") {
      products.innerHTML += product(
        "Bronzing Powder",
        "Warm sculpted finish."
      );
    }

    if (style === "Dark Feminine") {
      products.innerHTML += product(
        "Berry Lipstick",
        "Deep feminine tone."
      );
    }

    if (style === "Goth") {
      products.innerHTML += product(
        "Black Cherry Lipstick",
        "Dark dramatic shade."
      );
    }

    products.style.display = "block";
  }

  function product(name, desc) {
    return `
      <div class="product">
        <h3>${name}</h3>
        <p>${desc}</p>
      </div>
    `;
  }
</script>