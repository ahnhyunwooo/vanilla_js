const body = document.querySelector("body");

const resized = {
  color: function () {
    if (window.innerWidth < 600) {
      body.style.backgroundColor = "red";
    } else if (600 < window.innerWidth && window.innerWidth < 900) {
      body.style.backgroundColor = "blue";
    } else {
      body.style.backgroundColor = "pink";
    }
  }
};

// 이벤트
window.addEventListener("resize", resized.color);
