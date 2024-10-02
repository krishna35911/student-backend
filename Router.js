const express = require('express');
const controller=require('./controller')
const router = new express.Router();

router.post('/addstudent',controller.addstudents)
router.get('/getstudents',controller.allstudents)
router.get('/getstudentsbyid/:id',controller.allstudentsbyid)
router.delete('/deletestudent/:id',controller.deletestudents)
router.put('/editstudent/:id',controller.editstudent)

module.exports = router;
