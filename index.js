const app = require("./app");
const PORT = require("./config/config").dev.PORT;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
