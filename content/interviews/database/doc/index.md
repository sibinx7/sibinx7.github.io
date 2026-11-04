---
title: Database basics
---

### What is 1NF, 2NF, 3NF

Database normlization is the process of structuring a relational database to reduce data redudunancy, prevent data anomalies and ensure data 
integrity. The `First`, `Second` and `Third` `Normal  Forms` (`1NF`, `2NF`, `3NF`) form the foundational steps of this process.


##### 1NF
- `Atomic Values`: Each column must contain single, indivisble values (no lists, arrays or comma separated multiple values in a single cell)
- `Unique Rows`: Every row must be unique, typically enforced by having `Primary Key`
- `Uniform Columns`: Each columns must contain data of the same type, and each colum must have a unique name.


###### Wrong 
| Id  | Price     | Item           | Customer Id |
| --- | --------- | ---            | ----        |
| 1   | 100       | Laptop, Mobile | 1           |

###### Correct 

| Id  | Price      | Item   | Customer Id |
| --- | ---------  | ---    | ----        |
| 1   | 80         | Laptop | 1           |
| 1   | 20         | Mobile | 1           |

##### 2NF
- It is already in `1NF`
- `No Partial Dependencies`: All non-key attributes must be fully functionally dependent on the entire `primary key`. This applies 
  specifically to tables with composite primary keys (keys made of two or more columns). If a non key column depends on only part of 
  a composite key, it violates `2NF`

###### Wrong 

| EmployeeID (PK) | ProjectID (PK) | Employee Name | Project Name | Role           |
| -----           | ------------   | ------------- | ------------ | -------------  |
| E01             |  P1            | Alice         |  Job Search  | Lead Developer |
| E01             |  P2            | Alice         |  Booking App | Project Owner  |
| E02             |  P1            | John          |  Job Search  | Project Owner  |
| E02             |  P3            | John          |  Hospital    | Lead QA        |

###### Correct 

| EmployeeID (PK) | Employee Name |
| --------------  | ------------  |
| E01             | Alice         |
| E02             | John          |

| ProjectID(PK)   | Project Name |
| --------------  | -----------  |
| P1              | Job Search   |
| P2              | Booking App  |
| P3              | Hospital     |


| RoleID(PK)   | Role Name      |
| --------     | --------       |
| R1           | Lead Developer |
| R2           | Project Owner  |
| R3           | Lead QA        |


| ProjectAssignedID (Pk) | Project ID | Employee ID | Role ID |
| --------------         | ---------  | ----------- | ------- |
| PA1                    | P1         | E01         | R1      |
| PA2                    | P1         | E02         | R2      |
| PA3                    | P2         | E01         | R2      |
| PA4                    | P2         | E02         | R3      |


##### 3NF

- It is already in `2NF`
- `No Transitive Dependencies`: Non-key attributes must depend only on the primary key, no on any other non-key attributes. In other words, if 
  Column A depends on Column B, and Column B depends on the Primary Key, Column A has a transitive dependency and must be moved.


###### Wrong

| EmployeeID (PK) | Employee Name | DepartmentID | Department Name |
| --------------- | ------------- | -----------  | -------------   |
| E01             | Alice         | D01          | Retail          |
| E02             | John          | D02          | Medical         |


###### Correct 

| EmployeeID (PK) | Employee Name | DepartmentId |
| --------------  | ------------  | -----------  |
| E01             | Alice         | D01          |
| E02             | John          | D02          |


| DepartmentID (PK) | Department Name |
| ----------------  | --------------- |
| D01               | Retail          |
| D02               | Medical         |


###### 1NF vs 2NF vs 3NF

| Normal Form | Code Requirement                | What it Eliminate                                        |
| ----------- | ---------------                 | ----------------                                         |
| 1NF         | Atomic values & Unique rows     | Multi-values columns/ Repeating groups                   |
| 2NF         | 1NF + no partial dependencies   | Partial dependencies on composite keys                   |
| 3NF         | 2NF + no transitive dpendencies | Non-key attributes depending on other non-key attributes | 



### SubQuery vs JOIN 

#### JOIN 

A JOIN is used to combine rows from two or more tables based on a related column between them, typically primary key and foreign key.

- `INNER JOIN`: Return only the rows that having matching values both table
- `LEFT JOIN`: Return all rows of left table, and matched rows from right table, if there no match return right side as null

```
SELECT e.EmployeeName, d.DepartmentName FROM Employees e
INNER JOIN Departments d ON e.departmentID = d.Departmentid
```

#### SubQuery 

A SubQuery is a query nested inside another SQL statement (such as inside a SELECT, FROM, WHERE or HAVING clause)

- `Uncorrelated Subquery`: Independent of the outer query. It run once, and its result is handled to the outer query. It runs once, and its result is handed to the outer query
- `Correlated SubQuery`: Depends on the outer query. It re-runs for every single roww processed by the outer query.

```
SELECT EmployeeName, Salary FROM EMPLOYEE WHERE
Salary > (
  SELECT AVG(SALARY) FROM Employees
)
```


