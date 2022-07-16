const fs = require('fs')
const path = require('path')

function pegarDadosDoBanco(filename) {
  const filePath = path.join(__dirname, '..', 'database', 'models' `${filename}.js`)
  const readFromFile = fs.readFileSync(filePath, 'utf-8')
  const infos = JSON.parse(readFromFile)
  
  return infos
}

module.exports = pegarDadosDoBanco
