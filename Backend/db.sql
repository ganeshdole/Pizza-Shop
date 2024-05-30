-- Create pizzashop database
create database if not exists pizzashop;
use pizzashop;

-- Create user table
create table if not exists user (
    id INT primary key auto_increment,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create pizza table
create table if not exists pizza (
    id INT primary key auto_increment,
    name VARCHAR(50),
    description VARCHAR(1024),
    price DECIMAL(10,2),
    image VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create orderMaster table
create table if not exists orderMaster (
    id INT primary key auto_increment,
    userId INT,
    totalAmount DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    foreign key (userId) references user(id)
);

-- Create orderDetail table
create table if not exists orderDetail (
    id INT primary key auto_increment,
    orderId INT,
    pizzaId INT,
    quantity INT,
    totalAmount DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    foreign key (orderId) references orderMaster(id),
    foreign key (pizzaId) references pizza(id)
);
