var db = require("../models");

module.exports = function(app) {
	// Get for all products
	app.get("/api/products/", function(req, res) {
		db.Product.findAll({}).then(function(dbProduct) {
			res.json(dbProduct);
		});
	});

	// Get route for retrieving a single product
	app.get("/api/products/:id", function(req, res) {
		db.Product.findOne({
			where: {
				id: req.params.id
			}
		}).then(function(dbProduct) {
			res.json(dbProduct);
		});
	});

	// POST route for saving a new product
	app.post("/api/products", function(req, res) {
		console.log(req.body);
		db.Product.create({
			product_name: req.body.product_name,
			department_name: req.body.department_name,
			price: req.body.price,
			stock_quantity: req.body.stock_quantity
		}).then(function(dbProduct) {
			res.json(dbProduct);
		});
	});

	// DELETE route for deleting posts
	app.delete("/api/products/:id", function(req, res) {
		db.Product.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(dbProduct) {
			res.json(dbProduct);
		});
	});
};
