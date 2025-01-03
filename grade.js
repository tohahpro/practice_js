
function getGrade(marks) {
    if (marks >= 90) {
        return "Grade: A+";
    } else if (marks >= 80) {
        return "Grade: A";
    } else if (marks >= 70) {
        return "Grade: B";
    } else if (marks >= 60) {
        return "Grade: C";
    } else if (marks >= 50) {
        return "Grade: D";
    } else {
        return "Grade: Fail";
    }
}

let Marks = 85; 
console.log(`Marks: ${Marks}`);
console.log(getGrade(Marks));
