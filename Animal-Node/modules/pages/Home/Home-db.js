const express = require('express');
const db = require('../../../db.js');
const header = require('../../parts/header/headercontroller');
const footer = require('../../parts/footer/footercontroller');
const homecarousel= require('./carouselJ.json');
const homecard= require('./cardJ.json');

// const footer = require('../../parts/footer/footercontroller.js');
//let Carousel =async ()=>{
//  return await db.DBquery("SELECT * FROM `gallerylist` INNER JOIN `galleryitems` on `gallerylist`.`gallerylist-id`=`galleryitems`.`gallerylist-id` AND `gallerylist`.`gallerylist-id`=2")
//}
let Card =async ()=>{
  return await db.DBquery("SELECT * FROM `gallerylist` INNER JOIN `galleryitems` on `gallerylist`.`gallerylist-id`=`galleryitems`.`gallerylist-id` AND `gallerylist`.`gallerylist-id`=1")
}
//'{"Carousel":'+JSON.stringify(await Carousel())+',
let Content =async ()=>{
  return JSON.parse('{"Card":'+JSON.stringify(await Card())+'}');
}

module.exports.HomePageJson = async() => {
  return JSON.parse('{"Content":'+JSON.stringify(await Content())
  +',"Header":'+JSON.stringify(await header.Header())
  +',"Footer":'+JSON.stringify(await footer.Footer())+'}');
}
