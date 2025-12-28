const stylesBlock = document.getElementById("styles");
const details = document.getElementById("details");

function analyze() {
  stylesBlock.classList.remove("hidden");
  details.classList.add("hidden");
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("style-btn")) {
    const style = e.target.dataset.style;
    showLook(style);
  }
});

function showLook(type) {
  let content = "";

  const looks = {
    soft: `
      <h3>Soft Glam 💖</h3>
      <ul>
        <li>Foundation: Dior Forever / YSL Nu</li>
        <li>Concealer: NARS Radiant Creamy</li>
        <li>Blush: Makeup by Mario (cream)</li>
        <li>Mascara: Maybelline Sky High</li>
        <li>Lips: Dior Lip Glow</li>
      </ul>
    `,
    natural: `
      <h3>Natural 🌸</h3>
      <ul>
        <li>Foundation: Armani Luminous Silk</li>
        <li>Blush: Rare Beauty liquid</li>
        <li>Mascara: Glossier Lash Slick</li>
        <li>Lips: Fenty Gloss Bomb</li>
      </ul>
    `,
    evening: `
      <h3>Evening Glam ✨</h3>
      <ul>
        <li>Foundation: Estée Lauder Double Wear</li>
        <li>Contour: Rare Beauty</li>
        <li>Eyes: Huda Beauty palette</li>
        <li>Lips: MAC Satin</li>
      </ul>
    `,
    latina: `
      <h3>Latina 🔥</h3>
      <ul>
        <li>Foundation: Armani Luminous Silk</li>
        <li>Contour: Rare Beauty</li>
        <li>Blush: Makeup by Mario</li>
        <li>Lips: Fenty Heat</li>
      </ul>
    `,
    dark: `
      <h3>Dark Feminine 🖤</h3>
      <ul>
        <li>Foundation: Dior Matte</li>
        <li>Eyes: Smokey neutrals</li>
        <li>Lips: MAC Whirl</li>
      </ul>
    `,
    goth: `
      <h3>Goth ⛓</h3>
      <ul>
        <li>Foundation: Fenty Soft Matte</li>
        <li>Eyes: Black shadow</li>
        <li>Lips: MAC Diva</li>
      </ul>
    `
  };

  details.innerHTML = looks[type];
  details.classList.remove("hidden");
  details.scrollIntoView({ behavior: "smooth" });
}
