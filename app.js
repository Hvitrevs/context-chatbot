class Convobot {
  constructor() {
    this.args = {
      openButton: document.querySelector(selectors, 'chatbox__button'),
      convoBot: document.querySelector(selectors,'.chatbox__support'),
      sendButton: document.querySelector(selector,'.send__button')
    }

    this.state = false;
    this.message = [];
  }
}