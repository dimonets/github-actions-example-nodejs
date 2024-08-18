const { app } = require('./app');

//const PORT = 8080;
const PORT = 80;
app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});