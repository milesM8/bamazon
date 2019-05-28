$(document).ready(function() {
	$("button").click(function() {
		var id = $(this).attr("id");
		switch (id) {
			case "btn1":
				console.log("Oranges are $0.59 a pound.");
				break;
			case "btn2":
				console.log("Oranges are $0.59 a pound.");
				break;
			case "btn3":
				console.log("Oranges are $0.59 a pound.");
				break;
			case "btn4":
				console.log("Oranges are $0.59 a pound.");
				break;
			case "btn5":
				console.log("Oranges are $0.59 a pound.");
				break;
			case "btn6":
				console.log("Oranges are $0.59 a pound.");
				break;
			case "btn7":
				console.log("Oranges are $0.59 a pound.");
				break;
			case "btn8":
				console.log("Oranges are $0.59 a pound.");
				break;
			case "btn9":
				console.log("Oranges are $0.59 a pound.");
				break;
			case "btn10":
				console.log("Oranges are $0.59 a pound.");
				break;
			default:
				console.log("Sorry, we are out of " + id + ".");
		}
	});

	function populateItems() {
		$.get("/api/posts", function(data) {
			console.log("Products", data);
			products = data;

			var id = $("<div>").attr("id");
			switch (id) {
				case "row1":
					$("#row1").append(
						`<td>${data[0].product_name}</td>
						<td>${data[0].department_name}</td>
						<td>${data[0].price}</td>
						<td>${data[0].stock_quantity}</td>`
					);
					break;
				case "row2":
					$("#row2").append(
						`<td>${data[1].product_name}</td>
						<td>${data[1].department_name}</td>
						<td>${data[1].price}</td>
						<td>${data[1].stock_quantity}</td>`
					);
					break;
				case "row3":
					$("#row3").append(
						`<td>${data[2].product_name}</td>
						<td>${data[2].department_name}</td>
						<td>${data[2].price}</td>
						<td>${data[2].stock_quantity}</td>`
					);
					break;
				case "row4":
					$("#row4").append(
						`<td>${data[3].product_name}</td>
						<td>${data[3].department_name}</td>
						<td>${data[3].price}</td>
						<td>${data[3].stock_quantity}</td>`
					);
					break;
				case "row5":
					$("#row5").append(
						`<td>${data[4].product_name}</td>
						<td>${data[4].department_name}</td>
						<td>${data[4].price}</td>
						<td>${data[4].stock_quantity}</td>`
					);
					break;
				case "row6":
					$("#row6").append(
						`<td>${data[5].product_name}</td>
						<td>${data[5].department_name}</td>
						<td>${data[5].price}</td>
						<td>${data[5].stock_quantity}</td>`
					);
					break;
				case "row7":
					$("#row7").append(
						`<td>${data[6].product_name}</td>
						<td>${data[6].department_name}</td>
						<td>${data[6].price}</td>
						<td>${data[6].stock_quantity}</td>`
					);
					break;
				case "row8":
					$("#row8").append(
						`<td>${data[7].product_name}</td>
						<td>${data[7].department_name}</td>
						<td>${data[7].price}</td>
						<td>${data[7].stock_quantity}</td>`
					);
					break;
				case "row9":
					$("#row9").append(
						`<td>${data[8].product_name}</td>
						<td>${data[8].department_name}</td>
						<td>${data[8].price}</td>
						<td>${data[8].stock_quantity}</td>`
					);
					break;
				case "row10":
					$("#row10").append(
						`<td>${data[9].product_name}</td>
						<td>${data[9].department_name}</td>
						<td>${data[9].price}</td>
						<td>${data[9].stock_quantity}</td>`
					);
					break;
				default:
					console.log("oops");
			}
		});
	}

	// populateItems();
});
