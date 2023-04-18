const inputEncryptMessage = document.querySelector('#inputEncryptMessage');
const inputDecryptMessage = document.querySelector('#inputDecryptMessage');
const outputEncryptMessage = document.querySelector('#outputEncryptMessage');
const outputDecryptMessage = document.querySelector('#outputDecryptMessage');
const buttonEncryptSubmit = document.querySelector('#buttonEncryptSubmit');
const buttonDecryptSubmit = document.querySelector('#buttonDecryptSubmit');

const encrypt = function (text) {
  let textEncrypted = '';
  text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case 'p':
        textEncrypted += 'o';
        break;
      case 'o':
        textEncrypted += 'p';
        break;
      case 'l':
        textEncrypted += 'i';
        break;
      case 'i':
        textEncrypted += 'l';
        break;
      case 't':
        textEncrypted += 'y';
        break;
      case 'y':
        textEncrypted += 't';
        break;
      case 'k':
        textEncrypted += 'a';
        break;
      case 'a':
        textEncrypted += 'k';
        break;
      case 'r':
        textEncrypted += 'e';
        break;
      case 'e':
        textEncrypted += 'r';
        break;
      case 'n':
        textEncrypted += 'u';
        break;
      case 'u':
        textEncrypted += 'n';
        break;
      default:
        textEncrypted += text[i];
    }
  }
  outputEncryptMessage.textContent = textEncrypted;
  inputEncryptMessage.textContent = '';
};

const decrypt = function (text) {
  let textDecrypted = '';
  text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case 'o':
        textDecrypted += 'p';
        break;
      case 'p':
        textDecrypted += 'o';
        break;
      case 'i':
        textDecrypted += 'l';
        break;
      case 'l':
        textDecrypted += 'i';
        break;
      case 'y':
        textDecrypted += 't';
        break;
      case 't':
        textDecrypted += 'y';
        break;
      case 'a':
        textDecrypted += 'k';
        break;
      case 'k':
        textDecrypted += 'a';
        break;
      case 'e':
        textDecrypted += 'r';
        break;
      case 'r':
        textDecrypted += 'e';
        break;
      case 'u':
        textDecrypted += 'n';
        break;
      case 'n':
        textDecrypted += 'u';
        break;
      default:
        textDecrypted += text[i];
    }
  }
  outputDecryptMessage.textContent = textDecrypted;
  inputDecryptMessage.textContent = '';
};

inputEncryptMessage.focus();

buttonEncryptSubmit.addEventListener('click', event => {
  event.preventDefault();
  encrypt(inputEncryptMessage.value);
});

buttonDecryptSubmit.addEventListener('click', event => {
  event.preventDefault();
  decrypt(inputDecryptMessage.value);
});

// decrypt(prompt('Wprowadź wiadomość do odszyfrowania:'));
