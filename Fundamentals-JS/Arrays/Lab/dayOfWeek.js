/*function dayOfWeek(day) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (day >= 1 && day <= 7) {
        console.log(days[day - 1]); //тъй като започват елемнтът от 0, трябва да добавим -1, за да отчита правилно 
    } else {
        console.log("Invalid day!");
    }
}*/
function dayOfWeek(day) {
    //let days = ["Monday", "Tuesday", "Wednesday", "Thirsday", "Friday", "Saturday", "Sunday"];
    return day <= 7 && day >= 1 ? ["Monday", "Tuesday", "Wednesday", "Thirsday", "Friday", "Saturday", "Sunday"][day - 1] : "Invalid day!";
    console.log()
}
dayOfWeek(10)