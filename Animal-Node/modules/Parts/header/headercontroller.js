const express = require('express')
const HeaderDB = require('./Headerdb')



module.exports.Header = async (req,res)=>{
  return(await HeaderDB.HeaderPages());
}
