import { calculate_salary } from "./calculate_salary.js";

let worker1 = {
    name: 'Vasya',
    role: 'worker',
    age: 23,
};

let engineer1 = {
    name: 'Grigory',
    role: 'engineer',
    age: 42,
};

let worker2 = {
    name: 'Grisha',
    role: 'worker',
    age: 25,
};

let engineer2 = {
    name: 'San Sanich',
    role: 'engineer',
    age: 54,
}

let empliyees = [worker1, engineer1, worker2];
empliyees.push(engineer2)

let total_salary = 0;
empliyees.forEach(function (employee) {
    let salary = calculate_salary(employee.role);
    total_salary += salary;
})

console.log(total_salary);