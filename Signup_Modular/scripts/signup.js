
import { navbar } from "./components/navbar.js";
import { footer } from "./components/footer.js";
document.getElementById("footer").innerHTML = footer();


document.getElementById("navbar").innerHTML = navbar();

const signupBtn = document.getElementById("signupBtn");

signupBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const password = document.getElementById("password").value.trim();

  console.log("Name:", name);
  console.log("Password:", password);

  let user={name,password};

  localStorage.setItem("user",JSON.stringify(user));
  window.location.href = "./login.html";
});
