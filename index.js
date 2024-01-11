import express from 'express'
import userRouter from './routes/user.js'

const PORT = 3000

const app = express()

app.use('/', userRouter)

app.listen(PORT, () => {
  console.log('Running app')
})
