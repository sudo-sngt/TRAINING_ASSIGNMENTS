DDL COMMANDS:-

create database emp;

use emp;

CREATE TABLE Employee_Info
(
EmployeeID int,
EmployeeName varchar(255),
PhoneNumber bigint,
Address varchar(255),
City varchar(255),
Country varchar(255)
);

drop table Employee_Info;

create database emp1;

drop database emp1;

CREATE TABLE Employee_Info
(
EmployeeID int,
EmployeeName varchar(255),
PhoneNumber bigint,
Address varchar(255),
City varchar(255),
Country varchar(255)
);

select *from Employee_Info;

ALTER TABLE Employee_Info
ADD BloodGroup varchar(255);

select *from Employee_Info;

ALTER TABLE Employee_Info
DROP COLUMN BloodGroup ;

select *from Employee_Info;

alter table Employee_Info add dob date;

alter table Employee_Info alter column dob datetime;

alter table Employee_Info drop column dob;

INSERT INTO Employee_Info
VALUES ('01', 'Sanjeet','7368818447', 'Nice Road 2', 'patna', 'India');

truncate table Employee_Info; 

select *from Employee_Info;

sp_rename 'Employee_Info', 'info_Employee';


----------------------------------------------------------------------------------------------

keys:- candidate key, super key, primary key, alternate key, foreign key
constraints:- not null, unique, check, default, index

CREATE TABLE Employee_Info
(
EmployeeID int,
EmployeeName varchar(255) not null,
PhoneNumber bigint,
Address varchar(255) not null,
City varchar(255),
Country varchar(255)
);


INSERT INTO Employee_Info
VALUES ('01', 'Sanjeet','7368818447', null, 'patna', 'India');

alter table Employee_Info alter column PhoneNumber bigint not null; 
CREATE TABLE Employee_Info
(
EmployeeID int NOT NULL UNIQUE,
EmployeeName varchar(255) NOT NULL,
PhoneNumber bigint NOT NULL,
Address varchar(255),
City varchar(255),
Country varchar(255)
primary key (EmployeeID)
);

CREATE TABLE Employee_Info
(
EmployeeID int NOT NULL,
EmployeeName varchar(255) NOT NULL,
PhoneNumber bigint NOT NULL,
Address varchar(255),
City varchar(255),
Country varchar(255),
CONSTRAINT UC_Employee_Info UNIQUE(EmployeeID, PhoneNumber)
);


INSERT INTO Employee_Info
VALUES ('01', 'Sanjeet','7368818447', 'green city 2', 'delhi', 'India');

INSERT INTO Employee_Info
VALUES ('03', 'Sanjeev','7368818447','green city', 'patna', 'India');

INSERT INTO Employee_Info
VALUES ('02', 'Sanjeev','7368818447','green city', 'patna', 'India');

select *from Employee_Info;

INSERT INTO Employee_Info
VALUES ('04', 'Sanjeev','7368818447','green city', 'patna', 'India');

alter table Employee_Info 
drop constraint UC_Employee_Info;

INSERT INTO Employee_Info
VALUES ('04', 'Sanjeev','7368818447','green city', 'patna', 'India');

INSERT INTO Employee_Info
VALUES ('04', 'Sanjeev','7368818447','green city', 'patna', 'India');

drop table Employee_Info;

CREATE TABLE Employee_Info
(
EmployeeID int NOT NULL,
EmployeeName varchar(255),
PhoneNumber bigint,
Address varchar(255),
City varchar(255),
Country varchar(255) CHECK (Country='India')
);

INSERT INTO Employee_Info
VALUES ('04', 'Sanjeev','7368818447','green city', 'patna', 'India');
select *from Employee_Info;

INSERT INTO Employee_Info
VALUES ('04', 'Sanjeev','7368818447','green city', 'patna', 'brazil');

drop table Employee_Info;

