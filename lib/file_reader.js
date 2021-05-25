const fs = require('fs')
var path = require('path');
const data_file_path = path.join(__dirname, 'pokemons.json')

function getAll() {
  return JSON.parse(fs.readFileSync(data_file_path, 'utf8', 'r'));
}

function getById(id) {
  const all =JSON.parse(fs.readFileSync(data_file_path, 'utf8', 'r'));
  return all.filter(poke=>poke.id==id);
}

module.exports = {
  getAll: getAll,
  getById: getById
}