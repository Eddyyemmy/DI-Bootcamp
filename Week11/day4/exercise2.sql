-- select *  from customer

-- select first_name, last_name 
-- from customer
-- AS full_name

-- SELECT
-- DISTINCT create_date 
-- FROM customer

-- SELECT * FROM customer
-- ORDER BY first_name DESC

-- SELECT film_id, title, description, release_year 
-- FROM film
-- ORDER BY rental_rate ASC

-- SELECT address, phone, district 
-- FROM address
-- WHERE district = 'Texas'

-- SELECT * FROM film
-- WHERE film_id=15 or film_id=150

-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE description ='A Fateful Reflection of a Moose And a Husband who must Overcome a Monkey in Nigeria'

-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE rental_rate <= 0.99
-- limit 10

-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE rental_rate <= 0.99
-- OFFSET 11 LIMIT 10

-- SELECT * 
-- FROM customer
-- JOIN payment ON customer.customer_id = payment.payment_id;

-- SELECT * FROM payment
-- SELECT * FROM customer



-- SELECT * FROM inventory
-- 	JOIN inventory ON inventory.inventory_id = film.film_id


-- SELECT *
-- from city
-- WHERE city = 'Abha'
-- JOIN city ON city.country_id = country.country_id


