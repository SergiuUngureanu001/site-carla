document.addEventListener("DOMContentLoaded", function () {
    const sendButton = document.querySelector(".btn");

    sendButton.addEventListener("click", function () {
        const nameInput = document.querySelector("input[placeholder='Name']");
        const emailInput = document.querySelector("input[placeholder='Gmail']");
        const subjectInput = document.querySelector("input[placeholder='Subject']");
        const messageInput = document.querySelector("input[placeholder='Message']");

        const name = nameInput.value;
        const email = emailInput.value;
        const subject = subjectInput.value;
        const message = messageInput.value;

        if (!name || !email || !subject || !message) {
            alert("Please fill in all fields.");
            return;
        }

        emailjs.send("service_u4x0goq", "template_cgqwzre", {
            from_name: name,
            email: email,
            subject: subject,
            message: message,
        })
        .then(function(response) {
            alert("Message sent successfully!");
            console.log("Email sent:", response);

            nameInput.value = "";
            emailInput.value = "";
            subjectInput.value = "";
            messageInput.value = "";
        })
        .catch(function(error) {
            alert("Error sending message.");
            console.error("Error:", error);
        });
    });
});
