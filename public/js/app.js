$(document).ready(function () {

	$(document).on("click", "button", addtoCart);

	function addtoCart(j) {
		j.preventDefault();
		var name = $(this).closest("tr").children("#name").text();
		var stock = $(this).closest("tr").children("#stockNum").text();
		var price = $(this).closest("tr").children("#name").text();

	}

	function getProducts() {
		$.get("/api/products", populateItems);
	}


	function populateItems(data) {
		for (let i = 0; i < data.length; i++) {
			var tableBody = $("#products");
			var tableContainer = $(["<tr>",
				"<th scope='row'></th>",
				"<td id='name'>", data[i].product_name, "</td>",
				"<td id='department'>", data[i].department_name, "</td>",
				"<td id='stockNum'>", data[i].stock_quantity, "</td>",
				"<td id='price'>", data[i].price + "$", "</td>",
				"<td>", "<div class='form-group'>", "<input type='number' class='form-control' id='stock'/>",
				"</div>", "</td>", "<td>", "<button type='button' id='btn' class='btn btn-success'>", "<i class='fa fa-cart-plus'>", "</i>", "</button>", "</td>", "</tr>"
			].join(""))
			tableBody.append(tableContainer);
		};
	}
	getProducts();
});
