let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");

const onsignup = async () => {
  if (firstName.value.trim() === "") {
    alert("Please enter your first name.");
    return;
  }

  if (lastName.value.trim() === "") {
    alert("Please enter your last name.");
    return;
  }

  if (email.value.trim() === "") {
    alert("Please enter your email.");
    return;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (password.value.trim() === "") {
    alert("Please enter your password.");
    return;
  }

  // Validate password length, uppercase letter, and special character
  if (password.value.length < 8) {
    alert("Password must be at least 8 characters long.");
    return;
  }

  if (!/[A-Z]/.test(password.value)) {
    alert("Password must contain at least one uppercase letter.");
    return;
  }

  if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~]/.test(password.value)) {
    alert("Password must contain at least one special character.");
    return;
  }
  let obj = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  };
  console.log(obj);
  try {
    let url = "https://time-trace-backend.onrender.com/user/register";
    let responce = await fetch(url, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let res = await responce.json();
    console.log("res", res);
    alert("SignUp Successfull");
    window.location.href = "./login.html";
  } catch (error) {
    console.log(error.message);
  }
};
