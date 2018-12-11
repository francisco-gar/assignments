var employees = [];

function Employees(name, title, salary, status){
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = 'full time';
}
function printEmployeeForm(){
    console.log(jim, jam, jenny)
}

var jim = new Employees('jim', 'intern', 5);
var jam = new Employees('jam', 'judge', 10);
var jenny = new Employees('jenny', 'jurrist', 4);

jim.status = 'FIRED';

employees.push(jim, jam, jenny);

Employees.prototype.printEmployeeForm = printEmployeeForm;

employees[0].printEmployeeForm();
// jam.printEmployeeForm(); works too