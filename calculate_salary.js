export function calculate_salary(role) {
    let salary = 0;
    if (role === 'engineer') {
        salary = 4000;
    } else{
        salary = 1500;
    }

    if (role === 'accountant') {
        salary = 2500;
    } else{
        salary = 1500;
    }

    return salary;
}
