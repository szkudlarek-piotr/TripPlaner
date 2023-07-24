const fs = require('fs')
const path = require('path')
const countriesPath =path.join(process.cwd(), 'countries.json')
const countries_file = fs.readFileSync(countriesPath, 'utf8')
let countriesArr =  JSON.parse(countries_file)
function FilterIt(substring){
    let stringifiedSubsting = String(substring)
    let filteredArray = []
    let typeOfSubstring = typeof(stringifiedSubsting)
    let capitalizedSubstring = stringifiedSubsting.toUpperCase()
    for (let i = 0; i<251;i++){
        let checkedCountry = countriesArr[i]
        let countryName = checkedCountry.name
        let countryCode = checkedCountry.alpha_2
        let capitalizedName = countryName.toUpperCase()
        if (capitalizedName.includes(capitalizedSubstring)) {
            let flagToAdd = countryCode.toLowerCase()+'.png'
            let objToPush = {"name": countryName, "flag": flagToAdd, "code": countryCode}
            filteredArray.push(objToPush)
        }
    }
    const returnedArray = JSON.stringify(filteredArray)
    return returnedArray
}
module.exports = FilterIt
