const express = require('express')
const app = express()
const path = require('path')
const port = 4000


app.use(express.static('public'))

app.get('/', (req, resp) => {
  resp.sendFile(path.join(__dirname, 'views/home.html'))
})

app.listen(port, () => {
  console.log(`Server listens on port ${port}`)
})