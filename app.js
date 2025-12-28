import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("BloomMe AI is alive 🌸");
});

app.post("/analyze", (req, res) => {
  const { skin, style } = req.body;

  const looks = [
    {
      name: "Soft Glam Glow",
      description: "Сияющая кожа, лёгкий контуринг, розовый блеск",
      steps: [
        "Увлажняющий крем",
        "Лёгкий тон",
        "Кремовый румянец",
        "Глянцевые губы"
      ]
    },
    {
      name: "Clean Chic",
      description: "Чистая кожа, минимум макияжа, свежесть",
      steps: [
        "Праймер",
        "BB-крем",
        "Тушь",
        "Бальзам для губ"
      ]
    },
    {
      name: "Evening Glam",
      description: "Вечерний образ с акцентом на губы",
      steps: [
        "Матирующая база",
        "Плотный тон",
        "Контуринг",
        "Красная помада"
      ]
    }
  ];

  res.json({
    skin,
    style,
    recommendations: looks
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("BloomMe AI server running on port " + PORT);
});
