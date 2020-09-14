const app = require("./securum");
const PORT = process.argv[2] || process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) return console.log("Error: ", err);
  console.log(`Listening On Port: ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
