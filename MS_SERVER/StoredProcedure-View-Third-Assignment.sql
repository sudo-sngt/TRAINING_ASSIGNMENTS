STORED PROCEDURE:-
---------------------

create database StoredPro
go

use StoredPro

create table Customers
(
CustomerID int,
CustomerName varchar(30),
ContactName bigint,
Addr varchar(30),
City varchar(30),
PostalCode bigint,
Country varchar(30)
);



insert into Customers values(1, 'ranjeet', 7368818446,'gopalganj', 'gopalganj', 841420, 'brazil');
insert into Customers values(2, 'Sanjeet', 7368818445,'SAHPURA', 'PUNE', 841421, 'caneda');
insert into Customers values(3, 'sanjeeV', 7368818449,'CHAPRA', 'LUCKNOW', 841422, 'US');
insert into Customers values(4, 'AMARJEET', 7368818441,'KOPTA', 'AHMEDABAD', 841425, 'USA');
insert into Customers values(5, 'SUNNY', 7368818442,'SAAH PUR', 'PATNA', 841425, 'CHINA');
insert into Customers values(6, 'manjeet', 7368818448,'lahladpur', 'siwan', 841432, 'india');

CREATE PROCEDURE SelectAllCustomers
AS
SELECT * FROM Customers
GO;

EXEC SelectAllCustomers;

CREATE PROCEDURE Select_AllCustomers @City nvarchar(30)
AS
SELECT * FROM Customers WHERE City = @City

EXEC Select_AllCustomers @City = 'gopalganj';

CREATE PROCEDURE Select_All_Customers_C_P @City nvarchar(30), @PostalCode nvarchar(10)
AS
SELECT * FROM Customers WHERE City = @City AND PostalCode = @PostalCode

EXEC Select_All_Customers_C_P @City = 'gopalganj', @PostalCode = '841428';

DROP PROCEDURE Select_AllCustomers;

-------------------------------------------------------------------------------------------------------
VIEW:-
-------

create database ViewPractice

use ViewPractice

create table Customers
(
CustomerID int,
CustomerName varchar(30),
ContactName bigint,
Addr varchar(30),
City varchar(30),
PostalCode bigint,
Country varchar(30)
);


insert into Customers values(1, 'ranjeet', 7368818446,'gopalganj', 'gopalganj', 841420, 'brazil');
insert into Customers values(2, 'Sanjeet', 7368818445,'SAHPURA', 'PUNE', 841421, 'caneda');
insert into Customers values(3, 'sanjeeV', 7368818449,'CHAPRA', 'LUCKNOW', 841422, 'US');
insert into Customers values(4, 'AMARJEET', 7368818441,'KOPTA', 'AHMEDABAD', 841425, 'USA');
insert into Customers values(5, 'SUNNY', 7368818442,'SAAH PUR', 'PATNA', 841425, 'CHINA');
insert into Customers values(6, 'manjeet', 7368818448,'lahladpur', 'siwan', 841432, 'india');

CREATE VIEW [Brazil Customers] AS
SELECT CustomerName, ContactName
FROM Customers
WHERE Country = 'brazil';

SELECT * FROM [Brazil Customers];


CREATE OR REPLACE VIEW [Brazil Customers] AS
SELECT CustomerName, ContactName, City
FROM Customers
WHERE Country = 'Brazil';


DROP VIEW [Brazil Customers];








