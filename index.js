const express = require("express")

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hallo Welt Update 4</h1>')
});

app.listen(5000, () => {
  console.log('App listening on port 5000!')
})