// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
while(isNaN(investment)){
    
    alert(`The investment should be numeric`);
    investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));

}

while (true) {
    rate = parseFloat(prompt('Enter interest rate as xx.x (between 0 and 0.06):'));
    
    if (isNaN(rate)) {
        alert('The rate should be numeric. Please enter a valid number.');
        continue; 
    }
    
    if (rate > 0 && rate <= 0.06) {
        break; 
    } else {
        alert('The rate should be between 0 and 0.06. Please try again.');
    }
}
while (true) {
    years = parseInt(prompt('Enter the number of years you want to invest for'));
    if(isNaN(years)){
        alert(`The years should be numeric and between 1 and 30`);
        continue; 
    }
    if (years>=1 && years<=30){
        break;
    } else {
        alert(`The years should be numeric and between 1 and 30`);
    }
    
}


// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);