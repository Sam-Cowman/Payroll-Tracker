// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let addEmployee = true;
  const employees = [];
  while (addEmployee) {
    const firstName = prompt("Enter employee's first name:");
    const lastName = prompt("Enter employee's last name:");
    let salary = prompt("Enter employee's salary:");

    // Check if salary is a number, default to 0 if not
    if (isNaN(Number(salary))) {
      salary = 0;
    }

    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: Number(salary)
    });

    const continueAdding = confirm("Do you want to add another employee?");
    if (!continueAdding) {
      addEmployee = false;
    }
  }
  return employees;
}



// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  // Use a template literal string 
  let numberEmployees = employeesArray.length;

  let input = 0
  // confused 
  // const numbers = Array.from({ length: Infinity }).reduce(function (acc, _, index) {

  //   if (input === 'exit' || input === null) {
  //     return acc;
  //   } else {
  //     acc.push(Number(input));
  //     return acc;
  //   }
  // }, []);
  for(let i = 0; i < employeesArray.length; i++) {
    input += employeesArray[i].salary
    console.log(input)
  }
  console.log(input)

  // console.log(numbers);
  // const number = parseFloat(input);
  // if (!isNaN(number)) {
  //   numbers.push(number);
  // } else {
  //   alert("Please enter salary.");
  // }
  let average = input / numberEmployees
  console.log(`The average salary is ${average.toFixed(2)}`)
}
function sumFunction(total, current) {
  return total + current;
}

// const sum = numbers.reduce(sumFunction, 0);
// const average = numbers.length > 0 ? sum / numbers.length : 0;



// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  let employee = employeesArray[Math.floor(Math.random()*employeesArray.length)];
  console.log(`Random employee is ${employee.firstName} ${employee.lastName}`)
}
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
