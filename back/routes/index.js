const express = require('express');
const router = express.Router();

const Item = require('../models/Item');

//-----Test section----
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
//-----End of test section----

router.get('/api/items', async(req, res, next) => {
  const items = await Item.find();
  res.json(items);
})

router.post('/api/items', async(req, res, next) => {
  const { title, body } = req.body;
  const newItem = new Item({ title, body });

  newItem.save();
  res.end();
})

//router.put('/api/items/:id', async(req, res, next) => {
//  const id = parseInt(req.params.id);
//
//  req.body.title && ()
//})

module.exports = router;
