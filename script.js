const users = {
    "rodzynka": "kebab1",
    "Fafik": "kebab2",
    "kucharz": "kebab3",
    "MamaMafia": "kebab4"
};

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (users[username] && users[username] === password) {
        localStorage.setItem("loggedUser", username);
        window.location.href = "chat.html";
    } else {
        document.getElementById("error-message").textContent = "Błędna nazwa użytkownika lub hasło!";
    }
}

function loadChat() {
    const user = localStorage.getItem("loggedUser");
    if (!user) {
        window.location.href = "index.html";
        return;
    }
    document.getElementById("user-display").textContent = user;
}

function sendMessage() {
    const input = document.getElementById("message-input");
    const chatBox = document.getElementById("chat-box");

    if (input.value.trim() !== "") {
        const message = document.createElement("div");
        message.textContent = `${localStorage.getItem("loggedUser")}: ${input.value}`;
        chatBox.appendChild(message);
        input.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

// Inicjalizacja na stronie czatu
if (window.location.pathname.includes("chat.html")) {
    window.onload = loadChat;
}
