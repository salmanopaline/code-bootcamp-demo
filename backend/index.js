const express = require('express')
const bodyParser = require('body-parser');

// const tasks = require('./tasks')

const app = express()
app.use(bodyParser.json());

const port = 4000

app.get('/', (req, res) => res.send('Hello World'))
app.get('/tasks', (req, res) => res.send("Create a new task"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
