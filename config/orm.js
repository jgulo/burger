// Dependencies
// =============================================================
var connection = require("./connection.js");

//ORM

var table = "burgers";

var orm = {

	selectAll: function(callback){
		var queryString = "SELECT * FROM " + tableName + ";";
	    connection.query(queryString, function(err, result) {
	      if (err) {
	        throw err;
	      }
		    callback(result);
		  });
	},

	insertOne: function(callback){
		var queryString = "INSERT INTO " + table + " (burger_name, devoured) VALUES (?,?)";
	    connection.query(queryString, [
	      burger.burger_name, burger.devoured
	    ], function(err, result) {

	      callback(result);

	    });
	},

	updateOne: function(callback){
		var queryString = "UPDATE " + table + " SET devoured=? WHERE id=?";

	    connection.query(queryString, [
	      burger.devoured, burger.id
	    ], function(err, result) {

	      callback(result);

	    });
	}


}

module.exports = orm;