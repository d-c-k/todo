const express = require('express');
const router = express.Router();

const Item = require('../models/Item');

router.get('/api/items', (req, res, next) => {
  Item.find()
    .then((data) => res.json(data))
    .catch(() => res.sendStatus(404));
});

router.get('/api/items/:id', (req, res, next) => {
  const id = req.params.id;
  Item.findOne({_id:id})
    .then((data) => res.json(data))
    .catch(() => res.sendStatus(404));
});

router.post('/api/items', (req, res, next) => {
  const { title, body } = req.body;
  const newItem = new Item({ title, body });

  newItem.save()
   .then(() => res.sendStatus(201))
   .catch(() => res.sendStatus(500));
});

//router.put('/api/items/:id', (req, res, next) => {
//  const id = parseInt(req.params.id);
//
//  req.body.title && ()
//})

module.exports = router;
