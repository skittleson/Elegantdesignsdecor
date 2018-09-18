function hideBurger() {
  document.getElementById("bmenub").click();
}
document.onkeydown = function(e) {
  if (e.keyCode == 27) {
    hideBurger();
  }
};