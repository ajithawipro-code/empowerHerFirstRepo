import { navbar } from "./components/navbar.js";
import { footer } from "./components/footer.js";
document.getElementById("navbar").innerHTML = navbar();




loginBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const password = document.getElementById("password").value.trim();

  console.log("Entered Name:", name);
  console.log("Entered Password:", password);
  const storedUser = JSON.parse(localStorage.getItem("user"));
console.log("Stored User:",storedUser);

if (storedUser &&
      storedUser.name === name &&
      storedUser.password === password) {

      window.location.href = "./todos.html";
  } else {
      alert("Invalid Credentials");
  }

});

  document.getElementById("footer").innerHTML = footer();
