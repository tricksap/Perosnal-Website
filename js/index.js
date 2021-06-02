const about = document.querySelector("#about");
const content = document.querySelector("#sad");
about.addEventListener("click", function () {
  const box = new WinBox({
    title: "About Me",
    background: "#19191D",
    width: "250px",
    height: "359px",
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    border: "5px",
    mount: content,
  });
});
