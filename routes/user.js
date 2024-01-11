import express from 'express'

const userRouter = express.Router()

userRouter.get('/', function(req, res) {
  res.send('Hello world from express')
})

userRouter.get('/us', function(req, res) {
  res.send('We are')
})

userRouter.get('/json', function(req, res) {
  res.send({ msg: 'Hello world from express' })
})

export default userRouter
