function sensor() {
  title.textContent = '🎉 Happy Birthday 🎉';
  message.textContent =
    '"HBD to the best dad in the world, you mean a lot in my world and thank you for everything I 💖 U!"';
  bdbutton.textContent = 'Have a great day!🎂';
  bdbutton.disabled = true;

  // Confetti
  for(let i=0; i<100; i++){
    const confetti = document.createElement('div');
    confetti.style.position = 'absolute';
    confetti.style.width = confetti.style.height = '8px';
    confetti.style.background = `hsl(${Math.random()*360},100%,50%)`;
    confetti.style.top = Math.random()*window.innerHeight + 'px';
    confetti.style.left = Math.random()*window.innerWidth + 'px';
    confetti.style.borderRadius = '50%';
    document.body.appendChild(confetti);
    setTimeout(()=>confetti.remove(), 3000);
  }
}
