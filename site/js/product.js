document.addEventListener("DOMContentLoaded", function () {
  const heart = document.getElementById("heart");
  heart.addEventListener("click", function () {
    if (heart.classList.contains("fa-regular")) {
      heart.classList.remove("fa-regular");
      heart.classList.add("fa-solid");
    } else {
      heart.classList.remove("fa-solid");
      heart.classList.add("fa-regular");
    }
  });

document.getElementById("addToCart").addEventListener("click", function () {
alert("The product has been added to your cart!")});
})