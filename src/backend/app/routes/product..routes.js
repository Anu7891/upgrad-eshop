const { Router } = require("express");

module.exports = (app) => {
    const productController = require("../controllers/product.controller");

    const router = require("express").Router();

    //SignUp route a new user 

    router.get('/products', productController.getAllProducts);
    app.use("/api", router);

}