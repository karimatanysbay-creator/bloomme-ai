const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🌸 BloomMe AI is live!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.use(express.json());

app.post("/analyze", (req, res) => {
  const { skinType, style } = req.body;

  const looks = [
    {
      name: "Soft Glam",
      steps: [
        "Увлажняющий крем",
        "Лёгкий тон",
        "Румяна",
        "Тушь",
        "Глянцевые губы"
      ]
    },
    {
      name: "Glowy Glam",
      steps: [
        "Сияющий праймер",
        "Тон с эффектом glow",
        "Хайлайтер",
        "Тушь",
        "Блеск для губ"
      ]
    }
  ];

  res.json({
    skinType,
    style,
    recommendations: looks
  });
});
app.use(express.json());

app.post("/analyze", (req, res) => {
  const { skinType, style } = req.body;

  const looks = [
    {
      name: "Soft Glam",
      steps: [
        "Увлажняющий крем",
        "Лёгкий тон",
        "Румяна",
        "Тушь",
        "Глянцевые губы"
      ]
    },
    {
      name: "Glowy Glam",
      steps: [
        "Сияющий праймер",
        "Тон с эффектом glow",
        "Хайлайтер",
        "Тушь",
        "Блеск для губ"
      ]
    }
  ];

  res.json({
    skinType,
    style,
    recommendations: looks
  });
});
