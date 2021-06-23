const servicesdb = require('./Services-db.js')


module.exports.ServicesPage = async (req, res) => {
   res.json(await servicesdb.ServicesPage());
}
