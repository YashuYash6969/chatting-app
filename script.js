const messages = document.getElementById('messages');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send');
const Message = require('./db').Message;

sendButton.addEventListener('click', async () => {
  const message = messageInput.value;
  if (message !== '') {
    const newMessage = new Message({ text: message, timestamp: new Date() });
    await newMessage.save();

    const allMessages = await Message.find().sort({ timestamp: 1 });
    allMessages.forEach((message) => {
      const li = document.createElement('li');
      li.textContent = message.text;
      messages.appendChild(li);
    });

    messageInput.value = '';
  }
});


