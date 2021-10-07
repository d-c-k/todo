const express = require('express');
const router = express.Router();

const Item = require('../models/Item');

router.get('/api/items', async(req, res, next) => {
  const items = await Item.find();
  if(!items){
    res.statusCode = 404;
    res.statusMessage = 'Not found';
    res.end('404 - Not found');
  }else{
    res.statusCode = 200;
    res.json(items);
  }
})

router.get('/api/items/:id', (req, res, next) => {
  const id = req.params.id;
  Item.findOne({_id:id})
    .then((data) => {
      res.json(data);
      res.sendStatus(200);
    })
    .catch(() => res.sendStatus(400));
})
//router.get('/api/items/:id', async(req, res, next) => {
//  const id = req.params.id;
//  if(!id){
//    res.statusCode = 500;
//    res.statusMessage = 'Invalid ID';
//    res.end('500 - Invalid ID')
//  }else{
//    const item = await Item.findOne({_id:id}, function(err, result) {});
//    if(!item){
//      res.statusCode = 404;
//      res.statusMessage = 'Not found';
//      res.end('404 - Not found');
//    }else{
//      res.statusCode = 200;
//      res.json(item);
//    }
//  }
//})

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
