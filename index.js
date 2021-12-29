const express = require("express")

const app = express()

app.get('/app', (req, res) => {
  res.send('<h1>Hallo Welt Update 6</h1>')
});

app.listen(5000, () => {
  console.log('App listening on port 5000!')
})