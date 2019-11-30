const router = require('express').Router()
const Item = require('./model')

router.get('/', (req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(err => res.json(err))
})

router.get('/:id', (req, res) => {
  Item.find({ id: req.params.id })
    .then(items => res.json(items))
    .catch(err => res.json(err))
})

router.post('/', (req, res) => {
  Item.create(req.body)
    .then(item => res.json(item))
    .catch(err => res.json(err))
})

router.patch('/:id', (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(item => res.json(item))
    .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.json(err))
})


module.exports = router