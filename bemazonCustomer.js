//NPM packages required
var mysql = require('mysql');
var Table = require('cli-table');
var inquirer = require('inquirer');
//Sql connection
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'Bamazon'
});

connection.connect();
//runs election of items
function buyProduct(item_id, amount) {
	connection.query('SELECT * FROM products WHERE item_id = ?', [item_id], function(err, result) {
		if ( err ) return console.log(err);
		var diff = result[0].stock_quantity - Number(amount);

		if ( diff < 0 ) {
			console.log('There are not enough ' + result[0].product_name + ' in stock');
			getProducts();
		} else {
			connection.query('UPDATE products SET stock_quantity = ? WHERE item_id = ?', [diff, item_id], function(err, result) {
				if ( err ) return console.log(err);

				getProducts();
			});
		}
	});
}
//inquirer runs asking questions. Ensures inserts an integer
function promptUser() {
	inquirer.prompt([
		{
			name: 'item_id',
			message: 'What product item id?',
			validate: function(value) {
				if (Number(value)%1 === 0){
					return true;

				}
				return 'Please input a interger!';
			}
		},
		{
			name: 'amount',
			message: 'How many do you want?'
		}
	]).then(function(answers) {
		buyProduct(answers.item_id, answers.amount);
	});
}
//Constructions of CLI-table
function getProducts() {
	connection.query('SELECT * FROM products', function(err, results) {
		if ( err ) return console.log(err);
		var table = new Table({
		    head: ['Item Id', 'Product Name', 'Departmant Name', 'Stock Quantity', 'Price']
		});
//pushes results to the table
		results.forEach(function(obj) {
			table.push([obj.item_id, obj.product_name, obj.departmant_name, obj.stock_quantity, '$' + obj.price]);
		});

		console.log(table.toString());
		promptUser();
	});
}

getProducts();