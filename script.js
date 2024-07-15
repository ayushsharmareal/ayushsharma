// Function to toggle the hamburger menu
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Function to send email using EmailJS
function sendMail() {
    // Collecting form input values
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    // Sending email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
        .then((res) => {
            // Clearing form inputs after successful submission
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Message sent successfully!");
        })
        .catch((err) => console.error("Error sending email:", err));
}
