const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.setHeader("set-cookie", ["setfromserver=1"])
    res.sendFile(`${__dirname}/index.html`)
})

app.get('/path1', (req, res) => {
  // res.cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true })
  res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true })
  res.send(`Path1: I have been sent these cookies: ${req.headers.cookie}`)
})

app.get('/path2', (req, res) => {
  res.clearCookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true })
  res.clearCookie('setfromserver', '1')
  res.send(`Path2: I have been sent these cookies: ${req.headers.cookie}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
