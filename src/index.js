import "@styles/style";
// Homepage
import homepage from "@homepage/homepage.js";
import "@homepage/homepage.css";

const app = document.getElementById("app");

homepage.forEach((element) => app.insertAdjacentHTML("beforeend", element));
