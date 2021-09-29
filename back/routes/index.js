var express = require('express');
var router = express.Router();

const Item = require('../models/Item');
const Test = require('../models/Test');

router.get('/', async(req, res, next) => {
    const tests = await Test.find();
    res.json(tests);
});

router.post('/', async(req, res, next) => {
    const { name } = req.body;
    const newTest = new Test({ name })

    newTest.save();
    res.end();
})

module.exports = router;
