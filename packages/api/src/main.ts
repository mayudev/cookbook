import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('as')
})

app.listen(process.env.API_PORT || 8080)
