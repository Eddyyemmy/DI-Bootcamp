-- Part I

-- create table customer(
-- 	customer_id serial primary key,
-- 	first_name varchar(255) not null,	
-- 	last_name varchar(255) not null
-- )

-- insert into customer(first_name, last_name)
-- values ( 'John', 'Doe'), ('Jerome', 'Lalu'), ('Lea', 'Rive')

-- create table customer_profile(
--  customer_profile_id serial primary key,
-- 	isLoggedIn boolean default false,
-- 	customer_id int references customer(customer_id)
-- )

-- insert into customer_profile (isLoggedIn, customer_id ) 
-- values('True', 1), ('False', 2)

-- select first_name, isLoggedin from customer
-- inner join customer_profile
-- on customer.customer_id = customer_profile.customer_id

-- select first_name, isLoggedin from customer
-- inner join customer_profile
-- on customer.customer_id = customer_profile.customer_id

-- select count(first_name)+1 from customer
-- inner join customer_profile
-- on customer.customer_id = customer_profile.customer_id


-- select first_name, isLoggedin from customer
-- inner join customer_profile
-- on customer.customer_id = customer_profile.customer_id
-- where isloggedin = false



-- Part II

-- create table book(
-- 	book_id serial primary key,
-- 	title varchar(255) not null,
-- 	author varchar(255) not null
-- )

-- insert into book(title, author) 
-- values('Alice In Wonderland', 'Lewis Carroll'),
-- 	('Harry Potter', 'J.K Rowling'),
-- 	('To kill a mockingbird', 'Harper Lee')

-- create table student(
-- 	student_id serial primary key,
-- 	name varchar(255) not null unique,
-- 	age bigint
-- )

-- insert into student(name, age) 
-- values('John', 12),
-- 	('Lera', 11),
-- 	('Patrick', 10),
-- 	('Bob', 14)


-- create table library(
-- 	library_id serial primary key,
-- 	book_fk_id int references book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	student_fk_id int references student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	borrowed_date timestamp
-- )

-- insert into library (book_fk_id, student_fk_id, borrowed_date) 
-- values(3, 4, '2021-03-03'),
-- (3, 2, '2021-05-23'),
-- (2, 4, '2021-08-12')