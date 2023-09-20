let icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("bg");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "assets/images/sun.png";
  } else {
    icon.src = "assets/images/moon.png";
  }
};
