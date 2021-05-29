const DB = require('../../../db.js')
const footerJson = require('./footerJson.json');
let FooterJson = async()=> {
  return await DB.DBquery("SELECT * FROM `menuitems` WHERE `menulist`");
}

module.exports.HeaderPages= async ()=>{
  return JSON.parse('{"Navbar":'+JSON.stringify(await Navbar())+'}')
}