CREATE TABLE Employee_Info
(
EmployeeID int NOT NULL,
EmployeeName varchar(255),
PhoneNumber bigint,
Address varchar(255),
City varchar(255),
Country varchar(255) CHECK (Country = 'India' AND City = 'Hyderabad')
);//ask to mentor


CREATE TABLE Employee_Info
(
EmployeeID int NOT NULL,
EmployeeName varchar(255),
PhoneNumber bigint,
Address varchar(255),
City varchar(255),
Country varchar(255) DEFAULT 'India'
);

INSERT INTO Employee_Info
VALUES ('04', 'Sanjeev','7368818447','green city', 'patna', 'brazil');

INSERT INTO Employee_Info
VALUES ('04', 'Sanjeev','7368818447','green city', 'patna', 'brazil');

INSERT INTO Employee_Info
VALUES ('04', 'Sanjeev','7368818447','green city', 'patna', 'brazil');

INSERT INTO Employee_Info
VALUES ('04', 'Sanjeev','7368818447','green city', 'patna', '');

INSERT INTO Employee_Info
VALUES ('04', 'Sanjeev','7368818447','green city', 'patna',null);

select *from Employee_Info;// ask default constraint

CREATE INDEX idex_EmployeeName
ON Employee_info (EmployeeName);// ask index constraint

-----------------------------------------------------------------------------------------------

DML COMMANDS:-

drop table Employee_Info;

CREATE TABLE Employee_Info
(
EmployeeID int,
EmployeeName varchar(255),
PhoneNumber bigint,
Address varchar(255),
City varchar(255),
Country varchar(255)
); 


INSERT INTO Employee_Info
VALUES ('08', 'Sanjert','7368818448','green city 1', 'kolkata', 'china');

INSERT INTO Employee_Info
VALUES ('06', 'Sandeep','7368818788','green city 2', 'pune', 'america');

INSERT INTO Employee_Info
VALUES ('34', 'sunny','7368818467','green city 5', 'pune', 'bangla desh');

INSERT INTO Employee_Info
VALUES ('87', 'Sanjeev','7368818456','green city 8', 'patna', 'india');

select *from Employee_Info;

UPDATE Employee_Info
SET EmployeeName = 'Aahana', City= 'Ahmedabad'
WHERE EmployeeID = 4;

select *from Employee_Info;

DELETE FROM Employee_Info
WHERE EmployeeName='Aahana';

select *from Employee_Info;

create table sampleSourceTable(EmpID int, EmpName varchar(8000), marks int);

create table sampleTargetTable(EmpID int, EmpName varchar(8000), marks int);


/*
insert into sampleSourceTable values('1', 'sanjeet', '76');
insert into sampleSourceTable values('1', 'sanjeev', '78');
insert into sampleSourceTable values('1', 'sandeep', '36');

insert into sampleTargetTable values('1', 'sanjeet', '76');
insert into sampleTargetTable values('1', 'sunny', '70');
insert into sampleTargetTable values('1', 'amarjeet', '96');

merge sampleTargetTable target using sampleSourceTable source on (target.EmpID = source.EmpID)
when matched and target.EmpName <> source.EmpName or target.Marks <> source.Marks
then
update set target.EmpName = source.EmpName, target.Marks = source.Marks
when not matched by target then
insert (EmpID, EmpName, Marks) values (source.EmpID, Source.EmpName, source.Marks)
when not matched by source then
delete;


select *from sampleSourceTable;
select *from sampleTargetTable;
*/

select EmpID, EmpName from sampleSourceTable;

select top 3 *from sampleSourceTable;

select top 2 *from sampleSourceTable;

SELECT DISTINCT PhoneNumber FROM Employee_Info;

SELECT * FROM Employee_Info
ORDER BY PhoneNumber;

SELECT * FROM sampleTargetTable
ORDER BY marks desc;

SELECT * FROM sampleTargetTable
ORDER BY EmpName desc, marks asc;

select COUNT(EmpName),marks  from sampleTargetTable group by marks;

