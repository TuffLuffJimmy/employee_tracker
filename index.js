const express = require('express')
const { join } = require('path')
const moment = require('moment')
const mysql = require('mysql2')

mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'rootroot',
  database: 'class_db'
})

const app = express()

// logs each request
const logger = (req, res, next) => {
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`)
  next()
}

// init middleware
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger)

app.listen(process.env.PORT || 3000, () => console.log('http://localhost:3000'))