const roomList = document.getElementById("room-list");
const messagesDiv = document.getElementById("messages");
const messageInput = document.getElementById("message-input");

function createRoom() {
    const roomName = document.getElementById("new-room").value;
    if (roomName) {
        const li = document.createElement("li");
        li.textContent = roomName;
        roomList.appendChild(li);
    }
}

function sendMessage() {
    const messageText = messageInput.value;
    if (messageText) {
        const message = document.createElement("p");
        message.textContent = messageText;
        messagesDiv.appendChild(message);
        messageInput.value = "";
    }
}