//set requirements
const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
require("console.table");

runPrompts();

//Ask questions
async function runPrompts() {
  const { choice } = await prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View All Employees",
          value: "view_employees",
        },
        {
          name: "View All Roles",
          value: "view_roles",
        },
        {
          name: "View All Departments",
          value: "view_departments",
        },
        {
          name: "Add Department",
          value: "add_department",
        },
        {
          name: "Add Role",
          value: "add_role",
        },
        {
          name: "Add Employee",
          value: "add_employee",
        },
        {
          name: "Update Employee",
          value: "update_employee",
        }
      ]
    }
  ]);


  switch (choice) {
    case "view_employees":
      return viewEmployees();

    case "view_roles":
      return viewRoles();

    case "view_departments":
      return viewDepartments();

    case "add_role":
      return addRole();

    case "add_department":
      return addDepartment();

    case "add_employee":
      return addEmployee();

    case "update_employee":
      return updateEmployee();
    default:
      return endApp();
  }
}


async function viewEmployees() {
  const employeeList = await db.getAllEmployees();
  console.table(employeeList);
  runPrompts();
}

async function  viewRoles() {
  const roleList = await db.getAllRoles();
  console.table(roleList);
  runPrompts();
}

async function viewDepartments() {
  const departmentList = await db.getAllDepartments();
  console.table(departmentList);
  runPrompts();
}

async function addRole() {
  const department = await db.getAllDepartments();
  const deptartmentChoice = department.map(({ id, dept_name }) => ({
    name: dept_name,
    value: id
  }));
  const add_role = await prompt([
    {
      name: "role_title",
      message: "What is the name of the role?"
    },
    {
      name: "salary",
      message: "What is the salary of this role?"
    },
    {
      type: "dept_list",
      name: "id",
      message: "To which department does this role belong?",
      choices: deptartmentChoice
    }
  ]);

  await db.makeRole(add_role);
  console.log("Role Added!");
  runPrompts();
}

async function addDepartment() {
  const department = await prompt([
    {
      name: "name",
      message: "What is the new department?"
    }
  ]);
  await db.makeDepartment(department);
  console.log("Department Added!")
  runPrompts();
}

async function addEmployee() {
  const employeeList = await db.getAllEmployees();
  const roleList = await db.getAllRoles();

  const new_employee = await prompt([
    {
      name: "first_name",
      message: "What is the employee's first name?"
    },
    {
      name: "last_name",
      message: "What is the employee's last name?"
    }
  ]);

  const roleChoice = roleList.map(({ roles_id, title }) => ({
    name: title,
    value: id
  }));

  const { rolesId } = await prompt({
    type: "list",
    name: "rolesId",
    message: "What is the employee's role?",
    choices: roleChoice
  });

  employee.rolesId = rolesId;

  const managerChoice = employeeList.map(({ id, first_name, last_name }) => ({
    name: `${ first_name } ${ last_name }`,
    value: id
  }));
  managerChoice.unshift({ name: "None", value: null });

  const { managerId } = await prompt({
  type: "list",
  name: "managerId",
  message: "Who is this employee's manager?",
  choices: managerChoice
  });

  employee.manager_id = managerId;

  await db.createEmployee(new_employee);

  console.log("Employee Added!");
  runPrompts();
}

async function updateEmployee() {
  const employeeList = await db.getAllEmployees();

  const employeeChoice = employeeList.map(({ id, first_name, last_name}) => ({
    name: `${first_name} ${last_name}`,
    value: id
  }));

  const { employeeId } = await prompt([
    {
      type: "list",
      name: "employeeId",
      message: "Which employee's role do you wish to update?",
      choices: employeeChoice
    }
  ]);

  const roleList = await db.getAllRoles();

  const roleChoice = roleList.map(({ id, title }) => ({
    name: title,
    value: id
  }));

  const { rolesId } = await prompt([
    {
      type: "list",
      name: "rolesId",
      message: "What is the employee's new role?",
      choices: roleChoice
    }
  ]);

  await db.updateEmployee(employeeId, rolesId);

  console.log("Your employee's role is updated!");
  runPrompts();
}

function endApp() {
  process.exit();
}
