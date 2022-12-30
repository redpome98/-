const background = document.querySelector("body");

function ColorChange() {
  const WindowSize = window.innerWidth;
  if (WindowSize > 1200) {
    background.style.backgroundColor = "yellow";
  } else if (WindowSize < 1200 && WindowSize > 800) {
    background.style.backgroundColor = "darkviolet";
  } else if (WindowSize < 800) {
    background.style.backgroundColor = "cornflowerblue";
  }
}

window.addEventListener("resize", ColorChange);
