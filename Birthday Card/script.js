const bdbutton = document.querySelector('button');
const title = document.querySelector('h1');
const message = document.querySelector('p');

bdbutton.addEventListener('click', sensor);

function sensor() {
  title.textContent = '🎉 Happy Birthday 🎉';
  message.textContent =
    '"HBD my bestie today was a day God created an amazing friend like you. We will always be best friends for life I ❤️ U bro!"';
  bdbutton.textContent = 'Have a great day!🎂';
  bdbutton.disabled = true;
}