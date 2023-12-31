const express = require('express')
const app = express()
const port = 3000

let filteredCountries = require('./find_countries')
var cors = require('cors')
app.use(cors())
app.use(express.json())

app.get('/countries', (request, response) => {
    const searchSubstring = request.query.search
    response.send(filteredCountries(searchSubstring))
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

