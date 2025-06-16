const employees = [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
];

const employeeList = {};

for (const employee of employees) {
    employeeList[employee] = employee.length;
}

for (const [name, number] of Object.entries(employeeList)) {
    console.log(`Name: ${name} - Personal Number: ${number}`);
}

