const cloudinary = require('cloudinary');
const dotenv = require('dotenv');

dotenv.config();

cloudinary.config({
  cloud_name: "chemareact",
  api_key: "381482912163929",
  api_secret: "JgSnPPHx860_oK74TJGG3nFhJfM"
})//configuro la conexion conc loudinary

exports.uploads = (file, folder) => {//subo el archivo que me llega
  return new Promise(resolve => {
    cloudinary.uploader.upload(file, (result) => {
      resolve({
        url: result.url,
        id: result.public_id//guardo la respuesta
      })
    }, {
      resource_type: "auto",
      folder: folder//lo guardo en la carpete
    })
  })
}