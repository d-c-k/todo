var express = require('express');
var router = express.Router();

const Item = require('../models/Item');
const Test = require('../models/Test');

router.get('/', async(req, res, next) => {
    const tests = await Test.find();
    res.json(tests);
});

module.exports = router;
