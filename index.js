const express = require('express')

const app = express()

app.get('*', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.status(200).send(`
        <h1>where can we go today</h1>
        
        <h2>Kent</h2>
        <h3>visit <a href="https://www.visitkent.com/">kent</a></h3>
        <h3>visit <a href="https://www.visitkent.com/explore/towns">kent map</a></h3>
        <h3>visit <a href="https://www.visitsoutheastengland.com/events/whats-on-in-kent">kent whats on</a></h3>

        <h2>Surrey</h2>
        <h3>visit <a href="https://www.visitsurrey.com/">surrey</a></h3>
        <h3>visit <a href="https://www.visitsurrey.com/explore/towns">surrey map</a></h3>
        <h3>visit <a href="https://www.visitsoutheastengland.com/events/whats-on-in-surrey">surrey whats on</a></h3>

        <h2>Sussex</h2>
        <h3>visit <a href="https://www.visitsoutheastengland.com/places-to-visit/sussex">sussex</a></h3>
        <h3>visit <a href="https://www.visitsoutheastengland.com/places-to-visit/sussex/map">sussex map</a></h3>
        <h3>visit <a href="https://www.visitsoutheastengland.com/events/whats-on-in-sussex">sussex whats on</a></h3>

	2022
    `)
})

module.exports = app

if (process.env.DEBUG) app.listen(3000)
