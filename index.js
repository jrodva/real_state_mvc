import express from 'express'

const PORT = 3000

const app = express()

app.get('/', function(req, res) {
  res.send('Hello world from express')
})

app.get('/us', function(req, res) {
  res.send('We are')
})

app.get('/json', function(req, res) {
  res.send({ msg: 'Hello world from express' })
})

app.get('/template', function(req, res) {
  res.render('<p>Hello world from express</p>')
})

app.listen(PORT, () => {
  console.log('Running app');
})
