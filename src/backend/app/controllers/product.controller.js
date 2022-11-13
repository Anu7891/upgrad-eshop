const { Product } = require('../models')

const getAllProducts = (req, res) => {

    if (req.query.status === undefined) {
        Product.find().then(data => {
            res.status(200).json({ success: true, productData: data })
        }).catch((err) => {
            res.status(500).json({ success: false, msg: err })
        })
        return;
    }

}




module.exports = { getAllProducts };