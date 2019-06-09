$(document).ready(function () {

	$("#btn").click(function (e) {
		e.preventDefault();
		// var stock = $("#stock").val();
		var check = $(this).closest("#stock").text().val();
		console.log(check);
		console.log("succ");
	});

	function getProducts() {
		$.get("/api/products", populateItems);
	}


	function populateItems(data) {
		for (let i = 0; i < data.length; i++) {
			var tableBody = $("#products");
			var tableContainer = $(["<tr>",
				"<th scope='row'></th>",
				"<td>", data[i].product_name, "</td>",
				"<td>", data[i].department_name, "</td>",
				"<td>", data[i].stock_quantity, "</td>",
				"<td>", data[i].price + "$", "</td>",
				"<td>", "<div class='form-group'>", "<input type='number' class='form-control' id='stock'/>",
				"</div>", "</td>", "<td>", "<button type='button' id='btn' class='btn btn-success'>", "<i class='fa fa-cart-plus'>", "</i>", "</button>", "</td>", "</tr>"
			].join(""))
			tableBody.append(tableContainer);
		};
	}
	getProducts();
});
