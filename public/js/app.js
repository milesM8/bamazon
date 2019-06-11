$(document).ready(function () {

	$(document).on("click", "button", addtoCart);
	$(document).on("click", "button", add$);

	function addtoCart() {

		var name = $(this).closest("tr").children("#name").text();
		var stock = $(this).closest("tr").children("#stockNum").text();
		var price = $(this).closest("tr").children("#price").text();
		var chosenStock = $(this).closest("tr").find("#stock").val();
		var priceTimesStock = (parseFloat(price) * chosenStock).toFixed(2);

		if (chosenStock > stock) {
			alert("Insufficient Quantity");
			return;
		}

		var tableBody = $("#cart");
		var tableContainer = $(["<tr>",
			"<th scope='row'></th>",
			"<td id='name2'>", name, "</td>",
			"<td id='stockNum2'>", chosenStock, "</td>",
			"<td id='price2'>", priceTimesStock + "$", "</td>"].join(""));
		tableBody.append(tableContainer);
		$("#totalPrice").text(runningTotal(priceTimesStock));	
		
	}

	function add$() {
		var totalPrice = $("#totalPrice").text();
		if (totalPrice != "") {
			$("#totalPrice").append("$");
		}
	}

	var runTotal = [];

	function runningTotal(incomingPrice) {
		let sum = 0;
		runTotal.push(incomingPrice);
		for (let i = 0; i < runTotal.length; i++) {
			sum += parseFloat(runTotal[i]);
		}
		return sum;
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
				"<td id='stockChoice'>", "<div class='form-group'>", "<input type='number' class='form-control' id='stock'/>",
				"</div>", "</td>", "<td>", "<button type='button' id='btn' class='btn btn-success'>", "<i class='fa fa-cart-plus'>", "</i>", "</button>", "</td>", "</tr>"
			].join(""))
			tableBody.append(tableContainer);
		};
	}
	getProducts();
});
