const signUpForm = document.getElementById("signUpForm");
const loginUpForm = document.getElementById("loginUpForm");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const sUserName = document.getElementById("sUserName").value;
  const sPassword = document.getElementById("sPassword").value;
});
saveDataToIndexedDB(sUserName, sPassword);

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const lUserName = document.getElementById("lUserName").value;
  const lPassword = document.getElementById("lPassword").value;
});
saveDataToIndexedDB(lUserName, lPassword);
