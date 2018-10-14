--    * Create the `burgers_db`.
--    * Switch to or use the `burgers_db`.
--    * Create a `burgers` table with these fields:
--      * **id**: an auto incrementing int that serves as the primary key.
--      * **burger_name**: a string.
--      * **devoured**: a boolean.

CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table tasks.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured boolean,
PRIMARY KEY (id)
);

-- -- Insert a set of records.
-- INSERT INTO tasks (task) VALUES ('Pick up milk.');
-- INSERT INTO tasks (task) VALUES ('Mow the lawn.');
-- INSERT INTO tasks (task) VALUES ('Call Shannon back.');