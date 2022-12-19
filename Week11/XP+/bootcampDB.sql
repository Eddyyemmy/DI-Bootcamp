-- CREATE TABLE students(
-- 	id SERIAL PRIMARY KEY,
-- 	last_name VARCHAR(50) NOT NULL,
-- 	first_name VARCHAR(50) NOT NULL,
-- 	birth_day DATE NOT NULL
-- )

-- INSERT INTO students (first_name, last_name, birth_day)
-- VALUES('Marc', 'Benichou', '1998-11-02'),
-- 	('Yoan', 'Cohen', '2010-12-03'),
-- 	('Lea', 'Benichou', '1987-07-27'),
-- 	('Amelia', 'Dux', '1996-04-07'),
-- 	('David', 'Grez', '2003-06-14'),
-- 	('Omer', 'Simpson', '1980-10-03')

-- SELECT * FROM students

-- INSERT INTO students (first_name, last_name, birth_day)
-- VALUES('Jaleyemi', 'Benjamin', '1998-06-15')

-- SELECT first_name, last_name FROM students
-- SELECT first_name, last_name FROM students WHERE id=2
-- SELECT first_name, last_name FROM students WHERE last_name='Benichou' AND first_name='Marc'
-- SELECT first_name, last_name FROM students WHERE last_name='Benichou' OR first_name='Marc'
-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%' 
-- SELECT first_name, last_name FROM students WHERE first_name LIKE 'A%'
-- SELECT first_name, last_name FROM students WHERE(RIGHT(first_name, 3) LIKE 'a%')
-- SELECT first_name, last_name FROM students WHERE id=1 AND id=2
SELECT * FROM students WHERE (birth_day<='2000-01-01')
