const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

//Find all employees
  findAllEmployees() {
      return this.connection.query(
          "SELECT employee.name_id, employee.first_name, employee_name.last_name, roles.title, department.dept_name AS department, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = roles.id LEFT JOIN department on roles.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
      );
  }

//Find all roles
  findAllRoles() {
    return this.connection.query(
        "SELECT roles.roles_id, roles.title, department.dept_name AS department, roles.salary FROM roles LEFT JOIN department on employee.role_id = roles.id LEFT JOIN department on roles.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
    );
}

//Find all departments
findAllDepartments() {
    return this.connection.query(
        "SELECT department.id, department.dept_name AS department FROM employee LEFT JOIN roles on employee.name_id = roles.id LEFT JOIN department on roles.department_id = department.id GROUP BY department.id, department.dept_name;"
    );
}

//Create new employee
createEmployee(employee) {
    return this.connection.query("INSERT INTO employee SET ?", employee);
}

//Create new role
createRole(role) {
    return this.connection.query("INSERT INTO roles SET ?", role);
}

//Create new department
createDepartment(department) {
    return this.connection.query("INSERT INTO department SET", department)
}

//Update employee's role
updateEmpRole(employeeId, roleId) {
    return this.connection.query("UPDATE employee SET roles_id = ? WHERE ID = ?", [employeeId, roleId]);
}
}


module.exports = new DB(connection);