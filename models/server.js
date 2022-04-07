const express = require("express")
const cors = require('cors')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = 'api/usuarios'

        //middlewares
        this.middlewares()

        //mis routes
        this.routes()
    }

    middlewares() {
        //cors
        this.app.use(cors())

        //leer y parsear body
        this.app.use(express.json())

        //directorio publico
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use("/api/usuarios", require("../routes/usuarios"))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`app is running on http://localhost:${this.port}`)
        })
    }
}

module.exports = Server