let textareas = document.getElementsByClassName("p-content__item");

for (let i = 0; i < textareas.length; i++) {
  textareas[i].addEventListener("input", function() {
    for (let j = 0; j < textareas.length; j++) {
      if (textareas[j] != this) {
        textareas[j].style.height = this.scrollHeight + "px";
      }
    }
  });
}