const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const usersRouter = require('./routes/users')
const contactsRouter = require('./routes/contacts')


const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/contacts', contactsRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const status = err.status || 500 
  res.status(status).json({ status: status === 500 ? 'fail': 'eror',code: status, message: err.message })
})

module.exports = app
