const loginText = document.querySelector(".title-text.login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (() => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
  signupBtn.click();
  return false;
});




//WatchlistJS
document.querySelectorAll('.card-row').forEach(row => {
  let isDown = false;
  let startX;
  let scrollLeft;

  row.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - row.offsetLeft;
    scrollLeft = row.scrollLeft;
  });

  row.addEventListener('mouseleave', () => {
    isDown = false;
  });

  row.addEventListener('mouseup', () => {
    isDown = false;
  });

  row.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - row.offsetLeft;
    const walk = (x - startX) * 1.5; 
    row.scrollLeft = scrollLeft - walk;
  });
});