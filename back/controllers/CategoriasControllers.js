const CategoriasController = {};
const { Producto, Categoria } = require("../models/index");

CategoriasController.buscarCategorias = (req, res) => {
  Categoria.findAll()
    .then(categoria => {
      res.json(categoria);
    })
    .catch(err => res.status(500).send(err));
};

CategoriasController.buscarProductosDeUnaCategoria = (req, res) => {
  Producto.findAll({
    where: { categoryId: req.params.id },
    include: [{ model: Categoria, as: "category" }]
  })
    .then(products => {
      res.json(products);
    })
    .catch(err => res.send(err));
};

CategoriasController.agregarUnaCategoria = (req, res) => {
  Categoria.create(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(err => res.send(err));
};

CategoriasController.eliminarUnaCategoria = (req, res) => {
  Categoria.destroy({ where: { id: req.params.id } })
    .then(() => {
      Categoria.findAll()
        .then(categories => {
          res.status(201).json(categories)
        })
    })
    .catch(err => res.send(err));
};

module.exports = CategoriasController;
