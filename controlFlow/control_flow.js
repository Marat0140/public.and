let userRole = "admin";
let accessLevel;
if (userRole === "admin") {
    accessLevel = "Full acces granted";
} else if (userRole === "manager") {
    accessLevel = "Limited acces granted";
} else {
    accessLevel = "No acces granted";
}
console.log("Access Level:", accessLevel);
let isLoggedIn = true;
let userMessage;
if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to acces the system"
}
console.log("User Message:", userMessage);
let userType ="suscriber"
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "suscriber":
        userCategory = "suscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);