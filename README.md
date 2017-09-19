# Bamazon

Description

This application implements a simple command line based storefront using the npm inquirer package and the MySQL database backend together with the npm mysql package. The application runs a customer interface. The NPM package cli-table creates the table to demonstrate it works. 

MySQL Database Setup

In order to run this application, you should have the MySQL database already set up on your machine. If you don't, visit the MySQL installation page to install the version you need for your operating system. Once you have MySQL isntalled, you will be able to create the Bamazon database and the products table with the SQL code found in schema.sql.

Customer Interface

The customer interface allows the user to view the current inventory of store items: item IDs, product, department, stock quantity, and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available it informs the client.


