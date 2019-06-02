const { Router } = require('express')
const Add = require('./model')


const router = new Router()

router.get('/adds', (req, res, next) => {
  Add
    .findAll()
    .then(adds => {
      res.send({adds})
    })
    .catch(error => next(error))
})

router.get('/adds/:id', (req, res, next) => {
  Add
    .findByPk(req.params.id)
    .then(add => {
      if (!add) {
        return res.status(404).send({
          message: `add does not exist`
        })
      }
      return res.send(add)
    })
    .catch(error => next(error))
})

router.post('/adds', (req, res, next) => {
  Add
    .create(req.body)
    .then(add => {
      if (!add) {
        return res.status(404).send({
          message: `add does not exist`
        })
      }
      return res.status(201).send(add)
    })
    .catch(error => next(error))
})

router.put('/adds/:id', (req, res, next) => {
  Add
    .findByPk(req.params.id)
    .then(add => {
      if (!add) {
        return res.status(404).send({
          message: `add does not exist`
        })
      }
      return add.update(req.body).then(add => res.send(add))
    })
    .catch(error => next(error))
})

router.delete('/adds/:id', (req, res, next) => {
  Add
    .findByPk(req.params.id)
    .then(add => {
      if (!add) {
        return res.status(404).send({
          message: `add does not exist`
        })
      }
      return add.destroy()
        .then(() => res.send({
          add: `add was deleted`
        }))
    })
    .catch(error => next(error))
})

module.exports = router