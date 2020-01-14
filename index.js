const express = require('express')

const app = express()

app.get('*', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.status(200).send(`
        <h1>Hello from ZEIT NOW path '/' on Now 2.0!</h1>
        <h2>Go to <a href="/about">/about</a></h2>
    `)
})

if (process.env.DEBUG) app.listen(3000)
