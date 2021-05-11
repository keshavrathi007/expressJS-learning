const express = require('express')
const path = require("path")
const app = express()
const hbs = require('hbs')
const port = process.env.PORT || 3000
/*In many environments (e.g. Heroku), and as a convention, you can set the environment variable PORT to tell your web server what port to listen on.

So process.env.PORT || 3000 means: whatever is in the environment variable PORT, or 3000 if there's nothing there. */

//public static path
const static_path = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../templates/views")
const navbar_partial = path.join(__dirname, "../templates/partials")


app.set('view engine', 'hbs');//template engine in use as we cannot get the page by using localhost:3000/about we have to write localhost:3000/about.html so to avoid it
app.set('views', template_path)
hbs.registerPartials(navbar_partial, function (err) { });
app.use(express.static(static_path))

//routing
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    // res.send('About Page!')
    res.render("about")
})
app.get('/weather', (req, res) => {
    // res.send('About Page!')
    res.render("weather")
})


app.get('*', (req, res) => {
    res.render('404error')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})