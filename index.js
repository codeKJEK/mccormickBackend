const app = require("express")();
const PORT = 8080;

const family = require("./family.json");

app.listen(PORT, () => console.log(`server running on ${PORT}`));

app.get("/family", (req, res) => {
  res.status(200).send(family);
});

app.post("/family:id", (req, res) => {
  const { id } = req.params;
  const { member } = req.body;
});
