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
  Item.findById(id)
    .then((data) => res.json(data))
    .catch(() => res.sendStatus(404));
});

router.post('/api/items', (req, res, next) => {
  const { title, body } = req.body;
  const newItem = new Item({ title, body });

  if(!title){
    res.status(400).json({errorMessage: 'Todo-item requires a title'});
  }else if(!body){
    res.status(400).json({errorMessage: 'Todo-item requires a body'});
  } else {
    newItem.save()
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
  };
});

router.post('/api/items/:id', (req, res, next) => {
  const id = req.params.id;
  const { title, body } = req.body;

  if(!title){
    res.status(400).json({errorMessage: 'Todo-item requires a title'});
  }else if(!body){
    res.status(400).json({errorMessage: 'Todo-item requires a body'});
  } else {
    Item.findByIdAndUpdate(id, { title, body })
      .then(() => res.sendStatus(202))
      .catch(() => res.sendStatus(400));
  };
});

router.delete('/api/items/:id', (req, res, next) => {
  const id = req.params.id;

  Item.findByIdAndDelete(id)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(400));
});

module.exports = router;
