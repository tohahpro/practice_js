
function find(number) {
    if (number % 2 == 0) {
        return `${number} is Even Number`;
    } 
    else{
        return `${number} is Odd Number`;
    }
}

let number = 85;
console.log(find(number));
