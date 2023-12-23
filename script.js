const icons = document.querySelectorAll('.plus-icon');
icons.forEach((img)=>{
  img.addEventListener("click", function () {
    let p = this.parentElement.nextElementSibling;
    let questionimg = this.parentElement.querySelector("img");
    if (p.classList.contains("unseen")) {
      p.classList.remove("unseen");
      p.classList.add("seen");
      questionimg.src = "./assets/images/icon-minus.svg";
    }
     else {
      p.classList.remove("seen");
      p.classList.add("unseen");
    questionimg.src = "./assets/images/icon-plus.svg";
    }
  });
});