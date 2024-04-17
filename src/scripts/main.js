document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("js.toggleButton2")
    .addEventListener("click", toggleShare);

  document
    .getElementById("js.toggleButton1")
    .addEventListener("click", toggleShare);

  function toggleShare() {
    document.getElementById("js.sharePopup").classList.toggle("invisible");
    document.getElementById("js.shareTriangle").classList.toggle("hidden");
  }
});
