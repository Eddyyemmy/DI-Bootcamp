--Exercise 1: DVD Rental
-- Get a list of all film languages.

-- select film.title, language.name as name
-- from film
-- inner join language
-- on film.film_id =  language.language_id



-- Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:
-- Get all films, even if they don’t have languages.
-- Get all languages, even if there are no films in those languages.

-- select film.title, film.description, language.name as name
-- from film
-- full outer join language
-- on film.film_id =  language.language_id


-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
-- create table new_film (
-- 	new_film_id serial primary key not null,
-- 	name varchar(255)
-- )


-- insert into new_film (name) values('avater'), ('lord of the rings'),
-- ('monster'),('jungle book'),('the lost tresure'),('mr president'),('fallen')

-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.

-- create table customer_review(
-- 	review_id serial not null primary key,
-- 	new_film_id int references new_film (new_film_id),
-- 	language_id int references language (language_id),
-- 	title varchar(255),
-- 	score int,
-- 	review_text text,
-- 	last_update varchar(255)
-- )

-- insert into customer_review (new_film_id, language_id, title, score, review_text, last_update)
-- values ((select new_film_id from new_film where new_film_id = 3),
-- 		(select language_id from language where language_id = 3), 'This second review', 6,'the movie is satisfactory', '2022-3-5')
-- select * from customer_review

-- delete from new_film
-- where name = 'avater'
-- ERROR:  update or delete on table "new_film" violates foreign key constraint "customer_review_new_film_id_fkey" on table "customer_review"
-- DETAIL:  Key (new_film_id)=(1) is still referenced from table "customer_review".
-- SQL state: 23503


-- Exercise 2 : DVD Rental
-- Instructions
-- Use UPDATE to change the language of some films. Make sure that you use valid languages.

-- update language set name = 'Yoruba' where name='Mandarin'

-- Which foreign keys (references) are defined for the customer table? 
-- How does this affect the way in which we INSERT into the customer table?

-- answer
-- store_id, address_id are defined as foreign key
-- store_id, address_id had to be selected in the insert querry

-- We created a new table called customer_review. Drop this table. 
-- Is this an easy step, or does it need extra checking?

-- drop table customer_review
-- answer: It is an easy step








-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).

-- select title, rating from film 
-- inner join inventory
-- on  film.film_id=inventory.inventory_id
-- inner join rental
-- on inventory.inventory_id = rental.rental_id

-- where rental_date = null



-- you need to find the movies which their return date is "null".
-- hint:
-- you will need to join tables film, inventory, rental with their common  thing.



-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, 
-- but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.


-- select * from actor 
-- inner join film 
-- on actor.actor_id = film.film_id
-- where first_name = 'Penelope' and last_name ='Monroe'


-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.

-- select * from film where rating = 'R'

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, 
-- and he returned it between the 28th of July and the 1st of August, 2005.

-- select * from customer
-- inner join rental
-- on customer.customer_id = rental.rental_id
-- inner join payment 
-- on rental.rental_id = payment.customer_id
-- where first_name = 'Matthew' ANd amount = 4.99


-- The 4th film : His friend Matthew Mahan watched this film, as well. 
-- It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.


-- select * from customer 
-- inner join film
-- on customer.customer_id = film.film_id
-- inner join rental
-- on film.film_id = rental.rental_id
-- where description like '%Boat%' or title like '%Boat%' 

































