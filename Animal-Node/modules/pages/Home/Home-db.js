const express = require('express');
const db = require('../../../db.js');
const header = require('../../parts/header/headercontroller');
const homecarousel= require('./carouselJ.json');
const homecard= require('./cardJ.json');

// const footer = require('../../parts/footer/footercontroller.js');



let Carousel =async ()=>{
  return await db.DBquery("SELECT * FROM `gallerylist` INNER JOIN `galleryitems` on `gallerylist`.`gallerylist-id`=`galleryitems`.`gallerylist-id` AND `gallerylist`.`gallerylist-id`=1")
}
let Card =async ()=>{
  return await db.DBquery("SELECT * FROM `gallerylist` INNER JOIN `galleryitems` on `gallerylist`.`gallerylist-id`=`galleryitems`.`gallerylist-id` AND `gallerylist`.`gallerylist-id`=2")
}

let Content =async ()=>{
  return JSON.parse('{"Carousel":'+JSON.stringify(await Carousel())+',"Card":'+JSON.stringify(await Card())+'}')
}

module.exports.HomePageJson = async() => {
  return ('{"Content":'+JSON.stringify(await Content())+'}')
}
