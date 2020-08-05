const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

    //Find all employees
    getAllEmployees() {
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        );
    }

    //Find all roles
    getAllRoles() {
        return this.connection.query(
            "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
        );
    }

    //Find all departments
    getAllDepartments() {
        return this.connection.query(
            "SELECT department.id, department.name FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id GROUP BY department.id, department.name;"
        );
    }

    //Create new employee
    createEmployee(employee) {
        return this.connection.query("INSERT INTO employee SET ?", employee);
    }

    //Create new role
    createRole(role) {
        return this.connection.query("INSERT INTO role SET ?", role);
    }

    //Create new department
    createDepartment(department) {
        return this.connection.query("INSERT INTO department SET ?", department);
    }

    //Update employee's role
    updateEmployeeRole(employeeId, roleId) {
        return this.connection.query("UPDATE employee SET role_id = ? WHERE id = ?", [roleId, employeeId]);
    }
}

module.exports = new DB(connection);