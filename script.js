const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  const social = document.getElementById("social");
  if (social.style.display == "none") {
    social.style.display = "block";
  } else social.style.display = "none";
});
