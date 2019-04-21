const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/login', (req, res) => res.json({'name' : 'Being Zero', 'age' : '2 years'}))

app.get('/loginnow', (req, res) => res.send('index.html'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
