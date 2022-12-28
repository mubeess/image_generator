const express =require('express')
const generateImageController = require('../controllers/generateImageController')

const router=express.Router()

router.post('/',generateImageController)

module.exports= router