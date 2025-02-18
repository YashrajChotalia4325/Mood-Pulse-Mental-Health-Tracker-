document.addEventListener("DOMContentLoaded", function() {
    const moodButtons = document.querySelectorAll(".mood-buttons button");
    moodButtons.forEach(button => {
        button.addEventListener("click", function() {
            const mood = this.getAttribute("data-mood");
            console.log("User selected mood: ", mood)
            window.location.href = mood + ".html";
        })
    })
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.querySelector(".sidebar");
    menuIcon.addEventListener("click", function() {
        sidebar.classList.toggle("active");
    });
});