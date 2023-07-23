const express = require('express')
const app = express()
const port = 3000

let filteredCountries = require('./find_countries')
var cors = require('cors')
app.use(cors())
app.use(express.json())

app.get('/countries', (request, response) => {
    console.log("Dupa")
    console.log(request)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

