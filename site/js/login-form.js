const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
  e.preventDefault(); 

  const id = document.getElementById("userid").value.trim();
  const pw = document.getElementById("password").value.trim();
  if (id !== "" && pw !== "") {
    window.location.href = "index.html"; 
  } else {
    alert("Please enter both your username and password");
  }
});
}

const signinForm = document.getElementById("signin-form");
if (signinForm) {
  signinForm.addEventListener("submit", function(e) {
  e.preventDefault(); 
  const id = document.getElementById("userid").value.trim();
  const pw = document.getElementById("password").value.trim();
  const yn = document.getElementById("yourname").value.trim();
  const cf = document.getElementById("confirm").value.trim();
  if (id !== "" && pw !== "" && yn !="" && cf != "") {
    window.location.href = "index.html"; 
  } else {
    alert("Please enter");
  }
});
}