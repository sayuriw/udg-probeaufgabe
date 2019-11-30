const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  Hauptartikelnr: Number,
  Artikelname: String,
  Hersteller: Object,
  Beschreibung: String,
  Materialangaben: String,
  Geschlecht: String,
  Produktart: String,
  Ärmel: String,
  Bein: String,
  Kragen: String,
  Herstellung: String,
  Taschenart: String,
  Grammatur: String,
  Material: String,
  Ursprungsland: String,
  Bildname: String,
})


const Item = mongoose.model('Item', itemSchema)



module.exports = Item