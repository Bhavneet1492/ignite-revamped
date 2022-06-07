// sleep function implementation
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
purple = document.getElementById("purple");
orange = document.getElementById("orange");
blue = document.getElementById("blue");
myname = document.getElementById("myname");
wire = document.getElementById("wire");
wire2 = document.getElementById("wire2");
wire3 = document.getElementById("wire3");
wire4 = document.getElementById("wire4");
plugTheme = document.getElementById("plugTheme");

purple.checked = false;
orange.checked = false;
blue.checked = false;

purple.addEventListener("click", () => {
  if (purple.checked == true) {
    wire4.style.display = "block";
    wire.style.display = "none";
    plugTheme.style.opacity = "0";
    wire2.style.display = "none";
    wire3.style.display = "none";
    sleep(200).then(function () {
      myname.style.animation = "purple 5s infinite alternate";
    });
  }
});

orange.addEventListener("click", () => {
  if (orange.checked == true) {
    wire3.style.display = "block";
    wire.style.display = "none";
    plugTheme.style.opacity = "0";
    wire2.style.display = "none";
    wire4.style.display = "none";
    sleep(200).then(function () {
      myname.style.animation = "orange 5s infinite alternate";
    });
  }
});

blue.addEventListener("click", () => {
  if (blue.checked == true) {
    wire2.style.display = "block";
    wire.style.display = "none";
    plugTheme.style.opacity = "0";
    wire3.style.display = "none";
    wire4.style.display = "none";
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
wire2.addEventListener("click", () => {
  wire2.style.display = "none";
  wire.style.display = "block";
  plugTheme.style.opacity = "1";
  purple.checked = false;
  orange.checked = false;
  blue.checked = false;
  myname.style.animation = "none";
});
wire3.addEventListener("click", () => {
  wire3.style.display = "none";
  wire.style.display = "block";
  plugTheme.style.opacity = "1";
  purple.checked = false;
  orange.checked = false;
  blue.checked = false;
  myname.style.animation = "none";
});
wire4.addEventListener("click", () => {
  wire4.style.display = "none";
  wire.style.display = "block";
  plugTheme.style.opacity = "1";
  purple.checked = false;
  orange.checked = false;
  blue.checked = false;
  myname.style.animation = "none";
});
