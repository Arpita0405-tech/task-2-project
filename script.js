// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("All fields are required!");
    } else if (!email.includes("@")) {
        alert("Enter a valid email!");
    } else {
        alert("Form submitted successfully!");
    }
});


// To-Do List Function
function addTask() {
    let input = document.getElementById("taskInput");

    if (input.value === "") {
        alert("Enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = input.value;

    li.onclick = function() {
        li.remove();
    };

    document.getElementById("list").appendChild(li);

    input.value = "";
}