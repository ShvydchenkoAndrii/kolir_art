const card = document.querySelector(".master-class_item");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});