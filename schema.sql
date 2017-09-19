
DROP DATABASE IF EXISTS Bamazon;
CREATE DATABASE Bamazon;

USE Bamazon;

DROP TABLE IF EXISTS products;
CREATE TABLE products (
    item_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
     product_name VARCHAR(50) NOT NULL,
     departmant_name VARCHAR (50) NOT NULL,
      stock_quantity INT(11) NOT NULL,
       price DECIMAL(10, 2) NOT NULL
       );

INSERT INTO products (product_name, departmant_name, stock_quantity, price) VALUES ('bananas', 'fruit', 100, 3.50);
INSERT INTO products (product_name, departmant_name, stock_quantity, price) VALUES ('apples', 'fruit', 300, 2.00);
INSERT INTO products (product_name, departmant_name, stock_quantity, price) VALUES ('oranges', 'fruit', 500, 3.00);
INSERT INTO products (product_name, departmant_name, stock_quantity, price) VALUES ('milk', 'dairy', 500, 3.00);
INSERT INTO products (product_name, departmant_name, stock_quantity, price) VALUES ('cheese', 'dairy', 300, 3.00);
INSERT INTO products (product_name, departmant_name, stock_quantity, price) VALUES ('yogurt', 'dairy', 100, 1.00);
INSERT INTO products (product_name, departmant_name, stock_quantity, price) VALUES ('shampoo', 'hair', 250, 4.00);
INSERT INTO products (product_name, departmant_name, stock_quantity, price) VALUES ('conditioner', 'hair', 200, 4.00);
INSERT INTO products (product_name, departmant_name, stock_quantity, price) VALUES ('hair gel', 'hair', 100, 3.00);
INSERT INTO products (product_name, departmant_name, stock_quantity, price) VALUES ('hair spray', 'hair', 100, 3.00);
