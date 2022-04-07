const {response, request} = require('express')

const usuariosGet = (req = request, res = response) => {

    const { nombre, limit, page = "1" } = req.query

    res.json({
        msg: "Get method -- controler",
        nombre,
        limit,
        page
    })
}

const usuariosPut = (req = request, res) => {

    const id = req.params.id

    res.json({
        msg: "Put method -- controler",
        id
    })
}

const usuariosPost = (req, res) => {
    const {nombre, edad}  = req.body
    res.json({
        msg: "Post method -- controler",
        nombre,
        edad
    })
}

const usuariosDelete = (req, res) => {

    const { id } = req.params

    res.json({
        msg: "Delete method -- controler",
        id
    })
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: "Patch method -- controler"
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}