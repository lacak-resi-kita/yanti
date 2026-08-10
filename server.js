const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Server tracking resi aktif"
  });
});

app.get("/api/track", (req, res) => {
  const resi = req.query.resi || null;

  res.json({
    success: true,
    message: "Endpoint tracking aktif",
    resi: resi
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
