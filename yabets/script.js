const bdbutton = document.getElementById('bdbutton');
const title = document.querySelector('h1');
const message = document.querySelector('p');

bdbutton.addEventListener('click', function() {
    title.textContent = '🎉 Happy Birthday Yabets! 🎉';
    message.textContent = '"HBD to the awesome Yabets! Wishing you loads of happiness, laughter, and amazing memories! 🎂🎈"';
    bdbutton.textContent = 'Celebrate! 🎊';
    bdbutton.disabled = true;
});