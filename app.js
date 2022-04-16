let express = require('express')
const path = require('path')
const app = express()

/*ENRUTADORES*/
const mainRouter = require('./routes/main')

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

/*MIDDLEWARES*/
app.use(express.static(path.join(__dirname, "../public")))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

/*RUTAS*/
app.use('/', mainRouter)



const PORT = 4000
app.listen(PORT, () => console.log(`Servidor levantado en puerto ${PORT}
http://localhost:${PORT}
`));