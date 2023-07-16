// Store the chat messages
let messages = [];

// Function to display the chat messages
function displayMessages() {
    const chatLog = document.getElementById('chat-log');
    chatLog.innerHTML = '';

    messages.forEach((message) => {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatLog.appendChild(messageElement);
    });

    // Scroll to the bottom of the chat log
    chatLog.scrollTop = chatLog.scrollHeight;
}

// Function to send a message
function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();

    if (message !== '') {
        messages.push(message);
        displayMessages();
        messageInput.value = '';
    }
}

// Add event listener to send button
document.getElementById('send-button').addEventListener('click', sendMessage);

// Add event listener to input field to send message on Enter key press
document.getElementById('message-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

// Display any existing messages on page load
displayMessages();