SELECT COUNT(EmployeeID), City
FROM Employee_Info
GROUP BY City;

SELECT COUNT(EmployeeID), City
FROM Employee_Info
GROUP BY City
HAVING COUNT(EmployeeID) > 2
ORDER BY COUNT(EmployeeID) DESC;

select * from Employee_Info;

SELECT COUNT(EmployeeID), City
FROM Employee_Info
GROUP BY City
HAVING COUNT(EmployeeID) = 2
ORDER BY COUNT(EmployeeID) DESC;

select * into EmpBackup from Employee_Info;

select *from EmpBackup;

select * into puneCitu from Employee_Info where City = 'pune';

select *from puneCitu;

select *from Employee_Info;

-----------------------------------------------------------------------------------------------

SELECT * FROM Employee_Info
WHERE City='pune'AND Country='america';

SELECT * FROM Employee_Info
WHERE City='pune' OR City='Hyderabad';

SELECT * FROM Employee_Info
WHERE NOT City='pune';

SELECT * FROM Employee_Info
WHERE NOT Country='India' AND (City='Bangalore' OR City='pune');

SELECT * FROM Employee_Info
WHERE EmployeeID BETWEEN 1 AND 6;

SELECT * FROM Employee_Info
WHERE EmployeeName LIKE 'S%';

SELECT * FROM Employee_Info
WHERE EmployeeName LIKE 'A%';

SELECT EmployeeName
FROM Employee_Info
WHERE EmployeeID = ANY (SELECT EmployeeID FROM Employee_Info WHERE City = 'Hyderabad' OR City = 'Kolkata');

SELECT MIN(EmployeeID) AS SmallestID
FROM Employee_Info;

SELECT MAX(EmployeeID) AS TallestID
FROM Employee_Info;

SELECT COUNT(EmployeeID)
FROM Employee_Info;

SELECT SUM(Salary)
FROM Employee_Salary; 

alter table Employee_Info add EmpSal int;

select *from Employee_Info;

INSERT INTO Employee_Info
VALUES ('87', 'Sandeep','7368818477','green city 10', 'gopal ganj', 'bangla', '90000');

INSERT INTO Employee_Info
VALUES ('77', 'Sonjeeba','7368815567','green city 63', 'goa', 'sah pur', '480000');

INSERT INTO Employee_Info
VALUES ('27', 'Senjeev','7368818456','green city 87', 'chapra', 'naga land', '70000');

INSERT INTO Employee_Info
VALUES ('767', 'aanjeev','7368818456','green city 65', 'patna', 'india', '60000');

INSERT INTO Employee_Info
VALUES ('87', 'Sanjeev','7368818456','green city 888', 'gohati', 'south india', '50000');

INSERT INTO Employee_Info
VALUES ('87', 'Sanjeev','7368818456','green city 888', 'null', 'south india', '50000');

select *from Employee_Info;


SELECT AVG(EmpSal)
FROM Employee_Info;

SELECT EmployeeID AS ID, EmployeeName AS EmpName
FROM Employee_Info;

SELECT EmployeeName, City
FROM Employee_Info
ORDER BY
(CASE
    WHEN City IS NULL THEN 'Country is India by default'
    ELSE City
END);

---------------------------------------------------------------------------------------------
SQL Commands: Transaction Control Language Commands (TCL)

create table Employee_Table(
 EmployeeID int,
 EmployeeName varchar(800)
 );

INSERT INTO Employee_Table VALUES(05, 'Avinash');
COMMIT;
UPDATE Employee_Table SET name = 'Akash' WHERE id = '05';
SAVEPOINT S1;
INSERT INTO Employee_Table VALUES(06, 'Sanjana');
SAVEPOINT S2;
INSERT INTO Employee_Table VALUES(07, 'Sanjay');
SAVEPOINT S3;
INSERT INTO Employee_Table VALUES(08, 'Veena');
SAVEPOINT S4;
SELECT * FROM Employee_Table;







