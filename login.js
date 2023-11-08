let email = document.getElementById("email");
let password = document.getElementById("password");
const onlogin = async () => {
  if (email.value.trim() === "") {
    alert("Please enter your email.");
    return;
  }

  // Validate email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (password.value.trim() === "") {
    alert("Please enter your password.");
    return;
  }
  let obj = {
    email: email.value,
    password: password.value,
  };
  console.log(obj);
  try {
    let url = "https://time-trace-backend.onrender.com/user/login";
    let responce = await fetch(url, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (responce.ok) {
      const data = await responce.json();
      console.log("Response data", data);
      localStorage.setItem("user", JSON.stringify(data));
      alert("Login Successful");
      window.location.href = "./project.html";
    }
    email.value = "";
    password.value = "";
  } catch (error) {
    console.log(error.message);
  }
};
