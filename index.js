const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { initializeDBConnection } = require("./db/db.connect");
const quiz = require("./routes/quiz.router");

app.use(bodyParser.json());
app.use(cors());



initializeDBConnection();







app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.use("/quiz", quiz);



app.listen(3000, () => {
  console.log('server started');
});