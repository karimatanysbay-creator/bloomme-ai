const stylesBlock = document.getElementById("styles");
const details = document.getElementById("details");

function analyze() {
  stylesBlock.classList.remove("hidden");
  details.classList.add("hidden");
}

function showLook(type) {
  let content = "";

  if (type === "soft") {
    content = `
    <h3>Soft Glam 💖</h3>
    <ul>
      <li>Foundation: Dior Forever / YSL Nu</li>
      <li>Concealer: NARS Radiant Creamy</li>
      <li>Blush: Makeup by Mario (cream)</li>
      <li>Mascara: Maybelline Sky High</li>
      <li>Lips: Dior Lip Glow</li>
    </ul>`;
  }

  if (type === "natural") {
    content = `
    <h3>Natural 🌸</h3>
    <ul>
      <li>Foundation: Armani Luminous Silk</li>
      <li>Blush: Rare Beauty liquid</li>
      <li>Mascara: Glossier Lash Slick</li>
      <li>Lips: Fenty Gloss Bomb</li>
    </ul>`;
  }

  if (type === "evening") {
    content = `
    <h3>Evening Glam ✨</h3>
    <ul>
      <li>Foundation: Estée Lauder Double Wear</li>
      <li>Contour: Rare Beauty stick</li>
      <li>Eyes: Huda Beauty palette</li>
      <li>Lips: MAC Satin</li>
    </ul>`;
  }

  if (type === "latina") {
    content = `
    <h3>Latina 🔥</h3>
    <ul>
      <li>Foundation: Armani Luminous Silk</li>
      <li>Contour: Rare Beauty</li>
      <li>Blush: Makeup by Mario (warm)</li>
      <li>Lips: Fenty Gloss Bomb Heat</li>
    </ul>`;
  }

  if (type === "dark") {
    content = `
    <h3>Dark Feminine 🖤</h3>
    <ul>
      <li>Foundation: Dior Matte</li>
      <li>Eyes: Smokey neutral palette</li>
      <li>Lips: MAC Whirl</li>
    </ul>`;
  }

  if (type === "goth") {
    content = `
    <h3>Goth ⛓</h3>
    <ul>
      <li>Foundation: Fenty Soft Matte</li>
      <li>Eyes: Black eyeshadow</li>
      <li>Lips: MAC Diva / black lipstick</li>
    </ul>`;
  }

  details.innerHTML = content;
  details.classList.remove("hidden");
  details.scrollIntoView({ behavior: "smooth" });
}
