// sleep function implementation
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

purple = document.getElementById("purple");
orange = document.getElementById("orange");
blue = document.getElementById("blue");
myname = document.getElementById("myname");
wire = document.getElementById("wire");

purple.checked = false;
orange.checked = false;
blue.checked = false;

purple.addEventListener("click", () => {
  if (purple.checked == true) {
    sleep(200).then(function () {
      myname.style.animation = "purple 5s infinite alternate";
    });
  }
});

orange.addEventListener("click", () => {
  if (orange.checked == true) {
    sleep(200).then(function () {
      myname.style.animation = "orange 5s infinite alternate";
    });
  }
});

blue.addEventListener("click", () => {
  if (blue.checked == true) {
    sleep(200).then(function () {
      myname.style.animation = "blue 5s infinite alternate";
    });
  }
});

wire.addEventListener("click", () => {
  purple.checked = false;
  orange.checked = false;
  blue.checked = false;
  myname.style.animation = "none";
});
