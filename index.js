document.addEventListener("DOMContentLoaded", function () {
  let h1 = document.querySelector(".Script-Text");

  setInterval(function () {
    if (h1.innerText.trim() === "Perrelli Racing") {
      h1.style.opacity = 0;
      setTimeout(function () {
        h1.innerText = "Powered By";
        h1.style.opacity = 1;
      }, 500);
    } else if (h1.innerText.trim() === "Powered By") {
      h1.style.opacity = 0;
      setTimeout(function () {
        h1.innerText = "Serafini";
        h1.style.opacity = 1;
      }, 500);
    } else if (h1.innerText.trim() === "Serafini") {
      h1.style.opacity = 0;
      setTimeout(function () {
        h1.innerText = "Welcome To The Perrelli Team";
        h1.style.opacity = 1;
      }, 500);
    } else {
      h1.style.opacity = 0;
      setTimeout(function () {
        h1.innerText = "Perrelli Racing";
        h1.style.opacity = 1;
      }, 500);
    }
  }, 3000);
});
