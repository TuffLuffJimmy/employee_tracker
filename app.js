const axios = require('axios')
const { writeFile } = require('fs')
const { prompt } = require('inquirer')
const { promisify } = require('util')

// Function runs at the beginning of program to decide which action user wants to perform
function chooseAction() {
  prompt([
    {
      type: 'list',
      name: 'action',
      message: 'Please Select an action...',
      choices: ['Add departments', 'Add roles', 'Add employees', 'View departments', 'View roles', 'View employees', 'Update employee roles']
    }
  ])
    .then(({ action }) => {
      switch (action) {
        case 'Add departments':
          addDepartment()
          break
        case 'Add roles':
          addRole()
          break
        case 'Add employees':
          addEmployee()
          break
        case 'View departments':
          viewDepartments()
          break
        case 'View roles':
          viewRoles()
          break
        case 'View employees':
          viewEmployees()
          break
        case 'Update employee roles':
          updateEmployeeRoles()
          break
        default:
          break
      }
    })
    .catch(err => console.log(err))
}

function addDepartment() {
  console.log('addDepartment')
}
function addRole() {
  console.log('addRole')
}
function addEmployee() {
  console.log('addEmployee')
}
function viewDepartments() {
  console.log('viewDepartments')
}
function viewRoles() {
  console.log('viewRoles')
}
function viewEmployees() {
  console.log('viewEmployees')
}
function updateEmployeeRoles() {
  console.log('updateEmployeeRoles')
}
chooseAction()