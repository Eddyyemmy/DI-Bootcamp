-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- )

-- INSERT INTO FirstTab VALUES
-- (5,'Pawan'),
-- (6,'Sharlee'),
-- (7,'Krish'),
-- (NULL,'Avtaar')

-- SELECT * FROM FirstTab

-- CREATE TABLE SecondTab (
--     id integer 
-- )

-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL)


-- SELECT * FROM SecondTab


-- QUESTIONS
--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id 
-- 	NOT IN ( SELECT id FROM SecondTab 
-- 			WHERE id IS NULL )

-- EXECUT
-- ERROR

-- CORRECT ANWSER EXECUTED
-- IS 0

--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id 
-- 	NOT IN ( SELECT id FROM SecondTab 
-- 			WHERE id = 5 )
			
-- EXECUT
-- 2

-- CORRECT ANWSER EXECUTED
-- IS 2

--     SELECT COUNT(*) 
--     FROM FirstTab AS ft 
-- 	WHERE ft.id NOT IN ( SELECT id FROM SecondTab)
-- EXECUT
-- 0

-- CORRECT ANWSER EXECUTED
-- IS 0

    SELECT COUNT(*) 
    FROM FirstTab AS ft 
	WHERE ft.id NOT IN (SELECT id FROM SecondTab 
						WHERE id IS NOT NULL)
						
-- EXECUT
-- 1

-- CORRECT ANWSER EXECUTED
-- IS 2