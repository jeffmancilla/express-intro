// Load express
const express = require('express')
// Create our express app

const app = express()
// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
console.log(app)

const port = 3000
const routeHome = '/home'
const routeRoot = '/'
const routePage = '/page'
// Tell the app to listen on port 3000
// for HTTP requests from clients

app.set('view engine', 'ejs')

console.log(`building route ${routeRoot}`)
app.get(routeRoot, (req, res) => {
  console.log(`endpoint hit: ${routeRoot}`)
  res.send('<h1>stringHTML</h1>')
})
console.log(`building route ${routeHome}`)
app.get(routeHome, (req, res) => {
  console.log(`endpoint hit: ${routeHome}`)
  const arr = ['hello', 'there', 'amigo']
  const randomIdx = Math.floor(Math.random() * arr.length)
  const data = { message: arr[randomIdx], favNums: [1, 2, 3, 4, 37] }
  res.render('home', data)
  //   res.send(`<h1>Home Page</h1>`)
})

// configure a Route
// app
// GET method
// provide parameters
// - path (string)
// - callback

console.log(`starting server`)
app.listen(port, () => console.log(`listening on port ${port}`))
