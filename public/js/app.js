$(document).ready(function () {

	$(document).on("click", "#btn", addtoCart);
	// $(document).on("click", "#checkoutButton", modalTotal);

	function addtoCart() {

		var stockbox = $(this).closest("tr").find("#stockChoice")
		var name = $(this).closest("tr").children("#name").text();
		var stock = $(this).closest("tr").children("#stockNum").text();
		var price = $(this).closest("tr").children("#price").text();
		var chosenStock = $(this).closest("tr").find("#stock").val();
		var priceTimesStock = (parseFloat(price) * chosenStock).toFixed(2);

		// console.log(chosenStock, "chosenSTock")
		// console.log(priceTimesStock, "pricexStock")

		if (chosenStock > parseInt(stock)) {
			alert("Insufficient Quantity");
			return;
		}

		if (stockbox.is(':empty')) {
			return;
		}

		var tableBody = $("#cart");
		var tableContainer = $(["<tr>",
			"<th style='display: none' scope='row'></th>",
			"<td id='name2'>", name, "</td>",
			"<td id='stockNum2'>", chosenStock, "</td>",
			"<td id='price2'>", priceTimesStock + "$", "</td>"].join(""));
		tableBody.prepend(tableContainer);
		$("#totalPrice, #modalTotal").text(runningTotal(priceTimesStock));	
		stockbox.empty();
		console.log(runTotal)
	}

	var runTotal = [];

	function runningTotal(incomingPrice) {
		let sum = 0;
		runTotal.push(incomingPrice);
		for (let i = 0; i < runTotal.length; i++) {
			sum += parseFloat(runTotal[i]);
		}
		return sum + "$";
	}

	function getProducts() {
		$.get("/api/products", populateItems);
	}

	function populateItems(data) {
		for (let i = 0; i < data.length; i++) {
			var tableBody = $("#products");
			var tableContainer = $(["<tr>",
				"<th style='display: none' scope='row'></th>",
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
	$('#reload').click(function () {
		location.reload();
	});

	getProducts();
});
