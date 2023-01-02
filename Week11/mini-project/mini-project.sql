-- select first_name, last_name from employees

-- select department_id from employees where department_id = 9

-- select * from employees order by first_name desc

-- select first_name, last_name, salary, (salary/15) as percentage from employees

-- select employee_id, first_name, last_name, salary from employees order by salary asc

-- select sum(salary) from employees

-- select max(salary), min(salary) from employees

-- select avg(salary) from employees

-- select count(employee_id) from employees

-- select upper(first_name) from employees

-- select left(first_name, 3) from employees

-- select first_name || ' ' || last_name as fullname from employees

-- select first_name, last_name, length(first_name) as lenght from employees

-- select first_name from employees where first_name = 9

-- select * from employees limit 10

-- select first_name, last_name, salary from employees where salary between 10000 and 15000

-- select first_name, last_name, hire_date from employees where hire_date between 1987

-- select first_name from employees where first_name ~ '[^c-e]'

-- select last_name, job_title, salary from employees
-- inner join jobs
-- on employees.job_id = jobs.job_id
-- where job_title != 'Shipping Clerk' and job_title != 'Programmer' and salary != 45000
-- and salary != 10000 and salary != 15000

-- select last_name from employees where length(last_name)=6

-- select last_name from employees where right(last_name, 3) = 'e'

-- select job_title from employees
-- inner join jobs
-- on employees.job_id = jobs.job_id

select last_name from employees where last_name = 'Jones' or last_name = 'Blake' or last_name = 'Ford' 