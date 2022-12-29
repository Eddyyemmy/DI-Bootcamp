
-- select first_name,last_name, salary from employees 
-- where salary = (
--  	select max(salary) from employees
-- )

-- select first_name, last_name,
-- (case when department_id=(
-- select department_id from departments where location_id=2500) 
-- then 'USA' end) as Location
-- from employees

-- select first_name, last_name,
-- (case when job_id=(
-- select job_id from jobs where job_title = '%Manager%') 
-- then '%Manager%' END) as managers
-- from employees


-- select first_name, last_name, salary from employees
-- where salary>(
-- 	select avg(salary) from employees)

-- select first_name,last_name, salary from employees 
-- where salary = (
--  	select min(salary) from employees
-- )

select * from employees