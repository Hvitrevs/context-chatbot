class Chatbox {
  constructor() {
      this.args = {
          openButton: document.querySelector('.chatbox__button'),
          chatBox: document.querySelector('.chatbox__support'),
          sendButton: document.querySelector('.send__button')
      }

      this.state = false;
      this.messages = [];
  }

  display() {
      const {openButton, chatBox, sendButton} = this.args;

      openButton.addEventListener('click', () => this.toggleState(chatBox));

      sendButton.addEventListener('click', () => this.onSendButton(chatBox));

      const inputField = chatBox.querySelector('input');
      inputField.addEventListener("keyup", ({key}) => {
          if (key === "Enter") {
              this.onSendButton(chatBox);
          }
      });
  }

  toggleState(chatBox) {
      this.state = !this.state;

      if(this.state) {
          chatBox.classList.add('chatbox--active');
      } else {
          chatBox.classList.remove('chatbox--active');
      }
  }

  onSendButton(chatBox) {
      const textField = chatBox.querySelector('input');
      const text = textField.value.trim();
      if (!text) {
          return;
      }

      const msg1 = { name: "User", message: text };
      this.messages.push(msg1);

      fetch('http://127.0.0.1:5000/predict', {
          method: 'POST',
          body: JSON.stringify({ message: text }),
          headers: {
              'Content-Type': 'application/json'
          },
      })
      .then(response => response.json())
      .then(data => {
          const msg2 = { name: "Orpheus", message: data.answer };
          this.messages.push(msg2);
          this.updateChatText(chatBox);
          textField.value = '';
      })
      .catch(error => {
          console.error('Error:', error);
          this.updateChatText(chatBox);
          textField.value = '';
      });
  }

  updateChatText(chatBox) {
      let html = '';
      this.messages.slice().reverse().forEach(item => {
          html += `<div class="messages__item messages__item--${item.name.toLowerCase()}">${item.message}</div>`;
      });

      const chatMessage = chatBox.querySelector('.chatbox__messages');
      chatMessage.innerHTML = html;
  }
}

const chatbox = new Chatbox();
chatbox.display();