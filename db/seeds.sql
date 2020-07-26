/* Inserting rows into the table */
INSERT INTO department (name)
VALUES
    ("Production"),
    ("Purchasing"),
    ("Customer Service"),
    ("Shipping")
    ("Sales");

INSERT INTO roles (title, salary, id)
VALUES
    ("Printer", 40000, 06),
    ("Purchaser", 45000, 05),
    ("Customer Service Rep", 35000 04),
    ("Shipper", 20000, 03),
    ("Sales Agent", 65000, 02),
    ("Manager", 75000, 01);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Pete", "Howell", 06, 01),
    ("Jennifer", "Clarkson", 04, 01),
    ("Stephanie", "Horner", 05, 01),
    ("Deana", "McEwan", 03, NULL),
    ("Dana", "Lomsheck", 02, NULL),
    ("Ben", "Hess" 01, NULL);


