const express = require('express')
const app = express()
const port = process.env.port || 2266

app.get('/', (req, res) => {
  res.send('Hello Sailor, have a maritime day, - you illiterate s.o.b.!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})