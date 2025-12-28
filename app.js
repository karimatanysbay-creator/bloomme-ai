app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>BloomMe AI</title>
      <link rel="stylesheet" href="style.css" />
    </head>
    <body>
      <div class="card">
        <h1>BloomMe 🌸</h1>
        <p>
          Upload a photo — BloomMe will suggest makeup styles that match your skin tone and vibe.
        </p>
        <button>Upload photo</button>
      </div>
    </body>
    </html>
  `);
});
